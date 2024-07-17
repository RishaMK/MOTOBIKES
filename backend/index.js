import express, { response } from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from "mongoose";
import { Service } from "./models/ServiceData.js";
import cors from "cors";


// app is an instance of express application
const app = express();

//Middleware to parse request body
app.use(express.json());

//allowing all origins with default of cors(*)
app.use(cors());


//route to send data from service form to mongo
app.post('/services', async (request, response) => {
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


//route to find all orders
app.get('/services', async (request, response) => {
    const user_email = request.query.user_email;

    try {
        const services = await Service.find({ user_email });
        return response.status(200).json({
            count: services.length,
            data: services
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

//route for deleting a book 
app.delete('/services/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Service.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).send({ message: "Service not found" });
        }
        return response.status(200).send({ message: "Service successfully deleted!" });
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});



//setting up the root request 
app.get('/', (request, response) => {
    console.log(request);
    return response.status(201).send('Accepted');
})


//Connect to database using Mongoose
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database successfully!');
        // express application starts listening on PORT 5555 
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });