/*后台数据库*/
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user',require('./router/user'));
app.use('/department',require('./router/department'));
app.use('/usermanage',require('./router/usermanage'));
app.use('/myschedule',require('./router/myschedule'));

app.use(express.static('works'));
mongoose.connect("mongodb://127.0.0.1:27017");

mongoose.connection.on('open',function(){
    console.log('链接成功');
    app.listen(8088);
});