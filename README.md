[![Build Status](https://travis-ci.org/goldenbearkin/typescript-library-boilerplate.svg?branch=master)](https://travis-ci.org/goldenbearkin/typescript-library-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/goldenbearkin/typescript-library-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/goldenbearkin/typescript-library-boilerplate?branch=master)

# TypeScript Library Boilerplate

A simple tree-shakable TypeScript library boilerplate

# Stacks
- **unit test**: mocha, chai
- **code coverage**: nyc, wallabyjs(optional)
- **ci**: travis

# How to use?

Just clone it and use it.

# Commands list
````
yarn test           // run test(mocha) and coverage report(nyc)
yarn test:watch     // run test on watch mode (without coverage report)
yarn build          // build for both esm (ES5 + ES2015 module) and ES5 UMD bundle, at dist folder.
yarn lint           // run lint against lib and test
````

# Testing

This boilerplate use Mocha as test framework.

# Reference
[http://blog.mgechev.com/2017/01/21/distributing-an-angular-library-aot-ngc-types](http://blog.mgechev.com/2017/01/21/distributing-an-angular-library-aot-ngc-types/)

# Please help

Welcome for PR

# License

MIT