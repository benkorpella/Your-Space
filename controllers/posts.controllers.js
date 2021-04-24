const helpers = {
    'mongo': require('../helpers/db.posts')
}

module.exports.main = async (req, res) => {
    res.send('<h1>HOME PAGE</h1>')
}

module.exports.add = async (req, res) => {
    let out = await helpers.mongo.addPost(req.fields.title, req.fields.tags, req.fields.author, req.fields.body)
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

module.exports.getAll = async (req, res) => {
    let out = await helpers.mongo.getAll()
    res.send(out)
}

module.exports.delete = async (req, res) => {
    let out = await helpers.mongo.deletePost(req.params.id)
    res.send(out)
}