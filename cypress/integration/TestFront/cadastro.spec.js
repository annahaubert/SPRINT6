/// <reference types="cypress" />

import cadastrarUsuario from '../../pages/cadastro.page'

describe('Testes para cadastro de usuário', () => {
    it('Cadastro correto de Pessoa Física', () => {
        cadastrarUsuario.acessarSite()
        cadastrarUsuario.realizarCadastroCorretoPessoaFisica()
    })

    it('Cadastro correto de Pessoa Jurídica', () => {
        cadastrarUsuario.acessarSite()
        cadastrarUsuario.realizarCadastroCorretoPessoaJuridica()
    })
})

describe('Testes negativos para cadastro de usuário', () => {
    it('Cadastro com campos não preenchidos', () => {
        cadastrarUsuario.acessarSite()
        cadastrarUsuario.realizarCadastroCorretoPessoaFisica()
    })
})
