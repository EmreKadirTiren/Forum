const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: { type, String, requird: true, unique: true},
    email: { type: String, requird: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);