

module.exports.main = (req, res) => {
    let test = 'Home Page'
    res.render('home', { 
        header: test,
        title: 'Home Page'
    })
}