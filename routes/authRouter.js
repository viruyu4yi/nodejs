const Router = require('express');
const router = new Router();
const controller = require('../authController');

router.post('/login', controller.login);

module.exports = router;
