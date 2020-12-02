export default class MainPage {
	static navigate() {
		cy.visit(Cypress.env('APP_PATH'))
	}

	static clickOnFilterMenu() {
		cy.get('.ti-filter').then($filterFunnel => {
			if ($filterFunnel.is(':visible')) {
				cy.wrap($filterFunnel).click()
			}
		})
	}

	static clickOnBlackColorCheckbox() {
		cy.get('#colors__Black').click()
	}

	static clickFilterButton() {
		cy.get('#filterBtn').click()
	}

	static clickOnTheSpecifiedShoe(shoeName) {
		cy.get('#product_grid div div > a').each($element => {
			if ($element.text() === shoeName) {
				cy.wrap($element).should('be.visible').click()
			}
		})
	}
}
