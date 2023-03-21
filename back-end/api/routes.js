const express = require('express');
const router = express.Router();
const authorization = require('./middleware/authorization');

const userController = require('./controller/user');

// user
router.get('/user/list', authorization.authorize, userController.list);

module.exports = router;
