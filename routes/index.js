const router = require('express').Router()
const controller = require('../controllers/main.controller')

router.get('/', controller.main)
router.get('/wall', controller.wall)
router.get('/wall/:username', controller.wall)
router.get('/post/edit', controller.edit)

module.exports = router