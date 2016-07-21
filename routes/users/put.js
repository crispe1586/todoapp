//load model
var User=require('../../models/User.js');

module.exports=function(req,res){
	var userid = req.params.userid;
	
	//build new object
	var user = new User({
		_id:      userid,
		name:     req.body.name,
		username: req.body.username
	});
	// Convert the Model instance to a simple object using Model's 'toObject' function
	// to prevent weirdness like infinite looping...	
	var upsertData = user.toObject();

	// Delete the _id property, otherwise Mongo will return a "Mod on _id not allowed" error
	//delete upsertData._id;

	// Do the upsert, which works like this: 
	//If no user exists with _id = contact.id
	//then create a new user using upsertData.
	// Otherwise, update the existing user with upsertData
	User.update(
		{_id:userid},
		upsertData,
		{upsert:true},
		function(err,data){
			if(err) return res.json(500, { error: err });
			res.json(201,{data});
		}
	);
};





