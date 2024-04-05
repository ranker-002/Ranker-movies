const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.id_user = verifiedToken.user_id;
        next();
    } catch (error) {
        res.status(403).json({ error: 'Unauthorized access' });
    }
};