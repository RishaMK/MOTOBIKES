// adminRoutes.js
import express from 'express';
import { Service } from '../models/ServiceData.js';
import { User } from '../models/UserData.js';
import { authMiddleware } from '../middleware/adminAuthMiddleware.js';

const router = express.Router();

// Fetch all services (admin protected)
router.get('/services', authMiddleware, async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch services' });
    }
});

// Fetch all users (admin protected)
router.get('/users', authMiddleware, async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch users' });
    }
});

export default router;
