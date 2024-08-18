var express = require('express');
const dashboardController = require('../controller/dashboardController');
var router = express.Router();

/* GET home page. */
router.get('/dashboard',dashboardController.index);

module.exports = router;