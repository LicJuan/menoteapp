const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    crear: async (req, res) => {
        const body = {
            nombre: req.body.nombre,
            email: req.body.email,
            password: bcrypt.hashSync( req.body.password, 10 )
        }
        try {
            const newUser = await User.create( body )
            res.json( newUser )
        } catch (error) {
            res.status( 400 ).json({
                error,
                message: 'Ocurrio un error en el registro'
            })
        }
    },
    listar: async ( req, res ) => {
        try {
            const users = await User.find()
            res.json( users )
        } catch (error) {
            res.status( 500 ).json({
                error,
                message: 'Ocurrio un error'
            })
        }
    },
    obtenerUser: async ( req, res ) => {
        const _id = req.params._id
        try {
            const user = await User.findOne({_id})
            if( !user ) {
                res.status( 400 ).json({
                    error,
                    message: 'No se encontro al usuario'
                })
            }
            res.json( user )
        } catch (error) {
            res.status( 500 ).json({
                error,
                message: 'Ocurrio un error'
            })
        }
    },
    editarUser: async ( req, res ) => {
        const _id = req.params.id
        const body = req.body
        if( body.password ) bcrypt.hashSync( body.password, 10 )
        try {
            const userUpdate = await User.findByIdAndUpdate(_id, body, { new: true })
            res.json( userUpdate )
        } catch (error) {
            res.status( 500 ).json({
                error,
                message: 'Ocurrio un error'
            })
        }
    },
    deleteUser: async ( req, res ) => {
        const _id = req.params._id
        try {
            const deleteUser = await User.findByIdAndDelete(_id)
            res.json( deleteUser )
        } catch (error) {
            res.status( 500 ).json({
                error,
                message: 'Ocurrio un error'
            })
        }
    },
    login: async ( req, res ) => {
        const { email, password } = req.body
        try {
            const user = await User.findOne({email})
            if( !user ) {
                res.status( 400 ).json({
                    error: true,
                    message: 'El usuario no se encontro'
                })
            }
            const verifiedPass = bcrypt.compareSync( password, user.password )
            if( !verifiedPass ) {
                res.status( 400 ).json({
                    error: true,
                    message: 'El usuario no se encontro'
                })
            }

            const token = jwt.sign(
                {data: user},
                process.env.TOKEN_SECRET,
                { expiresIn: '24h' }
            )
            res.json({
                user,
                token
            })
        } catch (error) {
            res.status( 500 ).json({
                error,
                message: 'Ocurrio un error'
            })
        }
    }
    
}