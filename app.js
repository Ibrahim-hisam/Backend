const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const User =require('./models/User')
const cors = require('cors');

const app = express();
app.use(cors());
const userRoutes = require('./routes/user');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(userRoutes);

sequelize
.sync()
.then(() => {
    //console.log(result)
    app.listen(5000);
})
.catch(err =>{
    console.log(err);
});


