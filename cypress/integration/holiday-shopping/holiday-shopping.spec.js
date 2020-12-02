import MainPage from '../../page-objects/MainPage'
import EyesManager from '../../utils/EyesManager'

describe(`AppliFashion Holiday Shopping | ${Cypress.env('VERSION')}`, () => {
	beforeEach(() => {
		MainPage.navigate()
		EyesManager.openEyes()
	})

	afterEach(() => {
		EyesManager.closeEyes()
	})

	it('Test 1', () => {
		EyesManager.validateWindow('main page')
	})

	it('Test 2', () => {
		MainPage.clickOnFilterMenu()
		MainPage.clickOnBlackColorCheckbox()
		MainPage.clickFilterButton()
		EyesManager.validateRegion('filter by color', '#product_grid')
	})

	it('Test 3', () => {
		MainPage.clickOnTheSpecifiedShoe('Appli Air x Night')
		EyesManager.validateWindow('product details')
	})
})
