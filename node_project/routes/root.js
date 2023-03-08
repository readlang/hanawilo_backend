const express = require('express');
const router = express.Router();
const {
    getRoot
} = require('../controllers/rootController')

router.route('/')
    .get(getRoot)

module.exports = router