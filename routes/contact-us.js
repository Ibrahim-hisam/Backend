const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/contact-us', (req, res) => {
    res.sendFile(path.join( rootDir,'views', 'contact-us.html'));
});

router.post('/success', (req, res) => {
    
    const { name, email } = req.body;
    res.redirect('/success');
});

router.get('/success', (req, res) => {
    res.send('Form successfully filled'); 
});

module.exports = router;