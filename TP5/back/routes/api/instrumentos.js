const router = require('express').Router();

const { Instrumento } = require('../../db');

router.get('/', async (req, res) => {
    const instrumentos = await Instrumento.findAll();
    res.json(instrumentos);
});

router.get('/:id', async (req, res) => {
    const instrumento = await Instrumento.findByPk(req.params.id);
    res.json(instrumento);
});

router.post('/', async (req, res) => {
    const instrumento = await Instrumento.create(req.body);
    res.json(instrumento);
});

router.put('/:id', async (req, res) => {
    await Instrumento.update(req.body, {
        where: { id: req.params.id }
        });
    res.json({success: 'Instrumento actualizado'});
});

router.delete('/:id', async (req, res) => {
    await Instrumento.destroy({
        where: { id: req.params.id }
        });
    res.json({success: 'Instrumento eliminado'});
});

module.exports = router;