//load model
var User = require('../../models/User');
module.exports=function(req, res){
	
	var userid=req.params.userid;
	
	if(userid){
		 
		//Get one
		User.findById(userid,function(err,data){
			if(err) return res.send(500, { error: err });
			res.json({data:data});
		});
		
	}else{
		//Get all
		User.find(function(err,data){
			if(err) return res.send(500, { error: err });
			res.json({s:data});
		});
	}
};