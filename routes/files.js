const router = require('express').Router();
const controller = require('../controllers/files.controllers')

router.get('/', controller.main);
router.post('/', controller.add);
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.put('/', controller.update);
router.delete('/', controller.delete);

module.exports = router;