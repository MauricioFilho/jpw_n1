const express = require('express')
const router = express.Router()
const Endereco = require('../models/Endereco')

//retorna todos os elementos
router.get('/',  async function(req, res){
    let enderecos
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 0,
        limit: parseInt(req.query.limit, 10) || 10,
        cep: req.query.cep
    }
  
    if(pageOptions.cep != undefined){
        enderecos = await Endereco.find({ cep: pageOptions.cep})  
    } else {
        enderecos = await Endereco.find().skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit)
    }

    if(enderecos.length <= 0){
        res.status(404).json({error: "Não existem endereços cadastrados!"})
    } else {
        res.json(enderecos)
    }
})

//retorna elemento por id 
router.get('/:id', async function(req, res){
    let id = req.params.id
    let endereco

    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).json({error: "Requisição fora dos padrões!"})
    } else {
        endereco = await Endereco.findById(id)
    }

    if(!endereco){
        res.status(404).json({error: "Endereço não encontrado!"})
    }

    res.json(endereco)
})

//adiciona elemento
router.post('/', async function(req, res){
    let novoEndereco = new Endereco(req.body)
    await novoEndereco.save()
    res.json(novoEndereco)
})

//atualiza elemento por id
router.put('/:id', async function(req, res){
    let id = req.params.id
    let enderecoModificado
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).json({error: "Requisição fora dos padrões!"})
    } else {
        enderecoModificado = await Endereco.findByIdAndUpdate(id, req.body)
    }
    res.json(enderecoModificado)
})

//deleta elemento por id
router.delete('/:id', async function(req, res){
    let id = req.params.id
    let enderecoDeletado
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).json({error: "Requisição fora dos padrões!"})
    } else {
        enderecoDeletado = await Endereco.findByIdAndDelete(id)
        if(!enderecoDeletado) {
            res.status(404).json({error: "Endereço não encontrado!"})
        }
    } 
    
    res.json(enderecoDeletado)
})

//deleta todos elementos
router.delete('/', async function(req, res){
    let quantidadedeletados = await Endereco.deleteMany()
    res.json(quantidadedeletados)
})

module.exports = router