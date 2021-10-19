const express = require('express')
const router = express.Router()
const Usuario = require('../models/Usuario')

//retorna todos os elementos
router.get('/',  async function(req, res){
    let user
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 0,
        limit: parseInt(req.query.limit, 10) || 10,
        nome: req.query.nome
    }
  
    if(pageOptions.nome != undefined){
        user = await Usuario.find({ nome: pageOptions.nome})  
    } else {
        user = await Usuario.find().skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit)
    }

    if(user.length <= 0){
        res.status(404).json({error: "Lista de usuarios vazia!"})
    } else {
        res.json(user)
    }
})

//retorna elemento por id 
router.get('/:id', async function(req, res){
    let id = req.params.id

    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).json({error: "Requisição fora dos padrões!"})
    } else {
        let user = await Usuario.findById(id)
    }

    if(!user){
        res.status(404).json({error: "Usuario não encontrado!"})
    }

    res.json(user)
})

//adiciona elemento
router.post('/', async function(req, res){
    let novoUsuario = new Usuario(req.body)
    await novoUsuario.save()
    res.json(novoUsuario)
})

//atualiza elemento por id
router.put('/:id', async function(req, res){
    let id = ObjectId.fromString(req.params.id)
    let user = await Usuario.findByIdAndUpdate(id, req.body)
    res.json(user)
})

//deleta elemento por id
router.delete('/:id', async function(req, res){
    let deletedUser = await Usuario.findByIdAndDelete(req.params.id)
    res.json(deletedUser)
})

//deleta todos elementos
router.delete('/', async function(req, res){
    let deletados = await Usuario.deleteMany()
    res.json(deletados)
})

module.exports = router