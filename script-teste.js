const shell = require('shelljs');

console.log('Ola mundo');

shell.exec('git diff --name-only automacao-projeto..main');
