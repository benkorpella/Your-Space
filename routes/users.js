const router = require('express').Router();
const controllers = {
    'mongo': require('../controllers/db.users'),
    'pcloud': require('../controllers/db.pcloud')
}

router.get('/', (req, res) => {
    res.send('<h1>HOME PAGE</h1>')
});

router.get('/add', (req, res) => {
    res.send('<h1>added</h1>')
    controllers.mongo.addUser('ben', {test:'sdk'}, {bkgrnd:'black'})
});

router.get('/update', (req, res) => {
    res.send('<h1>updated</h1>')
    controllers.mongo.updateUser('hhhhh', {prefs: {h:'huhfjfk', test:'sdk'}})
});

router.get('/get', (req, res) => {
    res.send('<h1>got</h1>')
    controllers.mongo.getUser('hhhhh')
});

router.get('/delete', (req, res) => {
    res.send('<h1>deleted</h1>')
    controllers.mongo.deleteUser('hhhhh')
});

module.exports = router;