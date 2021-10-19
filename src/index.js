const express = require("express")
const app = express()
const cors = require('cors')
const porta = 3000
const routes = require('./api/routes/')
const mongoose = require('mongoose')
const databaseOptions = require('./api/data/database.json')


app.use(express.json())
app.use('/api', routes)

mongoose.connect(databaseOptions.url).then(function(){
    app.listen(8080, function(){
        console.log(`Servidor rodando na porta ${porta}`)
    })
}).catch(function(){
    console.log('Error 500: Internal server Error!')
})