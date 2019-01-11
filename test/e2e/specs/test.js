// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.visible('.loader')
      .assert.containsText('h1', 'Reading list')
      .waitForElementVisible('article', 5000)
      .click('article a')
      .waitForElementVisible('#book', 1000)
      .assert.containsText('p', 'ISBN')
      .assert.containsText('a', 'Back to the list')
      .click('#book a')
      .waitForElementVisible('h1', 1000)
      .assert.containsText('h1', 'Reading list')
      .end()
  }
}
