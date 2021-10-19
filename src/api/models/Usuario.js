const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    nome: String,
    senha: String,
    token: String
})


let Usuario = mongoose.model('Usuario', schema)

module.exports = Usuario