import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

// export const PORT = process.env.PORT || 5555;
// export const mongoDBURL = process.env.MONGO_DB_URL;
export const SECRET_KEY = process.env.SECRET_KEY;

// backend/config.js
export const PORT = 5555;

// MongoDB connection URI
export const mongoDBURL = 'mongodb+srv://Root-admin:gSIhRnTpvP9cg58M@moto-client.nkkqa8a.mongodb.net/client-collection?retryWrites=true&w=majority&appName=Moto-Client';
