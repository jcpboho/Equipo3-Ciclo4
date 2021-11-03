const express = require('express');
const app = express();

const routes = require('./api')

app.use('/api', routes.login);

module.exports = app;