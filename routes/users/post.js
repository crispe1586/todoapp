//load model
var User=require('../../models/User.js');

module.exports=function(req,res,next){
	var user=new User({
						name: 	  req.body.name,
						username: req.body.username
					});
	user.save(function(err,post){
		if(err) return next(err);
		res.json(201, post);
	});
};