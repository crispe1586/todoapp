var Task = require("../../models/Task.js");

module.exports = function(req,res){
	var taskid = req.params.taskid;
	
	if(taskid){
		var task = new Task({
			_id: taskid,
			name:req.body.name,
			done:req.body.done,
			user:req.body.user
		});

		var upsertData=task.toObject();

		Task.update(
			{_id:taskid},
			upsertData,
			{upsert:true},
			function(err,data){
				if(err) return res.json(500,{error:err});
				//res.json(201,{data});
				res.status(201).json({data});
			}
		);

	}
	
};