export const adminAuthMiddleware = async (req, res, next) => {
    try {
        if (!req.user.isAdmin) {
            throw new Error();
        }
        next();
    } catch (error) {
        res.status(403).send({ error: 'Not authorized as admin.' });
    }
};
