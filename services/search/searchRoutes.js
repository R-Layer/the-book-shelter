const express = require('express');
const router = express.Router();

router.get('/:q', (req, res) => {
    
    const { q } = req.params;
    console.log('q', q);
    res.send(`You wrote ${q}`);
});

module.exports = router;