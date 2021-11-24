/// <reference types="cypress" />

import login from '../../pages/login.page'
import endereco from '../../pages/endereco.page'

describe('Testes positivos de endereço', () => {
    it.only('Realiza login e entra na edição de endereço', () => {
        login.acessarSite()
        login.realizarLogin()
        endereco.editarEndereco()
    })

describe('Testes negativos de endereço', () => {
    it('Não consegue fazer alterações', () => {
        login.acessarSite()
        login.realizarLogin()
        endereco.entraNoEditarEndereco()
    })

})

})