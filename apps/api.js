var express = require('express');

//load callback functions
var usersGet 	= require('../routes/users/get');
var usersPost 	= require('../routes/users/post');
var usersDelete = require('../routes/users/delete');
var usersPut 	= require('../routes/users/put');
var tasksGet 	= require('../routes/tasks/get');
var tasksPost	= require('../routes/tasks/post');
var tasksDelete	= require('../routes/tasks/delete');
var tasksPut	= require('../routes/tasks/put');

//Define express router instance
var router=express.Router();

//Define API available routes
router.get('/users',usersGet);
router.get('/users/:userid',usersGet);
router.post('/users/',usersPost);
router.delete('/users/:userid',usersDelete);
router.put('/users/:userid',usersPut);

router.get('/tasks',tasksGet);
router.get('/tasks/:taskid',tasksGet);
router.post('/tasks',tasksPost);
router.delete('/tasks/:taskid',tasksDelete);
router.put('/tasks/:taskid',tasksPut);

module.exports=router;
