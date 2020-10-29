const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const history = require('connect-history-api-fallback')
const cors = require('cors')
const path = require('path')
const routes = require('./routes')
const PORT = process.env.PORT || 5000

require('dotenv').config()

mongoose.connect( process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Conectado a la base de datos')).catch((err)=> console.log(err))

app.use( morgan( 'tiny' ) )
app.use( cors() )
app.use( express.static(path.join(__dirname + '/public')) )
app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.json() )

app.use('/api', routes)
app.use( history() )

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})