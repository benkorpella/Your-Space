const router = require('express').Router()
const routes = {
    'users': require('../routes/users'),
    'posts': require('../routes/posts'),
    'files': require('../routes/files')
}


router.use('/files', routes.files)
router.use('/users', routes.users)
router.use('/posts', routes.posts)

module.exports = router