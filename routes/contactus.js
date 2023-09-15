const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();
const contactController = require('../controllers/contact-us')

router.get('/contact-us', contactController.contact);

router.post('/success', contactController.postsuccess );

module.exports = router;