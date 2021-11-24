import Base from './_base.page'

import { LOGIN } from './components/login.elements'

export default class login extends Base {
    static acessarSite() {
        cy.visit(LOGIN.URL)
    }

    static realizarLogin() {
        super.clickOnElement(LOGIN.LOGIN)
        super.clickOnElement(LOGIN.REALIZAR_LOGIN)
        super.typeValue(LOGIN.EMAIL, 'ana@teste.com')
        super.clickOnElement(LOGIN.CONTINUAR)
        super.typeValue(LOGIN.SENHA, 'TesteAna01')
        super.clickOnElement(LOGIN.CONTINUAR)
    }

    static naoRealizarLogin() {
        super.clickOnElement(LOGIN.LOGIN)
        super.clickOnElement(LOGIN.REALIZAR_LOGIN)
        super.typeValue(LOGIN.EMAIL, 'ana@teste.com')
        super.clickOnElement(LOGIN.CONTINUAR)
        super.typeValue(LOGIN.SENHA, 'TesteAna02')
        super.clickOnElement(LOGIN.CONTINUAR)
        super.verifyIfElementExists(LOGIN.ERRO)
    }

}