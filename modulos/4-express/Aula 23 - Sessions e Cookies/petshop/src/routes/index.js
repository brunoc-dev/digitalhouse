var express = require('express');
var router = express.Router();
const BaseController = require('../controllers/BaseController');

/* GET home page. */
router.get('/', BaseController.index);
router.get('/login', BaseController.loginForm);

module.exports = router;
