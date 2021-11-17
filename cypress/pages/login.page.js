import Base from './_base.page'
import { LOGIN } from './components/login.elements'

export default class LoginSite extends Base {
    static acesso() {
        cy.visit(LOGIN.URL)
    }

    static logar() {
        super.typeValue(LOGIN.USERNAME, 'ana@teste.com')
        super.typeValue(LOGIN.PASSWORD, 'teste')
        super.clickOnElement(LOGIN.BOTAO_LOGIN)
    }

    static loginCorreto() {
        super.clickOnElement(LOGIN.BOTAO_LOGIN)
        super.validarUrl(LOGIN.URL)
    }

    static loginIncorreto() {
        super.typeValue(LOGIN.USERNAME, 'asssd@qa.com')
        super.typeValue(LOGIN.PASSWORD, 'ssss')
        super.clickOnElement(LOGIN.BOTAO_LOGIN)

        super.verifyIfElementExists(LOGIN.ALERTA_ERRO)

    }

    static elementosDaPagina() {
        super.verifyIfElementExists(LOGIN.ATRIBUTOS_EMAIL)
        super.verifyIfElementExists(LOGIN.ATRIBUTOS_SENHA)
        super.getElement(LOGIN.BOTAO_CADASTRAR).first().should('contain', 'Entrar')

    }

}