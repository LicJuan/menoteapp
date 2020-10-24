const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const PORT = process.env.PORT || 5000

app.use(morgan( 'tiny' ))

app.use('/', ( req, res ) => {
    res.send("Funciona")
})

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})