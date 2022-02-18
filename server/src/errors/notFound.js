

function notFound(req, res, next) {
    next({ status: 404, message: `The following route does not exist ${req.path}` })
}

module.exports = notFound;