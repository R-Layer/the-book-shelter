/*  TODO: catch all -> to expand  */

exports.handleErrors = function handleClientError(error, req, res, next) {
    res.status(error.statusCode).json(error);
};