const express = require('express')
const router = express.Router()
const Produto = require('../models/Produto')

//retorna todos os elementos
router.get('/',  async function(req, res){
    let produtos
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 0,
        limit: parseInt(req.query.limit, 10) || 10,
        cep: req.query.cep
    }
  
    if(pageOptions.cep != undefined){
        produtos = await Produto.find({ cep: pageOptions.cep})  
    } else {
        produtos = await Produto.find().skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit)
    }

    if(produtos.length <= 0){
        res.status(404).json({error: "Lista de endereços vazia!"})
    } else {
        res.json(produtos)
    }
})

//retorna elemento por id 
router.get('/:id', async function(req, res){
    let id = req.params.id

    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).json({error: "Requisição fora dos padrões!"})
    } else {
        let produto = await Produto.findById(id)
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
    let id = ObjectId.fromString(req.params.id)
    let produtoModificado = await Produto.findByIdAndUpdate(id, req.body)
    res.json(produtoModificado)
})

//deleta elemento por id
router.delete('/:id', async function(req, res){
    let deletedProduto = await Produto.findByIdAndDelete(req.params.id)
    res.json(deletedProduto)
})

//deleta todos elementos
router.delete('/', async function(req, res){
    let deletados = await Produto.deleteMany()
    res.json(deletados)
})

module.exports = router