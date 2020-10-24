const router = require('express').Router()
const notas = require('./notas')

router.use( '/notas', notas )

module.exports = router