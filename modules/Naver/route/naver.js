const express = require('express');
const router = express.Router()
const naverController = require('../controller/naver')

router.post('/naver/create', naverController.create)

module.exports = router;