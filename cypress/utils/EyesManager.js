export default class EyesManager {
	static openEyes() {
		cy.eyesOpen()
	}

	static validateWindow(stepName) {
		cy.eyesCheckWindow({
			stepName: stepName,
			tag: stepName,
			target: 'window',
			fully: true,
		})
	}

	static validateRegion(stepName, regionCssLocator) {
		cy.eyesCheckWindow({
			stepName: stepName,
			tag: stepName,
			target: 'region',
			selector: regionCssLocator,
		})
	}

	static closeEyes() {
		cy.eyesClose()
	}
}
