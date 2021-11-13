const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Product = require('../../models/product');

const joi = require('joi');

const verifyToken = require('../../middlewares/verifyToken');

router.get('/', verifyToken, (req, res, next) => {

    const products = Product.find()

    res.send('Hola product');
});

module.exports = router;