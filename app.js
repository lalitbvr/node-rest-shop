const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const url = "mongodb://admin:" + process.env.MONGO_ATLAS_PW + "@node-rest-shop-shard-00-00-i5mhq.mongodb.net:27017,node-rest-shop-shard-00-01-i5mhq.mongodb.net:27017,node-rest-shop-shard-00-02-i5mhq.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin";

mongoose.connect(url, {
    useMongoClient: true
});

const productRoutes = require('./api/routes/productRoutes');
const orderRoutes = require('./api/routes/orderRoutes');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

app.use('/products', productRoutes);

app.use('/orders', orderRoutes);

app.use((req, res, next) => {
    const error = new Error('Page not found');
    error.status = 404;

    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;