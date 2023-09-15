const path = require('path');
const rootDir = require('../util/path');


exports.contact = (req, res) => {
    res.sendFile(path.join( rootDir,'views', 'contact-us.html'));
}


exports.postsuccess = (req, res) => {
    const { name, email } = req.body;
    res.redirect('/success');
}