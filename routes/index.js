const router = require('express').Router()
const controllers = {
    main: require('../controllers/main.controller'),
    auth: require('../controllers/auth.controller'),
    user: require('../controllers/users.controllers')
}

router.get('/', controllers.main.main)
router.get('/wall', controllers.main.wall)
router.get('/wall/:username', controllers.main.wall)
router.get('/post/edit', controllers.main.edit)

router.get('/login', controllers.auth.loginPage)
router.get('/register', controllers.auth.registerPage)
router.post('/login', controllers.auth.login)
router.post('/register', controllers.user.register, controllers.auth.login)

module.exports = router