exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',

  updateJob: false,
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    name: 'parallel_test',
    build: 'Product Demo for Dan',
    "browserstack.networkLogs": true,
    "browserstack.debug" : true,
    "browserstack.geoLocation" : "FR",
    "browserstack.timezone" : "New_York"
  },

  capabilities: [{
    browser: 'chrome'
  },{
    browser: 'firefox'
  },{
    device : 'iPhone X',
    real_mobile : true,
  },{
    device : 'Samsung Galaxy S9 Plus',
    real_mobile : true,
  }],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',
  
  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  }
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});

