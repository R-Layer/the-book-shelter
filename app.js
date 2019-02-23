const express = require('express');
const path = require('path');

const searchRoutes = require('./services/search/searchRoutes');

const { handleErrors } = require('./components/errors/errorHandlers');

const app = express();

app.use(express.static(path.join(__dirname, 'client' , 'build')))
app.use(express.json());

app.use('/search', searchRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
});

app.use(handleErrors);

module.exports = app;