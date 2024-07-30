// backend/routes/serviceRoutes.js
import express from "express";
import { Service } from "../models/ServiceData.js";
import { authMiddleware } from "../middleware/adminAuthMiddleware.js";
import { adminAuthMiddleware } from "../middleware/adminAuth.js";
import { getAllServices } from "../controllers/serviceController.js";

const router = express.Router();

// Route to create a new service (authenticated user)
router.post('/', authMiddleware, async (req, res) => {
    try {
        console.log('Request body:', req.body); // Debug log
        const { user_name, user_email, model, service_type } = req.body;

        if (!user_name || !user_email || !model || !service_type) {
            return res.status(400).json({ message: "Please enter all required fields" });
        }

        const newService = new Service({
            user_name,
            user_email,
            model,
            service_type,
        });

        const service = await newService.save();
        res.status(201).json(service);
    } catch (error) {
        console.error('Error creating service:', error);
        res.status(500).json({ message: "Failed to create service" });
    }
});

// Route to get all services (admin only)
router.get('/', authMiddleware, adminAuthMiddleware, getAllServices);

// Example route: Update a service (admin only)
router.put('/:id', authMiddleware, adminAuthMiddleware, async (req, res) => {
    try {
        const serviceId = req.params.id;
        const updatedService = req.body;

        // Update service in the database
        const service = await Service.findByIdAndUpdate(serviceId, updatedService, { new: true });

        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        res.status(200).json(service);
    } catch (error) {
        console.error('Error updating service:', error);
        res.status(500).json({ message: "Failed to update service" });
    }
});

// Example route: Delete a service (admin only)
router.delete('/:id', authMiddleware, adminAuthMiddleware, async (req, res) => {
    try {
        const serviceId = req.params.id;

        // Delete service from the database
        const deletedService = await Service.findByIdAndDelete(serviceId);

        if (!deletedService) {
            return res.status(404).json({ message: "Service not found" });
        }

        res.status(200).json({ message: "Service deleted successfully" });
    } catch (error) {
        console.error('Error deleting service:', error);
        res.status(500).json({ message: "Failed to delete service" });
    }
});

export default router;
