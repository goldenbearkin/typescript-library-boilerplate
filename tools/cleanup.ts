import { readFileSync, writeFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./dist/package.json').toString());
delete packageJson.devDependencies;
delete packageJson.scripts;
writeFileSync('./dist/package.json', JSON.stringify(packageJson, null, 2));
