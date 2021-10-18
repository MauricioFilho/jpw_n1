const express = require("express")
const app = express()
const cors = require('cors')
const porta = 3000
const routes = require('./api/routes/')
const mongoose = require('mongoose')
const url = 'mongodb+srv://mauricio:admin@cluster0.r1odn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const options = {useUnifiedTopology: true}

app.use(express.json())
app.use('/api', routes)

mongoose.connect(url, options).then(function(){
    app.listen(8080, function(){
        console.log(`Servidor rodando na porta ${porta}`)
    })
})