const express = require('express');
const router = express.Router();

const User = require('../../models/User');

const joi = require('joi');

const verifyToken = require('../../middlewares/verifyToken');

const validateUser = joi.object().keys({
    _id: joi.string().allow(''),
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    role: joi.string().required(),
    image: joi.string().required().allow(''),
    status: joi.string().required().allow(''),
    createdBy: joi.date().required().allow(''),
    updatedBy: joi.date().required().allow(''),
    createdAt: joi.date().allow(''),
    updatedAt: joi.date().allow(''),
    __v: joi.number().allow('')
});

//get all users
router.get('/', verifyToken, async (req, res, next) => {

    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.json({ message: error });
    }
});
//save user
router.post('/save', verifyToken, async (req, res, next) => {
    const { error } = validateUser.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    });

    try {
        const savedUser = await user.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: true, message: error, params: {} });
    }
});

//update user
router.put('/update', verifyToken, async (req, res, next) => {
    const { error } = validateUser.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    try {
        const user = await User.findById(req.body._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' + user });
        }

        user.name = req.body.name;
        user.description = req.body.description;
        user.priceBuy = req.body.priceBuy;
        user.priceSale = req.body.priceSale;
        user.category = req.body.category;
        user.image = req.body.image;
        user.stock = req.body.stock;

        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: true, message: error, params: {} });
    }
});

//delete user
router.delete('/delete/:id', verifyToken, async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.remove();
        res.status(200).json({ error: false, message: 'User deleted', params: {} });
    } catch (error) {
        res.status(500).json({ error: true, message: error, params: {} });
    }
});
router.get('/count', verifyToken, async (req, res, next) => {
    try {
        const count = await User.countDocuments();
        res.status(200).json({ error: false, message: 'Total de usuarios', params: { count } });
    } catch (error) {
        res.json({ error: true, message: error, params: {} });
    }
});


module.exports = router;