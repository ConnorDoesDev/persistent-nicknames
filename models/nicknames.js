const mongoose = require('mongoose');

const nicknameSchema = new mongoose.Schema({
    userID: String,
    serverID: String,
    nickname: String
});

module.exports = mongoose.model('nicknames', nicknameSchema);