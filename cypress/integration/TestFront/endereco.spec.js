/// <reference types="cypress" />

import login from '../../pages/login.page'
import endereco from '../../pages/endereco.page'

describe('Testes positivos de endereço', () => {
    it('Realiza login e edita o endereço', () => {
        login.acessarSite()
        login.realizarLogin()
        endereco.editarEndereco()
    })

describe('Testes negativos de endereço', () => {
    it('Não consegue fazer alterações', () => {
        login.acessarSite()
        login.realizarLogin()
        endereco.naoEditaEndereco()
    })

})

})