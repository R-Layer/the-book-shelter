class HttpError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    };
};

class AuthError extends HttpError {
    // Resource or route
    constructor(deniedPath) {
        super(`Cannot access to ${deniedPath}: unauthorized`, 401);
    }
}

class NotFoundError extends HttpError {
    constructor(resource, failurePath) {
        super(`Resource ${resource} not found`, 404);
        this.failurePathpath = failurePath;
    };
};

class ValidationError extends HttpError {
    constructor(message) {
        super(message, 422);
    };
};

class ServerError extends Error {
    constructor(message) {
        super('Internal server error: ', message);
    };
};

module.exports = {  HttpError,
                    AuthError, 
                    NotFoundError, 
                    ValidationError, 
                    ServerError 
                };