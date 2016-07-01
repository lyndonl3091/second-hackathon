'use strict';

const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({ });

let Post = mongoose.model('Post', postSchema);

module.exports = Post;