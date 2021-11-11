const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Product = require('../../models/product');

const joi = require('joi');

router.get('/', (req, res, next) => {
    res.send('Hola product');
});

module.exports = router;