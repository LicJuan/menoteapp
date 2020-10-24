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
    }
}