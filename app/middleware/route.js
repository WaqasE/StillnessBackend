module.exports = ((req, res, next) => {
    if (!req.route)
        next({
            status: 404,
            msg: 'requested route not available!'
        })
})