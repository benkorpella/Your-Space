//This is for post data
const Post = require('../models/mongo.post')

module.exports.addPost = async (title, tags, author, body, draft=true)  => {
    let post = new Post({
        title: title,
        tags: tags,
        author: author,
        draft: draft,
        body: body
    })
    return post.save({}, (err, res) => {
        return err ? err : res;
    })
}

module.exports.updatePost = async (id, data) => {
    data = {...data, modified: Date.now()}
    return Post.findByIdAndUpdate(id, data, (err, res) => {
        return err ? err:res
    })
}

module.exports.getOne = async id => {
    return Post.findById(id, (err, res) => {
        return err ? err:res
    })
}

module.exports.getAll = async () => {
    return Post.find({}, (err, res) => {
        return err ? err:res
    })
}

module.exports.deletePost = async id => {
    return Post.findByIdAndDelete(id, (err, res) => {
        return err ? err:res
    })
}

