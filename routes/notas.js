const router = require('express').Router()
const { crear, listar, obtenerId, actualizarNota, eliminarNota } = require('../controllers/NotaController')

router.post('/crear', crear)
router.get('/', listar)
router.get('/:id', obtenerId)
router.put( '/:id/editar', actualizarNota )
router.delete('/:id/eliminar', eliminarNota)

module.exports = router