const router = require('express').Router()
const { login } = require('../controllers/UserController')

router.post('/', login)

module.exports = router