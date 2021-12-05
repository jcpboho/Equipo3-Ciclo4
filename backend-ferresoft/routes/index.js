const express = require('express');
const app = express();

const routes = require('./api')

app.use('/api/auth', routes.auth);
app.use('/api/product', routes.product);
app.use('/api/user', routes.user);

module.exports = app;