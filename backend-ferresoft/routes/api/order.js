const router = require('express').Router();
const Order = require('../../models/order');
const Product = require('../../models/product');
const User = require('../../models/user');
/* const {
    check,
    validationResult
} = require('express-validator'); */
const verifyToken = require('../../middlewares/verifyToken');
/* const {
    orderStatus
} = require('../../utils/constants'); */


// @route   GET api/orders
// @desc    Get all orders
// @access  Private
router.get('/', verifyToken, async (req, res) => {
    try {
        const orders = await Order.find({
            user: req.user.id
        }).sort({
            date: -1
        });
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);


// @route   GET api/orders/:id
// @desc    Get order by id
// @access  Private
router.get('/:id', verifyToken, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('products.product');
        if (!order) {
            return res.status(404).json({
                msg: 'Order not found'
            });
        }
        res.json(order);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: 'Order not found'
            });
        }
        res.status(500).send('Server Error');
    }
}
);


// @route   POST api/orders
// @desc    Create an order
// @access  Private
router.post('/'/* , [
    auth,
    [
        check('products', 'Products is required')
            .not()
            .isEmpty()
    ]
] */, async (req, res) => {
        /* const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        } */
        const {
            products
        } = req.body;
        try {
            const user = await User.findById(req.user.id);
            const productsId = products.map(product => product.id);
            const productsInCart = user.cart.filter(product => productsId.includes(product.id));
            const productsInCartId = productsInCart.map(product => product.id);
            const productsToOrder = products.filter(product => productsInCartId.includes(product.id));
            const productsToOrderId = productsToOrder.map(product => product.id);
            const productsInCartToOrder = productsInCart.filter(product => productsToOrderId.includes(product.id));
            const productsInCartToOrderId = productsInCartToOrder.map(product => product.id);
            const productsToOrderQuantity = productsToOrder.map(product => product.quantity);
            const productsInCartToOrderQuantity = productsInCartToOrder.map(product => product.quantity);
            const productsToOrderQuantityDiff = productsToOrderQuantity.map((quantity, index) => quantity - productsInCartToOrderQuantity[index]);
            const productsToOrderQuantityDiffId = productsToOrderQuantityDiff.map((quantity, index) => productsToOrderId[index]);
            const productsToOrderQuantityDiffIdQuantity = productsToOrderQuantityDiffId.map((id, index) => ({
                id,
                quantity: productsToOrderQuantityDiff[index]
            }));
            const productsToOrderQuantityDiffIdQuantityId = productsToOrderQuantityDiffIdQuantity.map(product => product.id);
            const productsToOrderQuantityDiffIdQuantityQuantity = productsToOrderQuantityDiffIdQuantity.map(product => product.quantity);

            //save order
            const order = new Order({
                user: req.user.id,
                products: productsToOrderQuantityDiffIdQuantity
            });
            await order.save();

            //update products in cart
            productsInCartToOrderQuantityDiffIdQuantityQuantity.forEach((quantity, index) => {
                const product = productsInCartToOrder[index];
                product.quantity = quantity;
                user.cart = user.cart.filter(productInCart => productInCart.id !== product.id);
                user.cart.push(product);
            }
            );
            await user.save();

            //update products in stock
            productsToOrderQuantityDiffIdQuantityQuantity.forEach(async (quantity, index) => {
                const product = productsToOrder[index];
                product.quantity = quantity;
                product.stock = product.stock - quantity;
                await Product.findByIdAndUpdate(product.id, product);
            }
            );

            res.json(order);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);


// @route   PUT api/orders/:id
// @desc    Update an order
// @access  Private
router.put('/:id', verifyToken, async (req, res) => {
    const {
        status
    } = req.body;
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({
                msg: 'Order not found'
            });
        }
        if (order.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: 'User not authorized'
            });
        }
        order.status = status;
        await order.save();
        res.json(order);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: 'Order not found'
            });
        }
        res.status(500).send('Server Error');
    }
}
);


// @route   DELETE api/orders/:id
// @desc    Delete an order
// @access  Private
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({
                msg: 'Order not found'
            });
        }
        if (order.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: 'User not authorized'
            });
        }
        await order.remove();
        res.json({
            msg: 'Order removed'
        });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: 'Order not found'
            });
        }
        res.status(500).send('Server Error');
    }
}
);


//order this day
router.get('/today', verifyToken, async (req, res) => {
    try {
        const orders = await Order.find({
            user: req.user.id,
            date: {
                $gte: new Date(new Date().setHours(0, 0, 0, 0)),
                $lte: new Date(new Date().setHours(23, 59, 59, 999))
            }
        });
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);



module.exports = router;