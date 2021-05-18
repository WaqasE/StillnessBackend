const jwt = require('jsonwebtoken');
function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        next({
            status: 401,
            msg: 'Access denied!'
        })
    }
    try {
        const decode = jwt.verify(token, process.env.JWTPRIVATEKEY);
        req.user = decode;
        next();
    }
    catch (err) {
        next({
            status: 401,
            msg: 'Access denied!'
        })
    }

}