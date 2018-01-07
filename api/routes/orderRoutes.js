const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET request to /orders"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "POST request to /orders"
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "GET request to /orders",
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "DELETE request to /orders",
        orderId: req.params.orderId
    });
});

module.exports = router;