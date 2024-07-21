const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({ 
    // Want a title, content and collects the Author and date and that it posts in the DB or schema??
    title: { type: String, required: true },
    cotent: {type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', PostSchema); //exports the module

