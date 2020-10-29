const router = require('express').Router()
const { crear, listar, obtenerUser, editarUser, deleteUser } = require('../controllers/UserController')
const { AuthVerify, AdminVerify } = require('../middlewares/auth')

router.post( '/crear', crear )
router.get( '/', listar )
router.get( '/:id', obtenerUser )
router.put( '/:id/editar', [ AuthVerify, AdminVerify ], editarUser )
router.delete( '/:id/eliminar', deleteUser )

module.exports = router