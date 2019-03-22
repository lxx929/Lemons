var express = require('express');
var router = express.Router();

const userApi = require('./userApi');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/api/getUsers', userApi); //获取用户

module.exports = router;