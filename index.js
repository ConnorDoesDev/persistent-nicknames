// A Discord Bot that stores nicknames in a MongoDB database and re-nicknames returning members when the re-join the server with the same nickname they had before they left.
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
const mongoose = require('mongoose');
const config = require('./config.json');

// Connect to MongoDB
mongoose.connect(config.mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log(err);
});

client.on('ready', () => {
    client.user.setActivity('with nicknames', { type: 'PLAYING' });
    console.log('Logged in as ' + client.user.tag);
});

// When a member joins the server, check if they have a nickname stored in the database and re-nickname them if they do
client.on('guildMemberAdd', async (member) => {
    const data = await require('./models/nicknames.js').findOne({ userID: member.id });
    if (data) {
        member.setNickname(data.nickname);
    }
});

// When a member leaves the server, store their nickname in the database
client.on('guildMemberRemove', async (member) => {
    const data = await require('./models/nicknames.js').findOne({ userID: member.id });
    if (data) {
        data.nickname = member.nickname;
        data.save();
    } else {
        new require('./models/nicknames.js')({
            userID: member.id,
            nickname: member.nickname
        }).save();
    }
});

client.login(config.token);