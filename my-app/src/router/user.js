/**
 * Created by MS on 2018/6/28.
 */
const express = require('express');
const router = express.Router();
const User = require('../model/user');
//引cookie
const cookieParase = require('cookie-parser');
//添加中间件

router.use(cookieParase());

//创建数据
/*User.create(
    {name:'aa',pass:'aa'},
    {name:'11',pass:'11'},
    {name:'22',pass:'22'},
    {name:'bb',pass:'bb'},
    {name:'dd',pass:'dd'},
    {name:'cc',pass:'cc'}
)*/
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

router.post('/',(req,res)=>{
    const json = {code:3,msg:"错误"};
    const body = req.body;
    let {act,name,pass} = body;

    switch(act){
        case '':

            break;
        case 'login':
            User.findOne({name},(error,data)=>{
                if(!data){
                    json.code = 1;
                    json.msg = '没有该用户';
                }else{
                    if(data.pass == pass){
                        json.code = 0;
                        json.msg = '登录成功';
                        json.data = name;
                    }else{
                        console.log('密码错误');
                        json.code = 2;
                        json.msg = '用户名或密码错误';
                    }
                }
                res.json(json);
            });
            break;
    }

});

module.exports = router;