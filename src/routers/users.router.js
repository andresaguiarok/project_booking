const Router = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Esto busca a todos los usuarios');
});

router.get('/:_id', (req, res) => {
    res.send('Esto busca a un usuarios especifico');
});

router.post('/', (req, res) => {
    res.send('Esto crea un usuario');
});

router.put('/:_id', (req, res) => {
    res.send('Esto actualiza un usuario');
});

router.delete('/:_id', (req, res) => {
    res.send('Esto elimina un usuario');
});

router.delete('/', (req, res) => {
    res.send('Esto elimina todos los usuarios');
});

module.exports = router