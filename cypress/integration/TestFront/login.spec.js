/// <reference types="cypress" />

import login from '../../pages/login.page'

describe('Testes positivos de login', () => {
    it('Realiza login corretamente', () => {
        login.acessarSite()
        login.realizarLogin()
    })

describe('Testes negativos de login', () => {
    it('Não consegue realizar login', () => {
        login.acessarSite()
        login.naoRealizarLogin()
    })

})

})