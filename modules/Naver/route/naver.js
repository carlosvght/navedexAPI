const express = require('express');
const router = express.Router()
const naverController = require('../controller/naver')
const JwtController = require('../../JsonWebToken/controller/jwt')

router.use(JwtController.verifyJwt())
router.post('/naver/:userId/create', naverController.create)
router.get('/naver/:id', naverController.find)
router.get('/naver/projects/:id', naverController.findAllNaverProjects)
router.put('/naver/update/:id', naverController.update)
router.delete('/naver/delete/:id', naverController.remove)

module.exports = router;