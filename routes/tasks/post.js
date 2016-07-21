var Task = require('../../models/Task.js');

module.exports = function(req,res){
	
	
	var task = new Task({
		name:req.body.name,
		done:req.body.done,
		user:req.body.user._id
			
	});
	
	task.save(function(err,data){
		if(err) return res.json({error:err});
		res.json(201,{data});
	});
	
};