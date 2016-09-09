var path=require('path');
var express = require('express');
var expressRestResource = require('express-rest-resource');
var nedb = require('nedb');

var app = express();
app.use(express.static(path.join(__dirname, '..','common')));
app.use(express.static(path.join(__dirname, 'public')));


var postDb = new nedb({ filename: 'postDb', autoload: true });

app.use('/api/post', expressRestResource({ db: postDb }));

require('react-restui/lib/server/uploadify')(app,'uploads'); //for upload_zone

app.listen("3000");