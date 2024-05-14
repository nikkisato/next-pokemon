/// <reference types="cypress" />

// https://learn.cypress.io/tutorials/running-our-tests-with-github-actions

describe('Nikki Next Pokemon App', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('displays 5 Links for Navigation', () => {
		// We use the `cy.get()` command to get all elements that match the selector.
		cy.get('#navigation li').should('have.length', 5);

		cy.get('#navigation li').first().should('have.text', 'FormData');
		cy.get('#navigation li').contains('JSON');
		// cy.get('#navigation li').next().should('have.text', 'JSON');
		cy.get('#navigation li').contains('Contact Server');
		cy.get('#navigation li').contains('Contact Api');
		cy.get('#navigation li').contains('Pokemons List');
	});

	it('can take me to FormData', () => {
		cy.get('#navigation li').contains('FormData').click();
		cy.get('#main').should('exist');
	});

	it('can take me to JSON', () => {
		cy.get('#navigation li').contains('JSON').click();
		cy.get('#main').should('exist');
	});

	it('can take me to Contact Server', () => {
		cy.get('#navigation li').contains('Contact Server').click();
		cy.get('#main').should('exist');
	});

	it('can take me to Contact Api', () => {
		cy.get('#navigation li').contains('Contact Api').click();
		cy.get('#main').should('exist');
	});

	it('can take me to Pokemons List', () => {
		cy.get('#navigation li').contains('Pokemons List').click();
		cy.get('#main').should('exist');
	});
});
