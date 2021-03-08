const express = require('express');
const router = express.Router()
const projectController = require('../controller/project')

router.post('/project/create', projectController.create)
router.get('/project/:id', projectController.find)

module.exports = router;