const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const userSchema = new Schema({
    name: { type:String,maxlength:50, unique:true, required:true},
    email: { type:String, maxlength:50, unique:true, required:true},
    password: { type:String, maxlength:64, required:true},
    Cognitive_model: [{ type: Schema.Types.ObjectId, ref:"CognitiveModel" }],
    estado: { type:Number, default:1},
	createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('user',userSchema);
module.exports = User;