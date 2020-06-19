var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var atletasRouter = require('./routes/atletasRoute');
var provasRouter = require('./routes/provasRoute');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/api/atletas', atletasRouter);
app.use('/api/provas', provasRouter);


module.exports = app;
















