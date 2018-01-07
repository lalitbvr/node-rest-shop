const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET request to /products"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "POST request to /products"
    });
});

router.get('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "GET request to /products",
        productId: req.params.productId
    });
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "PATCH request to /products",
        productId: req.params.productId
    });
});

router.put('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "PUT request to /products",
        productId: req.params.productId
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "DELETE request to /products",
        productId: req.params.productId
    });
});

module.exports = router;