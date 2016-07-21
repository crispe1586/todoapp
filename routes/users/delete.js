//load model
var User=require('../../models/User.js');

module.exports=function(req,res){
	var userid=req.params.userid;
	//res.json({msg:'calling delete'});
	if(userid){
		User.remove(
			{ _id: userid }, 
			function(err) { 
				if (err) return res.json(500, { error: err });
				res.json({message:"deleted succesfully"}); 
				 
			}
		);	
	}
	
};