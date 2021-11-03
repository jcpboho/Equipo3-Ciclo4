//Express para crear el servidor
const express = require('express');
//Bodyparser para leer los datos de los formularios
const bodyParser = require('body-parser');
//Cors para permitir peticiones desde otras paginas
const cors = require('cors');
//Mongoose para conectar a la base de datos
const mongoose = require('mongoose');
//Dotenv para leer variables de entorno
const dotenv = require('dotenv').config();

//Iniciar app de express
const app = express();

//Configurar cors para aceptar peticiones de todos los dominios
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//Configurar bodyParser para leer los datos de los formularios  y json
//Usar cors para que se pueda acceder desde cualquier lugar
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//URI en variables de entorno
const uriDB = process.env.URI_DB || '';
//Conectar a la base de datos
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(uriDB, options).then(() => {
    console.log('Connected to database');
}).catch(() => {
    console.log('Connection failed');
});

//Configurando rutas
const router = require('./routes');
app.use(router);

//Puerto en variable de entorno o en el puerto 3000
const PORT = process.env.PORT || 3000;

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

