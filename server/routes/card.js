const express = require('express');
const clubController = require('../controllers/cardController')

const router = express.Router();

router.get('/card', clubController.getData)

module.exports = router;