const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

const JwtController = require('../../JsonWebToken/controller/jwt')

router.post('/user/register', userController.create)
router.use(JwtController.verifyJwt())
router.get('/user', userController.find)
router.get('/user/navers', userController.findAllUserNavers)
router.put('/user/update', userController.update)
router.delete('/user/delete', userController.remove)

module.exports = router