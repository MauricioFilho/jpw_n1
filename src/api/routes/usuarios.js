const express = require('express')
const router = express.Router()
const Usuario = require('../models/Usuario')

//retorna todos os elementos
router.get('/', async function(req, res){
    let users = await Usuario.find()
    res.json(users)
})

//retorna elemento por id 
router.get('/:id', async function(req, res){
    let id = req.params.id
    let user = await Usuario.findById(id)
    
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

module.exports = router