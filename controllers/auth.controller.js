const passport = require('passport')

module.exports.loginPage = async (req, res) => {
    res.render('login', {title: 'Login'})
}

module.exports.registerPage = async (req, res) => {
    res.render('register', {title: 'Register'})
}

module.exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/wall'
})

module.exports.logout = (req, res) => {
    req.logout();
    res.redirect('/login');
}

module.exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login');
    }
}