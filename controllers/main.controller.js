

module.exports.main = (req, res) => {
    let test = 'Home Page - Main'
    res.render('home', { 
        header: test,
        title: 'Home Page'
    })
}