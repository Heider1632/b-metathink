const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const cognitiveModelSchema = new Schema({
    User: { type: Schema.Types.ObjectId, ref:"User", required: true },
    createdAt: { type: Date, default: Date.now },
    Goal: [{ type: String }],
    MentalState: [{ type: String }],
    Action: [{ type: String }],
    Object: [{ type: String }],
    domain: { type: String, required: true },
    
});

const CognitiveModel = mongoose.model('cognitiveModel',cognitiveModelSchema);
module.exports = CognitiveModel;