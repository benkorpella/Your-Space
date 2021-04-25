const helpers = {
    'mongo': require('../helpers/db.users')
}

module.exports.main = async (req, res) => {
    res.send('<h1>HOME PAGE</h1>')
}

module.exports.add = async (req, res) => {
    let out = await helpers.mongo.addUser(req.body.username, req.body.prefs, req.body.wall)
    res.send(out)
}

module.exports.update = async (req, res) => {
    let out = await helpers.mongo.updateUser(req.params.id, req.body)
    res.send(out)
}

module.exports.getOne = async (req, res) => {
    let out = await helpers.mongo.getOne(req.params.id)
    res.send(out)
}

module.exports.getAll = async (req, res) => {
    let out = await helpers.mongo.getAll()
    res.send(out)
}

module.exports.delete = async (req, res) => {
    let out = await helpers.mongo.deleteUser(req.params.id)
    res.send(out)
}



module.exports.register = async (req, res, next) => {
    console.log('user Controller: ', 'adding - start');
    let out = await helpers.mongo.addUser(req.fields.username, req.fields.password)
    next()
}