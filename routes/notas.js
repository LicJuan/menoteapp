const router = require('express').Router()
const { crear } = require('../controllers/NotaController')

router.post('/crear', crear)

module.exports = router