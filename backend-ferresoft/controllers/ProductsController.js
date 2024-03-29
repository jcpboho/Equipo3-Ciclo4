const Product = require('../models/product');


const joi = require('joi');
const validateProduct = joi.object().keys({
    _id: joi.string().allow(''),
    name: joi.string().required(),
    description: joi.string().required(),
    priceBuy: joi.number().required(),
    priceSale: joi.number().required(),
    category: joi.string().required(),
    image: joi.array(),
    stock: joi.number().required(),
    createdAt: joi.date().allow(''),
    updatedAt: joi.date().allow(''),
    __v: joi.number().allow('')
});

const ctrl = {};

ctrl.getProducts = async (req, res) => {

    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.json({ message: error });
    }
};

ctrl.saveProduct = async (req, res) => {
    req.body = JSON.parse(req.body.data);
    console.log(req.body);
    let images = [];
    req.files.image.map(item => { images.push(process.env.BASE_URL + "/images/products/" + item.filename) })
    req.body.image = images;

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
};

ctrl.updateProduct = async (req, res) => {
    req.body = JSON.parse(req.body.data);
    let images = [];
    req.files.image.map(item => { images.push(process.env.BASE_URL + "/images/products/" + item.filename) })
    req.body.image = images;

    console.log(req.body);

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
};

ctrl.deleteProduct = async (req, res) => {
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
};

ctrl.countProducts = async (req, res) => {
    try {
        const count = await Product.countDocuments();
        res.status(200).json({ error: false, message: 'Total de productos', params: { count } });
    } catch (error) {
        res.json({ error: true, message: error, params: {} });
    }
};

ctrl.totalProducts = async (req, res) => {
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
};

module.exports = ctrl;