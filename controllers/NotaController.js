const Nota = require('../models/Nota')

module.exports = {
    crear: async ( req, res ) => {
        const body = req.body
        try {
            const nota = await Nota.create(body)
            res.json(nota)
        } catch (error) {
            res.status( 400 ).json({
                error,
                message: 'Ocurrio un error al enviar'
            })
        }
    },
    listar: async ( req, res ) => {
        const user = req.user._id
        try {
            const notas = await Nota.find({user})
            res.json( notas )
        } catch (error) {
            res.status( 500 ).json({
                error,
                message: 'Ocurrio un error'
            })
        }
    },
    obtenerId: async ( req, res ) => {
        const _id = req.params.id
        try {
            const notaId = await Nota.findOne({ _id })
            if( !notaId ) {
                res.status( 500 ).json({
                    error,
                    message: 'El registro no se encontro'
                })    
            }
            res.json( notaId )
        } catch (error) {
            res.status( 500 ).json({
                error,
                message: 'Ocurrio un error'
            })
        }
    },
    actualizarNota: async ( req, res ) => {
        const _id = req.params.id
        const body = req.body
        try {
            const newNota = await Nota.findByIdAndUpdate(_id, body, {new: true})
            if( !newNota ) {
                res.status( 400 ).json({
                    error: true,
                    message: 'Ocurrio un error'
                })
            }
            res.json( newNota )
        } catch (error) {
            res.status( 500 ).json({
                error,
                message: 'Ocurrio un error'
            })
        }
    },
    eliminarNota: async ( req, res ) => {
        const _id = req.params.id
        try {
            const deleteNota = await Nota.findByIdAndDelete({_id})
            if( !deleteNota ) {
                res.status( 400 ).json({
                    error: true,
                    message: 'No se pudo eliminar el registro'
                })
            }
            res.json( deleteNota )
        } catch (error) {
            res.status( 500 ).json({
                error,
                message: 'Ocurrio un error'
            })
        }
    } 
}