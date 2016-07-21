var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var logger=require('morgan');
var mongoose=require('mongoose');

//load routes file for api
var api = require('./apps/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//Configuration
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

//use api.js routes for every request starting with /api
app.use('/api', api);

//MongoDB
//RemoteDB Modulus
mongoose.connect('mongodb://dbuser:dbpassword@olympia.modulusmongo.net:27017/oQepiw9e'); 
//Event Open callback
mongoose.connection.once('open',function(){
	console.log('MongoDB running');
});
//LocalDB
//mongoose.connect('mongodb://localhost:27017/todo_db');


app.listen(3000,function(){
	console.log("NodeJS runnning in port 3000");
});