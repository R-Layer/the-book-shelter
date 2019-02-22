const express = require('express');
const searchRoutes = require('./services/search/searchRoutes');

const app = express();

app.use('/search', searchRoutes);

app.get('/', (req, res) => {
    res.send('Main route hit');
});

module.exports = app;