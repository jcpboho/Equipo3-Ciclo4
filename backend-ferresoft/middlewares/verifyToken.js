const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;

        try {
            const verify = jwt.verify(req.token, 'secret');
            console.log(verify);
            return next();

        } catch (error) {
            res.status(403).json({
                error: true,
                message: 'Token no valido',
                params: {}
            });
        }
    } else {
        res.status(403).json({
            error: true,
            message: 'Token no valido',
            params: {}
        });
    }
}

module.exports = verifyToken;