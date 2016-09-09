var path=require('path');
var express = require('express');

var app = express();
app.use(express.static(path.join(__dirname, '..','common')));
app.use(express.static(path.join(__dirname, 'public')));


require('react-restui/lib/server/qntoken')(app,"ACCESS_KEY","SECRET_KEY","bucket");


app.listen("3000");