const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const post_controller = require('../controllers/post.controller');

// a simple test url to check that all of our files are communicating correctly. 
router.get('/', post_controller.list);
router.get('/list', post_controller.list);
router.get('/create', post_controller.create);
router.get('/update', post_controller.update);
router.get('/view', post_controller.view);

module.exports = router;