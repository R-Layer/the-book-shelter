const http = require('http');
require('dotenv').config();

const app = require('./app');
const port = process.env.PORT || 5000;

http.createServer(app).listen(port, () => console.log(`Server up on port ${port}`));

/* 

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "heroku-postbuild": "cd client && npm install && npm run build"
  },

The Mark Twain Encyclopedia
J. R. LeMaster, James Darrell Wilson, Christie Graves Hamric
082407212X
*/