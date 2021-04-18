const router = require('express').Router();
const controller = require('../controllers/posts.controllers')

router.get('/', controller.main);
router.get('/add', controller.add);
router.get('/update', controller.update);
router.get('/get', controller.get);
router.get('/delete', controller.delete);
module.exports = router;