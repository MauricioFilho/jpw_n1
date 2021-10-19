const express = require('express')
const router = express.Router()
const usuarios = require('./usuarios')
const produtos = require('./produtos')
const enderecos = require('./enderecos')


router.use('/usuarios', usuarios)
router.use('/produtos', produtos)
router.use('/enderecos', enderecos)


module.exports = router