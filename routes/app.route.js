const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const home_controller = require('../controllers/home.controller'); 

// a simple test url to check that all of our files are communicating correctly. 
router.get('/', home_controller.home); 
router.get('/users', home_controller.users);  
router.get('/posts', home_controller.posts);  

module.exports = router;