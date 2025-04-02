import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const pinSchema = new Schema({
    media:{
        type:String,
        required: true,
    },
    width:{
        type:Number,
        required: true,
    },
    height:{
        type:Number,
        required: true,
    },
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    link:{
        type:String,
    },
    board:{
        type: Schema.Types.ObjectId,
        reference: "Board",
    },
    tags:{
        type: [String],
    },
    user:{
        type: Schema.Types.ObjectId,
        reference: "User",
        required: true,
    },
}, 
    {timestamps: true}
);

export default mongoose.model('Pin', pinSchema)