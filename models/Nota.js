const mongoose = require('mongoose')
const { Schema } = mongoose
const notasSchema = new Schema({
    nombre: {
        type: String,
        required: [ true, "El campo nombre es obligatorio" ]
    },
    descripcion: String,
    usuarioId: String,
    fecha: {
        type: Date,
        default: Date.now()
    },
    activo: {
        type: Boolean,
        default: true
    }
})
const Nota = mongoose.model('Nota', notasSchema)
module.exports = Nota