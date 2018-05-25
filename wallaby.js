module.exports = wallaby => ({
  files: [
    'lib/**/*.ts',
    { pattern: 'node_modules/chai/chai.js', instrument: false },
    // { pattern: 'src/**/*.js', instrument: true, load: true, ignore: false }
  ],

  tests: ['test/**/*spec.ts'],

  compilers: {
    '**/*.ts': wallaby.compilers.typeScript({
      module: 'commonjs'
    })
  },

  setup: function () {
    global.expect = require('chai').expect;
  },

  testFramework: {
    type: 'mocha',
    path: 'mocha'
  },

  env: {
    type: 'node'
  },
});