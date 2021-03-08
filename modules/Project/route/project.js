const express = require('express');
const router = express.Router()
const projectController = require('../controller/project')

router.post('/project/:naverId/create', projectController.create)
router.get('/project/:id', projectController.find)
router.put('/project/update/:id', projectController.update)
router.delete('/project/delete/:id', projectController.remove)

module.exports = router;