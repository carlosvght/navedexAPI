const express = require('express');
const router = express.Router()
const naverController = require('../controller/naver')

router.post('/naver/create', naverController.create)
router.get('/naver/:id', naverController.find)
router.put('/naver/update/:id', naverController.update)
router.delete('/naver/delete/:id', naverController.remove)

module.exports = router;