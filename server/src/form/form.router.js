const router = require('express').Router();
const controller = require('./form.controller');

router.route('/').post(controller.submit);

module.exports = router;