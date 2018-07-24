
const express = require('express');
const router = express.Router();
const Usermanage = require('../model/usermanage');

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

router.get('/', (req, res) => {
    const json = {code:3,msg:"错误"};
    let obj=req.query;
    let act=obj.act;
    let id,content;
    const PAGE_SIZE=10;
    switch(act){
        case 'get':    //获取数据
            let page=Number(obj.page);
            if(!page){
                json.code=-1;
                json.msg='参数错误';
                res.json(json);
            }else{
                Usermanage.find({})
                        .sort('-time')
                        .skip(PAGE_SIZE * (page-1))
                        .limit(PAGE_SIZE)
                        .exec((err, data) =>{
                              console.log(data);
                              let arr=[];
                              for(let o of data){
                                  let obj2={
                                      id:o._id,
                                      checked:o.checked,
                                      name:o.name,
                                      pass:o.pass,
                                      ygxm:o.ygxm,
                                      ygzw:o.ygzw,
                                      bmmc:o.bmmc,
                                      sjld:o.sjld
                                  }
                                  arr.push(obj2);
                              }
                              res.json(arr);
                          })
            }
            break;
        case 'get_page_count':      //获取页码对应的数据
            Usermanage.count({},(error,n)=>{
                json.code=0;
                json.msg='页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
                json.count=Math.ceil(n / PAGE_SIZE);
                res.json(json);
            });
            break;
        case 'del':         //点击删除
            id=req.query.id;
            Usermanage.remove({_id:id},(error)=>{
                if(!error){
                    json.code=0;
                    json.msg='删除成功';
                    res.json(json);
                }else{
                    json.code=-1;
                    json.msg='删除失败';
                    res.json(json);
                }
            })
            break;
        case 'delAll':         //批量删除
            let all=req.query.all;
            //console.log(all)
            let l=JSON.parse(all);
            //console.log(l)
            for(let i=0;i<l.length;i++){
                Usermanage.remove({_id:l[i]},(error,data)=>{
                    if(!error){
                        console.log(data)
                        json.code=0;
                        json.msg='删除成功'
                    }else{
                        json.code=-1;
                        json.msg='删除失败';
                    }
                })
            }
            break;
        case 'search':
            let name=req.query.name;
            console.log(name);
            let page2=Number(obj.page);
            Usermanage.find({ygxm: name})
                .sort('-time')
                .skip(PAGE_SIZE * (page2-1))
                .limit(PAGE_SIZE)
                .exec((err, data) =>{
                    let arr=[];
                    for(let o of data){
                        let obj2={
                            id:o._id,
                            checked:o.checked,
                            name:o.name,
                            pass:o.pass,
                            ygxm:o.ygxm,
                            ygzw:o.ygzw,
                            bmmc:o.bmmc,
                            sjld:o.sjld
                        }
                        arr.push(obj2);
                    }
                    res.json(arr);
                })
            break;
        default:
            break;

    }
});
//登录接口
router.post('/login',(req,res)=>{
    const json = {code:3,msg:"错误"};
    const body = req.body;
    let {act,checked,name,pass,ygxm,ygzw,bmmc,sjld} = body;
    switch(act){
        case 'login':
            Usermanage.findOne({name},(error,data)=>{
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
        case 'findPass':
            let pass1=req.body.pass;
            let page3=Number(obj.page);
            Usermanage.find({pass: pass1})
                .sort('-time')
                .skip(PAGE_SIZE * (page3-1))
                .limit(PAGE_SIZE)
                .exec((err, data) =>{
                    let arr=[];
                    for(let o of data){
                        let obj2={
                            id:o._id,
                            checked:o.checked,
                            name:o.name,
                            pass:o.pass,
                            ygxm:o.ygxm,
                            ygzw:o.ygzw,
                            bmmc:o.bmmc,
                            sjld:o.sjld
                        }
                        arr.push(obj2);
                    }
                    res.json(arr);
                })
            break;
        default:
            break;
    }
})
//添加数据接口
router.post('/',(req,res)=> {
    const json={code: 3, msg: "错误"};
    const body=req.body;
    let act=body.act;
    let {checked,name,pass,ygxm,ygzw,bmmc,sjld} = body;
    switch (act) {
        case 'add':
            if(!name||!pass||!ygxm||!ygzw||!bmmc||!sjld){
                res.json(json);
                return;
            };
            Usermanage.findOne({name},(error,data)=>{
                if(data){
                    json.code = 1;
                    json.msg = '用户名已占用';
                    res.json(json);
                }else{
                    console.log(222);
                    Usermanage.create({
                        checked:false,
                        name,
                        pass,
                        ygxm,
                        ygzw,
                        bmmc,
                        sjld
                    },(error,data)=>{
                        if(!error){
                            json.code = 0;
                            json.msg = '注册成功!';
                            json.data = {checked,name,pass,ygxm,ygzw,bmmc,sjld};
                            res.json(json);
                        }
                    });
                }
            });
            break;
    }
})
//编辑数据接口
router.post('/bj',(req,res)=> {
    const json = {code: 3, msg: "错误"};
    const body = req.body;
    let act = body.act;
    switch (act) {
        case 'edit':
            let id=body.id;
            Usermanage.update({_id:id},body,(error,data)=>{
                if(error){
                    json.code=-1;
                    json.msg='更新失败！';
                    res.json(json);
                }else{
                    console.log(12);
                    json.code=0;
                    json.msg='更新成功！';
                    res.json(json);
                }
            })
            break;

    }
});
module.exports = router;