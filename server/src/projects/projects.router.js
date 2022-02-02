const router = require('express').Router();
const controller = require('./projects.controller');

router.route('/').get(controller.list);
router.route('/:language').get(controller.read);

module.exports = router;