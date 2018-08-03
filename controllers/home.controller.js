const Post = require('../models/post.model');
const User = require('../models/user.model');

exports.home = function (req, res) {
    res.send('home page!');
};

exports.posts = function (req, res) {
    res.send('posts list!');
};
 
exports.users = function (req, res) {
    res.send('users list!');
};
 