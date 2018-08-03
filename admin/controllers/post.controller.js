const Post = require('../../models/post.model');

exports.list = function (req, res) {
    res.send('posts list!');
};
 
exports.create = function (req, res) {
    let post = new Post(
        {
            title: 'title 1',
            content: 'content 1',
            photo: 'photo.jpg'
        }
    );
    post.save(function (err) {
        if (err) {
            return next(err);
        }
    });    
    res.send('Post Created successfully')
};

exports.update = function (req, res) {
    res.send('posts update!');
};

exports.view = function (req, res) {
    res.send('posts view!');
};