//app.js
const express = require('express');
const bodyParser = require('body-parser'); 
const db = require('./config/database');
const admin = require('./admin/app');
const site = require('./routes/app.route');
const app = express(); 
let port = 777;  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
  
app.use('/', site); 
app.use('/admin', admin); 

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});