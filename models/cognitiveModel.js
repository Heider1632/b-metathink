import mongoose, {Schema} from 'mongoose';
const cognitiveModelSchema = new Schema({
    User: { type: Schema.Types.ObjectId, ref:"User", required: true },
    createdAt: { type: Date, default: Date.now },
    Goal: [{ type: String }],
    StateMental: [{ type: String }],
    Action: [{ type: String }],
    Object: [{ type: String }],
    domain: { type: String, required: true },
    
});

const CognitiveModel = mongoose.model('cognitiveModel',cognitiveModelSchema);
export default CognitiveModel;