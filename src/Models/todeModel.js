import mongoose from "mongoose";

const Schema= mongoose.Schema;

export const newTaskSchem= {
    taskId:{
        type:Number,
        required:"id is required"
    },
    name:{
        type:String,
        required:"Name is required"
    },
    taskDate:{
        type:Date,
        required:"date is required"
    },
    createdDate:{
        type:Date,
        default:Date.now
    }

}