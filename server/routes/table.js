const express = require('express');
const tableController = require('../controllers/tableController')

const router = express.Router();

router.get('/table', tableController.getData)

module.exports = router;