import mongoose from 'mongoose';

//defining the user schema
const UserDataSchema = mongoose.Schema({
    name : {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
})

export const User = mongoose.model('User',UserDataSchema);

