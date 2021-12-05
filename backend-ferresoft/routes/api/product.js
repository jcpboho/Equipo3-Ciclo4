const express = require('express');
const router = express.Router();

const verifyToken = require('../../middlewares/verifyToken');
const prod = require('../../controllers/ProductsController');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/images/products'));
    },
    filename: (req, file, cb) => {
        cb(null, 'product-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });


//get all products
router.get('/', prod.getProducts);
//save product
router.post('/save', verifyToken, upload.fields([{
    name: 'image', maxCount: 3
}]), prod.saveProduct);

//update product
router.put('/update', verifyToken, upload.fields([{
    name: 'image', maxCount: 3
}]), prod.updateProduct);

//delete product
router.delete('/delete/:id', verifyToken, prod.deleteProduct);

router.get('/count', verifyToken, prod.countProducts);

router.get('/total', verifyToken, prod.totalProducts);


module.exports = router;