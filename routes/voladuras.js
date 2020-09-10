const express = require('express');
const volController = require('../controllers/voladuras');

const router = express.Router();

router.get('/procesos', volController.getVoladuras);
router.get('/voladura/:id', volController.getVoladura);
router.get('/blast-process/:procesoId', volController.getVoladurasByProceso);

module.exports = router;
