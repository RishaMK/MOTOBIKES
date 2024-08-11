import {Service} from '../models/ServiceData.js';

export const getAllServices = async (req, res) => {
    try {
        const services = await Service.find({});
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch services' });
    }
};
