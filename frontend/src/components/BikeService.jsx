import axios from 'axios';

const API_URL = 'http://localhost5173/';

export const getBikeServices = async () => {
    return await axios.get(API_URL);
};

export const getBikeService = async (id) => {
    return await axios.get(API_URL + id);
};

export const createBikeService = async (serviceData) => {
    return await axios.post(API_URL, serviceData);
};

export const updateBikeService = async (id, serviceData) => {
    return await axios.put(API_URL + id, serviceData);
};

export const deleteBikeService = async (id) => {
    return await axios.delete(API_URL + id);
};
