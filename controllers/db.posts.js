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
    console.log('Adding: ', post);
    await post.save()
    console.log('Saved! ');
}

module.exports.updatePost = async (id, data) => {
    console.log('Updating: ', id);
    data = {...data, modified: Date.now()}
    Post.findByIdAndUpdate(id, data, (err, res) => {
        console.log("Updated: ", err ? err:res);
    })
}

module.exports.getPost = async id => {
    console.log('Getting: ', id);
    Post.findById(id, (err, res) => {
        console.log("Got: ", err ? err:res);
    })
}

module.exports.deletePost = async id => {
    console.log('Deleting: ', id);
    Post.findByIdAndDelete(id, (err, res) => {
        console.log("Deleted: ", err ? err:res);
    })
}

