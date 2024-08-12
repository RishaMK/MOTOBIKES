// UserData.js
import mongoose from 'mongoose';

const UserDataSchema = mongoose.Schema({
    u_name: {
        type: String,
        required: true,
    },
    u_email: {
        type: String,
        required: true,
    },
    u_model: {
        type: String,
        required: true
    },
})

export const User = mongoose.model('User', UserDataSchema);
