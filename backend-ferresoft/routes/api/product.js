const express = require('express');
const router = express.Router();

const Product = require('../../models/product');

const joi = require('joi');

const verifyToken = require('../../middlewares/verifyToken');

const validateProduct = joi.object().keys({
    _id: joi.string().allow(''),
    name: joi.string().required(),
    description: joi.string().required(),
    priceBuy: joi.number().required(),
    priceSale: joi.number().required(),
    category: joi.string().required(),
    image: joi.string().required().allow(''),
    stock: joi.number().required(),
    createdAt: joi.date().allow(''),
    updatedAt: joi.date().allow(''),
    __v: joi.number().allow('')
});

//get all products
router.get('/', verifyToken, async (req, res, next) => {

    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.json({ message: error });
    }
});
//save product
router.post('/save', verifyToken, async (req, res, next) => {
    const { error } = validateProduct.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        priceBuy: req.body.priceBuy,
        priceSale: req.body.priceSale,
        category: req.body.category,
        image: req.body.image,
        stock: req.body.stock,
    });

    try {
        const savedProduct = await product.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json({ error: true, message: error, params: {} });
    }
});

//update product
router.put('/update', verifyToken, async (req, res, next) => {
    const { error } = validateProduct.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    try {
        const product = await Product.findById(req.body._id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' + product });
        }

        product.name = req.body.name;
        product.description = req.body.description;
        product.priceBuy = req.body.priceBuy;
        product.priceSale = req.body.priceSale;
        product.category = req.body.category;
        product.image = req.body.image;
        product.stock = req.body.stock;

        const updatedProduct = await product.save();
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: true, message: error, params: {} });
    }
});

//delete product
router.delete('/delete/:id', verifyToken, async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.remove();
        res.status(200).json({ error: false, message: 'Product deleted', params: {} });
    } catch (error) {
        res.status(500).json({ error: true, message: error, params: {} });
    }
});

router.get('/count', verifyToken, async (req, res, next) => {
    try {
        const count = await Product.countDocuments();
        res.status(200).json({ error: false, message: 'Total de productos', params: { count } });
    } catch (error) {
        res.json({ error: true, message: error, params: {} });
    }
});

router.get('/total', verifyToken, async (req, res, next) => {
    try {

        // product x stock
        const products = await Product.find();
        let total = 0;
        products.forEach(product => {
            total += product.priceBuy * product.stock;
        });

        //suma de precio compra de productos
        /* const total = await Product.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: "$priceSale" }
                }
            }
        ]); */
        res.status(200).json({ error: false, message: 'Total de productos', params: { total } });
    } catch (error) {
        res.json({ error: true, message: error, params: {} });
    }
});


module.exports = router;