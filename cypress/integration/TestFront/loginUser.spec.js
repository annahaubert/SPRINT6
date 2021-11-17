/// <reference types="cypress" />

import LoginSite from "../../pages/login.page";

describe('Testes de login', () => {

    it('Deve verificar os elementos da página', () => {
        LoginSite.acesso()
        LoginSite.elementosDaPagina()
    })

    it('Deve realizar login corretamente', () => {
        LoginSite.acesso()
        LoginSite.logar()
        LoginSite.loginCorreto()
    })
    
})

describe('Teste negativo de login', () => {
    it('Não realizará login', () => {
        LoginSite.acesso()
        LoginSite.loginIncorreto()
    })
})