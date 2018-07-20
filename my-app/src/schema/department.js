
const mongoose = require("mongoose");

const Department = new mongoose.Schema({
    checked:Boolean,     
    bmmc:String,         //部门名称
    bmms:String,        //部门描述
    bmfzr:String,       //部门负责人
    sjbm:String        //上级部门


});

module.exports = Department;
