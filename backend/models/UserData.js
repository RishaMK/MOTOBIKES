import mongoose from 'mongoose';

//defining the user schema
const UserDataSchema = mongoose.Schema({
    u_name: {
        type: String,
        require: true,
    },
    u_email: {
        type: String,
        require: true,
    },
    u_model: {
        type: String,
        required: true
    },
})

export const User = mongoose.model('User', UserDataSchema);

