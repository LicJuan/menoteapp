const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')
const { Schema } = mongoose

const userSchema = new Schema({
    nombre: {
        type: String,
        required: [ true, "El nombre es obligatorio" ]
    },
    email: {
        type: String,
        required: [ true, "El email es obligatorio" ],
        unique: true
    },
    password: {
        type: String,
        required: [ true, "El password es obligatorio" ]
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    rol: {
        type: String,
        default: 'USER',
        enum: {
            values: ['ADMIN', 'USER'],
            message: '{VALUE} rol no valido'
        }
    },
    activo: {
        type: Boolean,
        default: true
    }
})

userSchema.plugin( validator, { message: "El campo {PATH} debe ser unico" } )


userSchema.methods.toJSON = function(){
    const obj = this.toObject()
    delete obj.password
    return obj
}


const User = mongoose.model('User', userSchema)

module.exports = User