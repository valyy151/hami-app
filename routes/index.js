const express = require('express');
const route = express.Router();

route.route('/').get((req, res) => res.render('index'));

module.exports = route;
