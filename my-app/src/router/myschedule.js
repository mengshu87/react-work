const express = require('express');
const router = express.Router();
const MySchedule = require('../model/myschedule');


router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

/*
MySchedule.create({checked:false,type:"部门会议",title:"311",local :"11",date:"2018-07-23",date2:"20180723",time:"10:19:04",person:"11",originator:"11"})
*/

router.get('/', (req, res) => {
    function toD(n){
        return n=n<10?'0'+n:''+n;
    }
    const json = {code:3,msg:"错误"};
    let obj=req.query;
    let act=obj.act;
    let id,content,date;
    let day1=new Date();
    day1.setDate(day1.getDate() - 1);
    let year=day1.getFullYear();
    let month=day1.getMonth()+1;
    let day=day1.getDate();
    let str=toD(year)+''+toD(month)+''+toD(day);
    str=str*1;
    let arr=[];
    const PAGE_SIZE=12;
    switch(act){
        case 'get0':    //获取数据
            MySchedule.find()
                .skip()
                .limit()
                .exec((err, data) =>{
                    //console.log(data);
                    let arr=[];
                    for(let o of data){
                        let obj2={
                            id:o.id,
                            checked:o.checked,
                            type:o.type,
                            title:o.title,
                            local:o.local,
                            date:o.date,
                            date2:o.date2,
                            time:o.time,
                            person:o.person,
                            originator:o.originator
                        }
                        arr.push(obj2);
                    }
                    res.json(arr);
                })
            break;
        case 'get':    //获取数据
            let page=Number(obj.page);
            if(!page){
                json.code=-1;
                json.msg='参数错误';
                res.json(json);
            }else{
                MySchedule.find({date2:{$gt: str}})
                    .skip(PAGE_SIZE * (page-1))
                    .limit(PAGE_SIZE)
                    .exec((err, data) =>{
                        //console.log(data);
                        let arr=[];
                        for(let o of data){
                            let obj2={
                                id:o.id,
                                checked:o.checked,
                                type:o.type,
                                title:o.title,
                                local:o.local,
                                date:o.date,
                                date2:o.date2,
                                time:o.time,
                                person:o.person,
                                originator:o.originator
                            }
                            arr.push(obj2);
                        }
                        res.json(arr);
                    })
            }
            break;
        case 'getother':
            let page2=Number(obj.page);
            if(!page2){
                json.code=-1;
                json.msg='参数错误';
                res.json(json);
            }else{
                MySchedule.find({date2:{$lte: str}})
                    .skip(PAGE_SIZE * (page2-1))
                    .limit(PAGE_SIZE)
                    .exec((err, data) =>{
                        //console.log(data);
                        let arr=[];
                        for(let o of data){
                            let obj2={
                                id:o.id,
                                checked:o.checked,
                                type:o.type,
                                title:o.title,
                                local:o.local,
                                date:o.date,
                                date2:o.date2,
                                time:o.time,
                                person:o.person,
                                originator:o.originator
                            }
                            arr.push(obj2);
                        }
                        res.json(arr);
                    })
            }
            break;
        case 'get_page_count':      //获取页码对应的数据
            MySchedule.find({date2:{$gt: str}}).count({},(error,n)=>{
                json.code=0;
                json.msg='页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
                json.count=Math.ceil(n/PAGE_SIZE);
                res.json(json);
            });
            break;
        case 'get_page_count2':      //获取页码对应的数据
            MySchedule.find({date2:{$lte: str}}).count({},(error,n)=>{
                json.code=0;
                json.msg='页数获取成功！当前设置为' + PAGE_SIZE + '条数据一分页';
                json.count=Math.ceil(n/PAGE_SIZE);
                res.json(json);
            });
            break;
        case 'delAll':         //批量删除
            let all=req.query.all;
            let l=JSON.parse(all);
            //console.log(l);
            for(let i=0;i<l.length;i++){
                MySchedule.remove({_id:l[i]},(error,data)=>{
                    if(!error){
                        json.code=0;
                        json.msg='删除成功';
                    }else{
                        json.code=-1;
                        json.msg='删除失败';
                    }
                })
            }
            break;
        case 'search':
            let name=req.query.name;
            //console.log(name);
            let page3=Number(obj.page);
            MySchedule.find({originator: name})
                .skip(PAGE_SIZE * (page3-1))
                .limit(PAGE_SIZE)
                .exec((err, data) =>{
                    let arr=[];
                    for(let o of data){
                        let obj2={
                            id:o.id,
                            checked:o.checked,
                            type:o.type,
                            title:o.title,
                            local:o.local,
                            date:o.date,
                            date2:o.date2,
                            time:o.time,
                            person:o.person,
                            originator:o.originator
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
router.post('/',(req,res)=> {
    const json={code: 3, msg: "错误"};
    const body=req.body;
    let act=body.act;
    let {checked,type,title,local,date,time,person,originator} = body;
    //console.log(time);
    switch (act) {
        case 'add':
            if(!type||!title||!local||!date||!time||!person||!originator){
                res.json(json);
                return;
            };
            MySchedule.create({
                checked:false,
                type,
                title,
                local,
                date,
                date2:Number(date.split('-').join('')),
                time,
                person,
                originator
            },(error,data)=>{
                if(!error){
                    json.code = 0;
                    json.msg = '注册成功!';
                    json.data = {checked,type,title,local,date,time,person,originator};
                    res.json(json);
                }
            });
            break;
    }
})

module.exports = router;