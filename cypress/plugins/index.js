/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
// promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
	const pathToConfigFile = path.resolve('', 'cypress', 'config', `${file}.json`)

	return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
	//console.log(config) // see what all is in here!
	// accept a configFile value or use productionV1 by default
	const file = config.env.configFile || 'productionV1'

	return getConfigurationByFile(file)
}

require('@applitools/eyes-cypress')(module)
