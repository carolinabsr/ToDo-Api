import {model, Schema} from "mongoose";
import validator from 'validator';

const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: "Esse campo precisa ser um e-mail válido!"
        }

    },

    passwordHash: {
        type: String
    },

    todos: [{
        type: Schema.Types.ObjectId,
        ref: "Task"
    }]

}, {timestamps: true})

export default model("User", userSchema );

