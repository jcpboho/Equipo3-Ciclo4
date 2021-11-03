const router = require('express').Router();

router.get('/login', (req, res) => {
    res.status(200).send('login');
});
router.get('/', (req, res) => {
    res.status(200).send('get /api');
});

module.exports = router;