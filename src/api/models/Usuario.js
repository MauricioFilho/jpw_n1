const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    senha: String,
    admin: {
        type: Boolean,
        default: false
    }
})


let Usuario = mongoose.model('Usuario', schema)

module.exports = Usuario