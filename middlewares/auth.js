const jwt = require('jsonwebtoken')
const AuthVerify = ( req, res, next ) => {
    const token = req.get('token')
    jwt.verify( token, process.env.TOKEN_SECRET, ( err, decoded ) => {
        if( err ) {
            res.status( 403 ).json({
                err,
                message: 'No estas autorizado'
            })
        }
        req.user = decoded.data
        next()
    })
}
const AdminVerify = ( req, res, next ) => {
    const rol = req.user.rol
    if( rol == 'ADMIN' ) {
        next()
    } else {
        res.status( 403 ).json({
            error: true,
            message: 'No estas autorizado'
        })
    }
}


module.exports = { AuthVerify, AdminVerify }