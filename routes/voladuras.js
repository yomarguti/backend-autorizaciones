const express = require('express');
const volController = require('../controllers/voladuras');

const router = express.Router();

router.get('/procesos', volController.getVoladuras);

module.exports = router;
