/*
 * @Author: 刘祥祥 
 * @Date: 2019-03-21 15:37:52 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-22 09:49:58
 * function(){操作分类逻辑}
 */

var Mongo = require('Mongodb-curd');
var dbBase = 'Lemon'; //数据库

module.exports = {
    getIcon: function(req, res, next) { //获取icon
        Mongo.find(dbBase, 'iconlist', function(result) {
            if (!result) {
                res.send({
                    code: 0,
                    mes: "error"
                })
            } else {
                res.send({
                    code: 1,
                    mes: "success",
                    data: result
                })
            }
        }, {
            skip: 0,
            limit: 0
        });
    },
    addClassify: function(req, res, next) { //添加自定义分类
        let { iname, cname, type, uid } = req.body;
        if (!iname || !cname || !type || !uid) {
            Mongo.insert(dbBase, 'classify', req.body, function(result) {
                if (!result) {
                    res.send({
                        code: 0,
                        mes: "error"
                    })
                } else {
                    res.send({
                        code: 1,
                        mes: "success",
                        data: result
                    })
                }
            })
        }
    },
    getClassify: function(req, res, next) { //获取用户的 收入/支出 分类
        let { type, uid } = req.query; //用户uid,收入或支出类型type
        Mongo.find(dbBase, 'classify', { uid: { $in: ['*', uid] }, type: type }, function(result) {
            if (!result) {
                res.send({
                    code: 0,
                    mes: "error"
                })
            } else {
                res.send({
                    code: 1,
                    mes: "success",
                    data: result
                })
            }
        })
    }



}