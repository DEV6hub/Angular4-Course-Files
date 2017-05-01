require('ts-node/register');

exports.config = {
  framework: 'jasmine',

  baseUrl: 'http://localhost:3000/',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    '**/*.e2e.ts'
  ],
  exclude: [],

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['show-fps-counter=true']
    }
  },

  useAllAngular2AppRoots: true
}
