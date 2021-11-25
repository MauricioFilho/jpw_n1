const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    nome: String,
    valor: String,
    descricao: String,
    codigo: String
})


let Produto = mongoose.model('Produto', schema)

module.exports = Produto