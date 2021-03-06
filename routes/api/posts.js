const router = require('express').Router();
const controller = require('../../controllers/posts.controllers')

//router.get('/', controller.main);
router.post('/', controller.add);
router.get('/', controller.getAll);
router.get('/:username', controller.getSomeByAuthor);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;