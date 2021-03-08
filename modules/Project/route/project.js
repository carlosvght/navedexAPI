const express = require('express');
const router = express.Router()
const projectController = require('../controller/project')

router.post('/project/create', projectController.create)

module.exports = router;