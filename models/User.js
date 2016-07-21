var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
{
	name: 		{type:String, required:true},
	username:  	{type:String, required:true, unique:true}
},
{
	collection:'user'
}
);

module.exports=mongoose.model(
	'user',
	UserSchema
);