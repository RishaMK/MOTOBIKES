import express from "express";
import mongoose from "mongoose";
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

// Root route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the API');
});

// Connect to MongoDB
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });
