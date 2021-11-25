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
        super.typeValue(ENDERECO.NUMERO, 121)
        super.typeValue(ENDERECO.COMPLEMENTO, 12)
        super.verifyIfElementExists(ENDERECO.CEP)
        super.verifyIfElementExists(ENDERECO.BAIRRO)
        super.clickOnElement(ENDERECO.SALVAR)
        super.verifyIfElementExists(ENDERECO.ALERTA_CERTO)
    }

    static naoEditaEndereco() {
        super.clickOnElement(ENDERECO.MEUS_ENDERECOS)
        super.clickOnElement(ENDERECO.EDITAR)
        super.typeValue(ENDERECO.CEP, 7680871)
        super.verifyIfElementExists(ENDERECO.AVENIDA)
        super.typeValue(ENDERECO.NUMERO, 12112112)
        super.typeValue(ENDERECO.COMPLEMENTO, 3)
        super.verifyIfElementExists(ENDERECO.CEP)
        super.verifyIfElementExists(ENDERECO.BAIRRO)
        super.clickOnElement(ENDERECO.SALVAR)
        super.verifyIfElementExists(ENDERECO.ALERTA_ERRO)
    }


}