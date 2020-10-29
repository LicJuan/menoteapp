const router = require('express').Router()
const notas = require('./notas')
const user = require('./user')
const login = require('./login')
const { AuthVerify } = require('../middlewares/auth')

router.use( '/notas', AuthVerify, notas )
router.use( '/user', user )
router.use('/login', login)

module.exports = router