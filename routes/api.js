'use strict';

const express = require('express')

let router = express.Router();

router.use('/users', require('./users'));
router.use('/matches', require('./matches'));




module.exports = router;
