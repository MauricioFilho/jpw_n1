const express = require('express')
const router = express.Router()
const Produto = require('../models/Produto')

//retorna todos os elementos
router.get('/',  async function(req, res){
    let produtos
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 0,
        limit: parseInt(req.query.limit, 10) || 10,
        codigo: req.query.codigo
    }
  
    if(pageOptions.codigo != undefined){
        produtos = await Produto.find({codigo: pageOptions.codigo})  
    } else {
        produtos = await Produto.find().skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit)
    }
    res.json(produtos)
})

//retorna elemento por id 
router.get('/:id', async function(req, res){
    let id = req.params.id
    let produto

    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).json({error: "Requisição fora dos padrões!"})
    } else {
        produto = await Produto.findById(id)
    }

    if(!produto){
        res.status(404).json({error: "Produto não encontrado!"})
    }

    res.json(produto)
})

//adiciona elemento
router.post('/', async function(req, res){
    let novoProduto = new Produto(req.body)

    await novoProduto.save()
    res.json(novoProduto)
})

//atualiza elemento por id
router.put('/:id', async function(req, res){
    let id = req.params.id
    let produtoModificado

    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).json({error: "Requisição fora dos padrões!"})
    } else {
        produtoModificado = await Produto.findByIdAndUpdate(id, req.body)
        if(!produtoModificado) {
            res.status(404).json({error: "Produto não encontrado!"})
        }
    }
    res.json(produtoModificado)
})

//deleta elemento por id
router.delete('/:id', async function(req, res){
    let id = req.params.id
    let produtoDeletado
    
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).json({error: "Requisição fora dos padrões!"})
    } else {
        produtoDeletado = await Produto.findByIdAndDelete(id)
        if(!produtoDeletado) {
            res.status(404).json({error: "Produto não encontrado!"})
        }
    }
    res.json(produtoDeletado)
})

//deleta todos elementos
router.delete('/', async function(req, res){
    let quantidadedeletados = await Produto.deleteMany()
    res.json(quantidadedeletados)
})

module.exports = router