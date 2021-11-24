/// <reference types="cypress" />

import carrinho from '../../pages/carrinho.page'
import login from '../../pages/login.page'


describe('Testes negativos para carrinho', () => {
    it('Sem produtos no carrinho', () => {
        carrinho.acessarSite()
        carrinho.semProdutos()
    })

describe('Testes para carrinho', () => {
    it('Adiciona produtos ao carrinho', () => {
        login.acessarSite()
        login.realizarLogin()
        carrinho.acessarSite()
        carrinho.adicionarProduto()
    })


})

}) 
