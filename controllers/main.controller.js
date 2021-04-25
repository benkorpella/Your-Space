const helpers = {
    posts: require('../helpers/db.posts')
}

module.exports.main = (req, res) => {
    let test = 'Home Page - Main'
    res.render('home', { 
        header: test,
        title: 'Home Page'
    })
}

module.exports.wall = async (req, res) => {
    let p = JSON.parse(JSON.stringify(await helpers.posts.getAll()))
    res.render('wall', { 
        username: req.user.username,
        posts: p,
        title: 'Home Page'
    })
}

module.exports.edit = async (req, res) => {
    res.render('postEdit', { 
        prefill: {
            title: req.params.title,
            author: req.params.author,
            body: req.params.body
        },
        title: 'Edit post'
    })
}