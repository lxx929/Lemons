/*
 * @Author: 刘祥祥 
 * @Date: 2019-03-21 15:04:12 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-21 16:45:03
 * @function(){用户获取逻辑} 
 */
var Mongo = require('Mongodb-curd');
var dbBase = 'Lemon';
var dbColl = 'user';

module.exports = function(req, res, next) { //获取用户
    Mongo.find(dbBase, dbColl, {}, function(result) {
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
}