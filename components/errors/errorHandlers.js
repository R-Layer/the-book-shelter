const { HttpError } = require('./customErrors');

exports.handleClientError = function handleClientError(error, req, res, next) {
    if(error instanceof HttpError) {
        // TODO: error message is not passed along if not explicitly set - check what's wrong
      return res.status(error.statusCode).json({ type: error.name, message: error.message });
    };
    next(error);
};

exports.handleGeneralFailure = function handleGeneralFailure(error, req, res ) {
    return res.status(500).json(error);
};