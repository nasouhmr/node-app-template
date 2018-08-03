//app.js
const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/user.route');
const posts = require('./routes/post.route');
const db = require('../config/database');
const admin = express();  

admin.use(bodyParser.json());
admin.use(bodyParser.urlencoded({ extended: false })); 

admin.use('/', users);
admin.use('/users', users);  
admin.use('/posts', posts);  

module.exports = admin;