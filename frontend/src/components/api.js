import axios from 'axios';

const API_URL = 'http://localhost:5555/';

export const getBikeServices = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching bike services:', error);
        throw error; // Throw the error to handle it in the component
    }
};

export const getBikeService = async (id) => {
    try {
        const response = await axios.get(`${API_URL}${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching bike service with ID ${id}:`, error);
        throw error; // Throw the error to handle it in the component
    }
};

export const createBikeService = async (serviceData) => {
    try {
        const response = await axios.post(API_URL, serviceData);
        return response.data;
    } catch (error) {
        console.error('Error creating bike service:', error);
        throw error; // Throw the error to handle it in the component
    }
};

export const updateBikeService = async (id, serviceData) => {
    try {
        const response = await axios.put(`${API_URL}${id}`, serviceData);
        return response.data;
    } catch (error) {
        console.error(`Error updating bike service with ID ${id}:`, error);
        throw error; // Throw the error to handle it in the component
    }
};

export const deleteBikeService = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting bike service with ID ${id}:`, error);
        throw error; // Throw the error to handle it in the component
    }
};
