//importar router para poder usar las rutas
const router = require('express').Router();
//importar el modelo user para poder usar el metodo findOne
const User = require('../../models/User');
//Importar joi para validar los datos
const joi = require('joi');
//Importar bcrypt para encriptar la contraseña
const bcrypt = require('bcrypt');
//Importar jwt para crear el token
const jwt = require('jsonwebtoken');

//validar el schema de datos
const validLogin = joi.object().keys({
    email: joi.string().min(3).max(30).required(),
    password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
});

const validRegister = joi.object().keys({
    name: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
});

//API para login
router.post('/login', async (req, res) => {
    const { error } = validLogin.validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    const validUser = await User.findOne({ email: req.body.email });
    if (!validUser) { res.status(400).send('Usuario no encontrado'); };

    const validPass = await bcrypt.compare(req.body.password, validUser.password);
    if (!validPass) { res.status(400).send('Contraseña incorrecta'); };


    const user = {
        email: req.email,
        password: req.password
    };

    const token = jwt.sign(user, 'secret', { expiresIn: '1h' });


    res.status(200).send({
        error: false,
        menssage: 'Login correcto',
        params: { signin: true, token: token }
    });

});
//API para registrar
router.post('/register', async (req, res) => {

    const { error } = validRegister.validate(req.body);
    if (error) return res.status(400).send({ error: true, message: error.details[0].message });

    const validUser = await User.findOne({ email: req.body.email });
    if (validUser) return res.status(400).send({ error: true, message: 'Usuario ya existe' });

    const salt = await bcrypt.genSalt(10);
    const encryptPass = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: encryptPass
    });

    user.save((err, user) => {
        if (err) { res.status(400).send(err); }
        res.status(200).send({ error: false, menssage: "Usuario creado", params: { user } });
    });
});
//API para get
router.get('/', async (req, res) => {
    res.status(200).send('Api rest auth');
});
//Api para verificar el token
router.get('/verify', async (req, res) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        const token = bearerToken;
        try {
            const verify = jwt.verify(token, 'secret');
            res.status(200).send({ error: false, message: 'Token valido', params: { signin: true } });
        } catch (error) {
            res.status(403).json({
                error: true,
                message: 'Token no valido',
                params: {}
            });
        }
    } else {
        res.status(401).send({ error: true, message: 'No token provided' });
    }
});


module.exports = router;