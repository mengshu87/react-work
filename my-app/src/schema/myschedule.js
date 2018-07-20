const mongoose = require("mongoose");

const MySchedule = new mongoose.Schema({
    checked:Boolean,
    type:String,
    title:String,       //日程标题
    local:String,       //会议位置
    date:String,
    date2:Number,
    time:String,        //会议时间
    person:String,      //参与人员
    originator:String   //发起人

});
module.exports=MySchedule;