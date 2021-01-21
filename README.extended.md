Rollup is a tool for collecting project files for the /dist folder.

tsconfig-esm.json is for compiling to ESModules, i.e. `import {foo, bar} from './myLib';` etc. 
This build configuration won't work on < Node 12 or Internet Explorer. 
Have added tsconfig.dist.json which compiles to es5 in dist instead.

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
