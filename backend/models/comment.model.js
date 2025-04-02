import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const commentSchema = new Schema({
    description:{
        type:String,
        required: true,
    },
    pin:{
        type: Schema.Types.ObjectId,
        reference: "Pin",
        required: true,
    },
    user:{
        type: Schema.Types.ObjectId,
        reference: "User",
        required: true,
    },
}, 
    {timestamps: true}
);

export default mongoose.model('Comment', commentSchema)