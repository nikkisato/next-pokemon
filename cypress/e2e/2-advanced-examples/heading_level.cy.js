/// <reference types="cypress" />

context('Heading Levels', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Website Should have H1', () => {
		cy.get('h1').should('exist');
	});
});
