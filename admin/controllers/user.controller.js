const User = require('../../models/user.model');

exports.list = function (req, res) {
    res.send('users list!');
};
 
exports.create = function (req, res) {
    let user = new User(
        {
            username: 'User2',
            email: 'demo@gmail.com',
            password: '123456'
        }
    );
    user.save(function (err) {
        if (err) {
            return next(err);
        } 
    });
    res.send('User Created successfully')   
};

exports.update = function (req, res) {
    res.send('users update!');
};

exports.view = function (req, res) {
    res.send('users view!');
};