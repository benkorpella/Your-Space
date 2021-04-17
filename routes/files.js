const router = require('express').Router();
const fs = require('fs/promises');
const path = require("path")
const controllers = {
    'mongo': require('../controllers/db.users'),
    'pcloud': require('../controllers/db.pcloud')
}

let filePath = path.resolve('../Misc/example.png')

let file
let run = async () => {
    console.log('before');
    file = await fs.open(filePath)
    console.log(await file.read);
}
run()

router.get('/', (req, res) => {
    res.send('<h1>HOME PAGE</h1>')
});

router.get('/add', (req, res) => {
    res.send('<h1>added</h1>')
    controllers.pcloud.addUser('ben', {test:'sdk'}, {bkgrnd:'black'})
});

router.get('/update', (req, res) => {
    res.send('<h1>updated</h1>')
    controllers.pcloud.updateUser('hhhhh', {prefs: {h:'huhfjfk', test:'sdk'}})
});

router.get('/get', (req, res) => {
    res.send('<h1>got</h1>')
    controllers.pcloud.getUser('hhhhh')
});

router.get('/delete', (req, res) => {
    res.send('<h1>deleted</h1>')
    controllers.pcloud.deleteUser('hhhhh')
});

module.exports = router;