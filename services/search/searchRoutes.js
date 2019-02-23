const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/', async (req, res, next) => {
    
    /* Normalize parameter coming from client */
    let queryString = "";    
    const { queryParams } = req.body;
    if (!queryParams.term) {
        let error = new Error();
        error.statusCode = 400;
        error.message = "At least one main query search term is required"
        return next(error);
    };
        /* 'Translate' client named params to the actual api ones */
    for (param in queryParams) {
        if(queryParams[param]) {
        switch(param) {
            case 'term':
                queryString += `q=${encodeURIComponent(queryParams[param])}`;
                break;
            case 'title':
                queryString += `+intitle:${queryParams[param]}`;
                break;
            case 'author':
                queryString += `+inauthor:${queryParams[param]}`;
                break;
            case 'publisher':
                queryString += `+inpublisher:${queryParams[param]}`;
                break;
            case 'category':
                queryString += `+subject:${queryParams[param]}`;
                break;
            case 'classificationCode':
                queryString += `+${queryParams.classificationType}:${queryParams[param]}`;
                break;
            default:
                break;
            }
        }
    }
    
    const startIndex = queryParams.index || 0;
    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?${queryString}&startIndex=${startIndex}`);
    
    res.json(data);
});

module.exports = router;