const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');

// a simple test url to check that all of our files are communicating correctly. 
router.get('/', user_controller.list);
router.get('/list', user_controller.list);
router.get('/create', user_controller.create);
router.get('/update', user_controller.update);
router.get('/view', user_controller.view);

module.exports = router;