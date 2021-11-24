import Base from './_base.page'

import { ENDERECO } from './components/endereco.elements'

export default class endereco extends Base {
    static acessarSite() {
        cy.visit(ENDERECO.URL)
    }

    static editarEndereco() {
        super.clickOnElement(ENDERECO.MEUS_ENDERECOS)
        super.clickOnElement(ENDERECO.EDITAR)
        super.verifyIfElementExists(ENDERECO.CEP)
        super.verifyIfElementExists(ENDERECO.AVENIDA)
        super.verifyIfElementExists(ENDERECO.NUMERO)
        super.verifyIfElementExists(ENDERECO.CEP)
        super.verifyIfElementExists(ENDERECO.BAIRRO)
    }


}