const express = require('express')
const router = express.Router()
const Usuario = require('../models/Usuario')

//retorna todos os elementos
router.get('/',  async function(req, res){
    let usuario
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 0,
        limit: parseInt(req.query.limit, 10) || 10,
        senha: req.query.senha
    }
  
    if(pageOptions.senha != undefined){
        usuario = await Usuario.find({ senha: pageOptions.senha})  
    } else {
        usuario = await Usuario.find().skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit)
    }

    if(usuario.length <= 0){
        usuario.status(404).json({error: "Não existem usuários cadastrados!"})
    } else {
        res.json(usuario)
    }
})

//retorna elemento por id 
router.get('/:id', async function(req, res){
    let id = req.params.id
    let usuario 

    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).json({error: "Requisição fora dos padrões!"})
    } else {
        usuario = await Usuario.findById(id)
    }

    if(!usuario){
        res.status(404).json({error: "Usuario não encontrado!"})
    }

    res.json(usuario)
})

//adiciona elemento
router.post('/', async function(req, res){
    let novoUsuario = new Usuario(req.body)
    await novoUsuario.save()
    res.json(novoUsuario)
})

//atualiza elemento por id
router.put('/:id', async function(req, res){
    let id = req.params.id
    let usuarioModificado
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).json({error: "Requisição fora dos padrões!"})
    } else {
        usuarioModificado = await Usuario.findByIdAndUpdate(id, req.body)
    }
    res.json(usuarioModificado)
})

//deleta elemento por id
router.delete('/:id', async function(req, res){
    let id = req.params.id
    let usuarioDeletado
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).json({error: "Requisição fora dos padrões!"})
    } else{
        usuarioDeletado = await Usuario.findByIdAndDelete(id)
        if(!usuarioDeletado){
            res.status(404).json({error: "Usuario não encontrado!"})
        }
    }
    res.json(usuarioDeletado)
})

//deleta todos elementos
router.delete('/', async function(req, res){
    let quantidadedeletados = await Usuario.deleteMany()
    res.json(quantidadedeletados)
})

module.exports = router