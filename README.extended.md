## Notes

Rollup is a tool for collecting project files for the /dist folder.

tsconfig-esm.json is for compiling to ESModules, i.e. `import {foo, bar} from './myLib';` etc. 
This build configuration compiles to `[package name].bundle.js` for es5 (package.json "main") using tsconfig.json
and index.js for ES6 (ES2015) (package.json "module") using tsconfig-esm.json

## Set Up

1. Set package `name` in package.json

## Deploying

1. `npm run build:docker`
2. Set version in package.json
3. ~~Check files in package (pre-publish) with `npm pack --dry-run
   1. Having issues with using`"files": ["dist"],` due to npm ignoring folders in .gitignore 
4. `npm publish dist` (blindly)

## Troubleshooting

### jsdocUtils error

Error:

```
/Users/olivercaine/Code/BitBucket/boilerplate-stack/module/node_modules/eslint-plugin-jsdoc/dist/jsdocUtils.js:427
  } catch {//
          ^
SyntaxError: Unexpected token {
```

Cause: Wrong version of Node used

Fix: Try switching to Node 10 or above
