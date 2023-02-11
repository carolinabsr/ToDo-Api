import {model, Schema} from "mongoose";

const toDoSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        default: false
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps: true})

export default model ("Task", toDoSchema );

