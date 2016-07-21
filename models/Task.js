var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var TaskSchema= new Schema(
{
	name: {type:String, required:true, unique:false},
	done: {type:Boolean, default:false},
	//For manytomany
	/*
	user:[{
		type:Schema.Type.ObjectId,
		ref:'user'
	}]
	*/
	user: {
		//ObjectId is the type of the Mongo Id to be referenced
		type:Schema.ObjectId, 
		ref:'user'
	} 
}, 
{
	collection:'task'
});

//Model Creation
module.exports=mongoose.model(
	//name of the collection
	'task',
	//Schema object
	TaskSchema
	);