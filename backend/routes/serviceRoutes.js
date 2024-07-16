import express from "express";
import { Service } from "../models/ServiceData.js";


const router = express.Router();

//route to send data from service form to mongo
router.post('/', async (request, response) => {
    try{

        if(
            !request.body.user_name ||
            !request.body.user_email ||
            !request.body.model ||
            !request.body.service_type
        ){
            return response.status(400).send({message: "enter all required fields"});
        }

        const newService = {
            user_name: request.body.user_name,
            user_email: request.body.user_email,
            model: request.body.model,
            service_type: request.body.service_type,
        };
        const service = await Service.create(newService);
        response.status(201).send(service);
    }
    catch(error){
        console.log(error);
        response.status(500).send({message:error.message});
    }
})

export default router;