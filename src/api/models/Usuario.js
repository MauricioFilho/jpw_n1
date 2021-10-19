const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    nome: String,
    senha: String,
    idade: String
})

let Usuario = mongoose.model('Usuario', schema)

module.exports = Usuario