const Router = require('express');
const { UserDao } = require('../daos/mongo_db/user.mongo.js');
const router = Router();
const uDao = new UserDao();


router.get('/', async(req, res) => {
    const users = await uDao.get();
    
    users 
    ? res.status(200).send({status:'success', payload: users}) 
    : res.status(404).send({status:'error', message:'no user record found'});
});

router.get('/:_id', async(req, res) => {
    const { _id } = req.params;
    const user = await uDao.getID({_id});

    user
    ? res.status(200).send({status:'success', payload: user}) 
    : res.status(404).send({status:'error', message:'the user was not found'});
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