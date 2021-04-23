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
    console.log(await helpers.posts.getAll())
    let p = JSON.parse(JSON.stringify(await helpers.posts.getAll()))
    console.log(p);

    res.render('wall', { 
        username: req.params.username,
        posts: p,
        title: 'Home Page'
    })
}