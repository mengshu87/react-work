
const mongoose = require("mongoose");

const Usermanage = new mongoose.Schema({
    checked:Boolean,
    name:String,        //后台登录的用户名
    pass:String,        //后台登录密码
    ygxm:String,        //员工姓名
    ygzw:String,        //员工职位
    bmmc:String,        //所属部门
    sjld:String        //部门领导



});
module.exports=Usermanage;
