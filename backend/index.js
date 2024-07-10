import express, { response } from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from "mongoose";

// app is an instance of express application
const app = express();

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