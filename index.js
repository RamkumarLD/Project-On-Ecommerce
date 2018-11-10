//program to start server and run the end points

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var User = require('./server/routes/users');

mongoose.connect("mongodb://localhost/EcomProject");

var db=mongoose.connection;

var app = express();

app.use(cors());

app.use(bodyparser.json());

app.post('/api/register', User.registerUser);
app.post('/api/login',User.loginUser);

app.listen(9988,()=>{
    console.log("server started on 9988");
});