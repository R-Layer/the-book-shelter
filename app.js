const express = require('express');
const path = require('path');

const morgan = require('morgan');

const customLogger = require('./components/logger/winston');
const searchRoutes = require('./services/search/searchRoutes');
const { handleClientError, handleGeneralFailure } = require('./components/errors/errorHandlers');

const app = express();

app.use(morgan('combined', { stream: customLogger.stream}));

app.use(express.static(path.join(__dirname, 'client' , 'build')))
app.use(express.json());

process.on('unhandledRejection', e => {
    customLogger.error(e);
    process.exit(1);
});
process.on('uncaughtException', e => {
    customLogger.error(e);
    process.exit(1);
});

app.use('/search', searchRoutes);

// Catch all route, 404 no needed ( bad ux? )
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
});

app.use(handleClientError);
app.use(handleGeneralFailure);

module.exports = app;