var Task=require('../../models/Task.js');

module.exports=function(req,res){
	var taskid=req.params.taskid;
	if(taskid){
		//get one
		Task.findById(taskid,function(err,data){
			if(err) res.json({error:err});
			res.json({data:data});
		});
	}else{
		//get all
		Task.find(function(err,data){
			if(err) res.json({error:err});
			res.json({data:data});	
		});
	}	
};