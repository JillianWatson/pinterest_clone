import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const boardSchema = new Schema({
    title:{
        type:String,
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

export default mongoose.model('Board', boardSchema)