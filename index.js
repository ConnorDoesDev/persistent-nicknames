// A Discord Bot that stores nicknames in a MongoDB database and re-nicknames returning members when the re-join a specific server with the same nickname they had before they left.
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
const mongoose = require('mongoose');
const config = require('./config.json');
const DEL = require("@zerotwobot/del.js");
const del = new DEL(config.DEL, config.clientID);
const cron = require('node-cron');

// Connect to MongoDB
mongoose.connect(config.mongo, {
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

    cron.schedule('*/30 * * * *', () => { // Every 30 minutes
        del.post(client.guilds.cache.size, 0)
    });
});

client.on('guildCreate', async (guild) => {
    console.log('Joined a new guild: ' + guild.name);
});

client.on('guildDelete', async (guild) => {
    console.log('Left a guild: ' + guild.name);
});

// When a member joins the server, check if they have a nickname stored in the database and re-nickname them if they do
client.on('guildMemberAdd', async (member) => {
    const data = await require('./models/nicknames.js').findOne({ userID: member.id, serverID: member.guild.id });
    if (data) {
        member.setNickname(data.nickname);
    }
});

// When a member leaves the server, store their nickname in the database
client.on('guildMemberRemove', async (member) => {
    const data = await require('./models/nicknames.js').findOne({ userID: member.id, serverID: member.guild.id });
    if (data) {
        data.nickname = member.nickname;
        data.save();
    } else {
        new require('./models/nicknames.js')({
            userID: member.id,
            serverID: member.guild.id,
            nickname: member.nickname
        }).save();
    }
});

client.on('messageCreate', async (message) => {
    if (message.author.id === '744603004493365330' && message.content.startsWith('pn!eval')) {
        try {
            const code = message.content.slice(5);
            let evaled = eval(code);
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
            message.channel.send(evaled, { code: 'xl' });
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
        }
    }

    if (message.content === 'pn!delete') {
        // Add a way to have the user confirm that they want to delete their nickname
        const awaitMessage = await message.channel.send('Are you sure you want to delete your nickname data from the database?');
        awaitMessage.react('✅');
        awaitMessage.react('❌');
        const filter = (reaction, user) => {
            return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        awaitMessage.awaitReactions({ filter, max: 1, time: 60000, errors: ['time'] })
            .then(async (collected) => {
                const reaction = collected.first();
                if (reaction.emoji.name === '✅') {
                    const data = await require('./models/nicknames.js').findOne({ userID: message.author.id, serverID: message.guild.id });
                    if (data) {
                        data.delete();
                        message.channel.send(':white_check_mark: All data stored about you has been deleted.');
                    } else {
                        message.channel.send(':x: We couldn\'t find any data stored about you.');
                    }
                } else {
                    message.channel.send(':x: Cancelled.');
                }
            })
            .catch(() => {
                message.channel.send(':x: Cancelled.');
            });
    }

    if (message.content === 'pn!help') {
        message.channel.send('\`pn!delete\` - Deletes all data stored about you in the database.\n\`pn!help\` - Shows this message.');
    }
});




client.login(config.token);