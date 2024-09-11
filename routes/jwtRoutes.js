const express = require('express')
const { verifyToken } = require('../middleware')
const { verifyTokenController } = require('../controllers/jwtController')
const router = express.Router()

router.get('/protected', verifyToken, verifyTokenController)

module.exports = router