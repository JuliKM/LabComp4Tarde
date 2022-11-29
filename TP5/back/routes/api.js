const router = require('express').Router();

const apiInstrumentosRouter = require('./api/instrumentos');

router.use('/instrumentos', apiInstrumentosRouter);

module.exports = router;