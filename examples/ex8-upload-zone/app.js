var path=require('path');
var express = require('express');

var app = express();
app.use(express.static(path.join(__dirname, '..','common')));
app.use(express.static(path.join(__dirname, 'public')));

require('react-restui/lib/server/uploadify')(app,'uploads'); //for upload_zone

app.listen("3000");