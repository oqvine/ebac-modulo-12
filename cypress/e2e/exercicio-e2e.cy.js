/// <reference types="cypress" />

import EnderecoPage from '../support/page_objects/endereco.page'

describe('Funcionalidade Página de Produtos', () => {

before(() => {
cy.visit('produtos/')
});

it('Deve adicionar 4 produtos ao carrinho e ir para o checkout', () => {
    cy.addProdutos('Hero Hoodie', 'M', 'Gray', 4)
    cy.get('button').contains('Comprar').click()
    cy.get('a').contains('Ver carrinho').click()
    cy.get('a').contains('Concluir compra').click()
    cy.get('h3').contains('Detalhes de faturamento')
    EnderecoPage.editarEnderecoFaturamento('vinicius', 'blasque', 'EBAC', 'Brasil', 'Claudio Ono', 'random', 'São Paulo', 'São Paulo', '12177892', '12385758940', 'viniciusteste0@gmail.com')
    cy.get('input[id="payment_method_cod"]').click()
    cy.get('#terms').click({ multiple: true });;
    cy.get('input[name="woocommerce_checkout_place_order"').click();
    cy.get('.page-title').contains("Pedido recebido");
   
          
    });

});