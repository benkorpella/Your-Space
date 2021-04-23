const router = require('express').Router()
const routes = {
    'users': require('./api/users'),
    'posts': require('./api/posts'),
    'files': require('./api/files')
}


router.use('/files', routes.files)
router.use('/users', routes.users)
router.use('/posts', routes.posts)

module.exports = router