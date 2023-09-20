const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const cors = require('cors');

const app = express();
app.use(cors());

const expenseRoutes = require('./routes/expenseRoutes'); 

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use(expenseRoutes);

sequelize
    .sync()
    .then(() => {
        app.listen(4000);
    })
    .catch((err) => {
        console.log(err);
    });
