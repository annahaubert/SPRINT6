import Base from './_base.page'

import { CARRINHO } from './components/carrinho.elements'

export default class carrinho extends Base {
    static acessarSite() {
        cy.visit(CARRINHO.URL)
    }

    static adicionarProduto() {
        super.clickOnElement(CARRINHO.ADICIONAR_PRODUTO)
        super.clickOnElement(CARRINHO.CARRINHO)
        super.verifyIfElementExists(CARRINHO.PRODUTO)
        super.clickOnElement(CARRINHO.FINALIZAR_PEDIDO)
        super.validarUrl(CARRINHO.FINAL)
    }

    static semProdutos() {
        super.clickOnElement(CARRINHO.CARRINHO)
        super.clickOnElement(CARRINHO.CONTEUDO).should('contain', 'Opss! Não há produtos em seu carrinho :/')
    }

    
}


