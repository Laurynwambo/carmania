const express = require('express');
const dotenv = require("dotenv")
const path = require('path');
const app = express();

const authRoutes = require("./routes/auth");
const feedRoutes = require('./routes/feed');

// localhost:6000/auth/signup
dotenv.config();

app.use(express.urlencoded( { extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRoutes);
app.use('/feed', feedRoutes);

app.listen(3000, () => {
    console.log('server is running...');
});

module.exports = app;



