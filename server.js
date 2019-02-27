// Set app root
global.__baseDir =__dirname;

const http = require('http');
require('dotenv').config();

const app = require('./app');
const port = process.env.PORT || 5000;

http.createServer(app).listen(port, () => console.log(`Server up on port ${port}`));