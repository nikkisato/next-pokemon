/// <reference types="cypress" />

context('Skip Link', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	it('Website Should have Skip Link', () => {
		cy.get('#skip-link').should('exist');
	});

	// need to check if there is a main tag
	it('Main Content should exist', () => {
		cy.get('#main').should('exist');
	});

	// Skip Link should lead to Main Tag
	it('Skip Link should lead to Main', () => {
		cy.get('#skip-link').click();
	});
});
