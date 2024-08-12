import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig.js';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config.js';

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            console.log('Authorization header not provided');
            return res.status(401).json({ message: 'Authorization header not provided' });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            console.log('Token not provided');
            return res.status(401).json({ message: 'Token not provided' });
        }

        const decodedToken = jwt.verify(token, SECRET_KEY);
        const userId = decodedToken.userId;
        if (!userId) {
            console.log('Invalid token: no userId');
            return res.status(401).json({ message: 'Invalid token' });
        }

        const userDoc = doc(firestore, 'users', userId);
        const userSnap = await getDoc(userDoc);

        if (!userSnap.exists()) {
            console.log('User not found');
            return res.status(403).json({ message: 'User not found' });
        }

        const userData = userSnap.data();
        if (!userData.isAdmin) {
            console.log('Unauthorized access attempt');
            return res.status(403).json({ message: 'Unauthorized' });
        }

        req.user = userData; // Attach user data to request
        next();
    } catch (error) {
        console.error('Authorization error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
