const express = require('express');
const path = require('path');

const searchRoutes = require('./services/search/searchRoutes');

const { handleClientError, handleGeneralFailure } = require('./components/errors/errorHandlers');

const app = express();

app.use(express.static(path.join(__dirname, 'client' , 'build')))
app.use(express.json());

app.use('/search', searchRoutes);

// Catch all route, 404 no needed ( bad ux? )
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
});

app.use(handleClientError);
app.use(handleGeneralFailure);

module.exports = app;