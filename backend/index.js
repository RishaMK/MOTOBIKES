import express from "express";
import mongoose from "mongoose";
import { Service } from "./models/ServiceData.js";
import { User } from './models/UserData.js';
import cors from "cors";
import { PORT, mongoDBURL } from './config.js';
import serviceRoutes from './routes/serviceRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import { authMiddleware } from './middleware/adminAuthMiddleware.js';

const app = express();
//const PORT = 5555;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/services', serviceRoutes); // Protected by authMiddleware if needed inside serviceRoutes
app.use('/api/admin', authMiddleware, adminRoutes); // Protected by adminAuthMiddleware

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

        const newUser = {
            u_name: request.body.user_name,
            u_email: request.body.user_email,
            u_model: request.body.model
        }
        const user = await User.create(newUser);

        response.status(201).send({
            message: "Service and user created successfully",
            service,
            user
        });
    }
    catch(error){
        console.log(error);
        response.status(500).send({message:error.message});
    }
})


// Route to find all services or filter by user_email if provided
app.get('/services', async (request, response) => {
    const user_email = request.query.user_email;

    try {
        // Construct the query object conditionally
        const query = user_email ? { user_email } : {};

        const services = await Service.find(query);
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

// Route to get unique email addresses
app.get('/users', async (req, res) => {
    try {
        const users = await User.aggregate([
            {
                $group: {
                    _id: "$u_email",
                    u_name: { $first: "$u_name" },
                    u_email: { $first: "$u_email" },
                    u_model: { $first: "$u_model" }
                }
            }
        ]);

        res.status(200).json({
            count: users.length,
            data: users
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            message: error.message
        });
    }
});


// // Route for deleting a user by UID
// app.delete('/users/:uid', async (req, res) => {
//     const { uid } = req.params;
    
//     try {
//         // Validate UID
//         if (!mongoose.Types.ObjectId.isValid(uid)) {
//             return res.status(400).send({ message: "Invalid user ID" });
//         }

//         // Attempt to delete user
//         const result = await User.findByIdAndDelete(uid);
//         if (!result) {
//             return res.status(404).send({ message: "User not found" });
//         }
//         return res.status(200).send({ message: "User successfully deleted!" });
//     } catch (error) {
//         console.error('Error deleting user:', error); // Detailed error logging
//         res.status(500).send({ message: error.message });
//     }
// });



//setting up the root request 
app.get('/', (request, response) => {
    console.log(request);
    return response.status(201).send('Accepted');
})


//Connect to database using Mongoose
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });
