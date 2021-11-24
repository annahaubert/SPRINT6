import Base from './_base.page'

import { CADASTRO } from './components/cadastro.elements'

export default class cadastrarUsuario extends Base {
    static acessarSite() {
        cy.visit(CADASTRO.URL)
    }

    static realizarCadastroCorretoPessoaFisica() {
        super.clickOnElement(CADASTRO.CADASTRO_SITE)
        super.typeValue(CADASTRO.NOME_CLIENTE, 'Alala Lopes')
        super.typeValue(CADASTRO.DATA_NASCIMENTO, 12091990)
        super.typeValue(CADASTRO.CPF_CLIENTE, 24749382060)
        super.typeValue(CADASTRO.TELEFONE_FIXO, 9326506267)
        super.typeValue(CADASTRO.TELEFONE_CELULAR, 93993673521)
        super.typeValue(CADASTRO.EMAIL_CLIENTE, 'ana@teste.com')
        super.typeValue(CADASTRO.EMAIL_CONFIRMACAO, 'ana@teste.com')
        super.typeValue(CADASTRO.SENHA_CLIENTE, 'TesteAna01')
        super.typeValue(CADASTRO.SENHA_CONFIRMACAO, 'TesteAna01')
        super.typeValue(CADASTRO.CEP_CAIXA1, 68038)
        super.typeValue(CADASTRO.CEP_CAIXA2, 395)
        super.typeValue(CADASTRO.ENDERECO, 'Rua Aramanaí')
        super.typeValue(CADASTRO.BAIRRO, 'Elcione Barbalho')
        super.clickOnElement(CADASTRO.BTTNAVANCAR)
    }

    static realizarCadastroCorretoPessoaJuridica() {
        super.clickOnElement(CADASTRO.CADASTRO_SITE)
        super.clickOnElement(CADASTRO.PESSOA_JURIDICA)
        super.typeValue(CADASTRO.RAZAO_SOCIAL, 'Datasul')
        super.typeValue(CADASTRO.INSCRICAO_ESTADUAL, 128734630899)
        super.typeValue(CADASTRO.CNPJ_CLIENTE, 62280915000155)
        super.typeValue(CADASTRO.NOME_CLIENTE_PJ, 'Alala Lopes')
        super.typeValue(CADASTRO.DATA_NASCIMENTO_PJ, 12091990)
        super.typeValue(CADASTRO.CPF_CLIENTE_PJ, 24749382060)
        super.typeValue(CADASTRO.TELEFONE_FIXO, 9326506267)
        super.typeValue(CADASTRO.TELEFONE_CELULAR, 93993673521)
        super.typeValue(CADASTRO.EMAIL_CLIENTE, 'ana@teste.com')
        super.typeValue(CADASTRO.EMAIL_CONFIRMACAO, 'ana@teste.com')
        super.typeValue(CADASTRO.SENHA_CLIENTE, 'TesteAna01')
        super.typeValue(CADASTRO.SENHA_CONFIRMACAO, 'TesteAna01')
        super.typeValue(CADASTRO.CEP_CAIXA1, 68038)
        super.typeValue(CADASTRO.CEP_CAIXA2, 395)
        super.typeValue(CADASTRO.ENDERECO, 'Rua Aramanaí')
        super.typeValue(CADASTRO.BAIRRO, 'Elcione Barbalho')
        super.clickOnElement(CADASTRO.BTTNAVANCAR)
        

    }

    static realizarCadastroEspacoBranco() {
        super.typeValue(CADASTRO.NOME_CLIENTE, '')
        super.typeValue(CADASTRO.DATA_NASCIMENTO, 12091990)
        super.typeValue(CADASTRO.CPF_CLIENTE, 24749382060)
        super.typeValue(CADASTRO.TELEFONE_FIXO, 9326506267)
        super.typeValue(CADASTRO.TELEFONE_CELULAR, 93993673521)
        super.typeValue(CADASTRO.EMAIL_CLIENTE, '')
        super.typeValue(CADASTRO.EMAIL_CONFIRMACAO, 'ana@teste.com')
        super.typeValue(CADASTRO.SENHA_CLIENTE, 'TesteAna01')
        super.typeValue(CADASTRO.SENHA_CONFIRMACAO, 'TesteAna01')
        super.clickOnElement(CADASTRO.BTTNAVANCAR)
        super.verifyIfElementExists(CADASTRO.ERRO)

    }

}