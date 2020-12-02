module.exports = {
	appName: 'AppliFashion',
	batchName: 'Holiday Shopping',
	failCypressOnDiff: true,
	testConcurrency: 5,
	apiKey: 'APPLITOOLS_API_KEY',
	browser: [
		{ deviceName: 'iPhone X', screenOrientation: 'portrait' },
		{ width: 1200, height: 800, name: 'chrome' },
		{ width: 1200, height: 800, name: 'firefox' },
		{ width: 1200, height: 800, name: 'edgechromium' },
		{ width: 1200, height: 800, name: 'safari' },
	],
}
