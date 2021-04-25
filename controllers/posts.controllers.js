const helpers = {
    'mongo': require('../helpers/db.posts')
}

module.exports.main = async (req, res) => {
    res.send('<h1>HOME PAGE</h1>')
}

module.exports.add = async (req, res) => {
    let out = await helpers.mongo.addPost(req.body.title, req.body.tags, req.body.author, req.body.body)
    res.redirect(req.query.redirect)    
}

module.exports.update = async (req, res) => {
    let out = await helpers.mongo.updatePost(req.params.id, req.body)
    res.send(out)
}

module.exports.getOne = async (req, res) => {
    let out = await helpers.mongo.getOne(req.params.id)
    res.send(out)
}

module.exports.getSomeByAuthor = async (req, res) => {
    let out = await helpers.mongo.getSomeByAuthor(req.params.username)
    res.send(out)
}

module.exports.getAll = async (req, res) => {
    let out = await helpers.mongo.getAll()
    res.send(out)
}

module.exports.delete = async (req, res) => {
    let out = await helpers.mongo.deletePost(req.params.id)
    res.send(out)
}