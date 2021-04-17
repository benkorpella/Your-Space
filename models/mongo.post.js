const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: undefined}, 
    tags: [String],
    body: String,
    author: {type: String, maxLength: 14000000 }, // Max body size 14MB; MongoDB document max size is 16MB
    draft: Boolean
  });

const Post = mongoose.model('post', postSchema);

module.exports = Post