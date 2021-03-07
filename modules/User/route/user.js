const express = require('express');
const router = express.Router()
const userController = require('../controller/user')

router.post('/user/register', userController.create)
router.get('/user/:id', userController.find)
router.put('/user/update/:id', userController.update)
router.delete('/user/delete/:id', userController.remove)

module.exports = router;