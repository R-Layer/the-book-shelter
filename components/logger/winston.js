const winston = require('winston');

const options = {
    file: {
        level: 'info',
        filename: `${__baseDir}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxSize: 5242880,
        maxFiles: 5
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        colorize: true
    }
};

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(options.console),
        new winston.transports.File(options.file)
    ]
});

logger.stream = {
    write: message => logger.info(message)
};

module.exports = logger;