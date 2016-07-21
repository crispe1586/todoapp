var Task = require('../../models/Task.js');

module.exports = function(req,res){
	var taskid = req.params.taskid;
	if(taskid){
		Task.remove(
			{_id:taskid},
			function(err,data){
				if(err) return res.json(500,{error,err});
				
				res.json({message:"deleted succesfully"});
				
			}
		);		
	}
};