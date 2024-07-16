import mongoose from "mongoose";

//defining the vehicle service registration schema
const ServiceDataSchema = mongoose.Schema({
    user_name:{
        type: String,
        require: true,
    },
    user_email:{
        type: String,
        require: true,
    },
    model:{
        type: String,
        require: true
    },
    service_type:{
        type: String,
        require: true,
    }
},
{
    timestamps: true,
})

export const Service = mongoose.model('Service',ServiceDataSchema);