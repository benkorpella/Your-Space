const passport = require('passport')

module.exports.loginPage = async (req, res) => {
    res.render('login', {title: 'Login'})
}

module.exports.registerPage = async (req, res) => {
    res.render('register', {title: 'register'})
}

module.exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/wall'
})