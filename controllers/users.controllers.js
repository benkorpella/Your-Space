const helpers = {
    'mongo': require('../helpers/db.users'),
    'pcloud': require('../helpers/db.pcloud')
}

module.exports.main = (req, res) => {
    res.send('<h1>HOME PAGE</h1>')
}

module.exports.add = (req, res) => {
    res.send('<h1>added</h1>')
    helpers.mongo.addUser('ben', {test:'sdk'}, {bkgrnd:'black'})
}

module.exports.update = (req, res) => {
    res.send('<h1>updated</h1>')
    helpers.mongo.updateUser('hhhhh', {prefs: {h:'huhfjfk', test:'sdk'}})
}

module.exports.get = (req, res) => {
    res.send('<h1>got</h1>')
    helpers.mongo.getUser('hhhhh')
}

module.exports.delete = (req, res) => {
    res.send('<h1>deleted</h1>')
    helpers.mongo.deleteUser('hhhhh')
}

