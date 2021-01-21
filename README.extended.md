Rollup is a tool for collecting project files for the /dist folder.

tsconfig-esm.json is for compiling to ESModules, i.e. `import {foo, bar} from './myLib';` etc. 
This build configuration won't work on < Node 12 or Internet Explorer. 
Have added tsconfig.dist.json which compiles to es5 in dist instead.
