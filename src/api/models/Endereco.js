const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    cep: String,
    rua: String,
    numero: String,
    bairro: String,
    cidade: String,
    pais: String
})


let Endereco = mongoose.model('Endereco', schema)

module.exports = Endereco