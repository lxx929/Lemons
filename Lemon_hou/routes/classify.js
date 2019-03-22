var express = require('express');
var router = express.Router();

const classifyApi = require('./classifyApi');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/api/getIcon', classifyApi.getIcon); //获取分类icon

router.post('/api/addClassify', classifyApi.addClassify); //添加自定义分类

router.get('/api/getClassify', classifyApi.getClassify); //获取用户的 收入/支出 分类

module.exports = router;