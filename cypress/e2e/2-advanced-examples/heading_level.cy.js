/// <reference types="cypress" />

context('Heading Levels', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('Website Should have H1', () => {
		cy.get('h1').should('exist');
	});
});
