const http = require('http');
const path = require('path');
const express = require('express');
const body = require('body-parser');


const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact-us')

app.use(body.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views','404.html'));
});


app.listen(3000);