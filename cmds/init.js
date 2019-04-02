/**
Command:
  $ ustart init
     1.- Checks that package.json does not exists, if so it throws an error and exit
     2.- Creates a package.json
     3.- Installs all NPM dependencies
     4.- Copies ustart template's content into the current directory
*/
const path = require('path');
const files = require('../lib/files');
const execSync = require('child_process').execSync;

exports.command = 'init';
exports.desc = 'Initializes a new backend project based on uStart framework';
exports.handler = function (argv) {
  files.createPackageJson('./', path.basename(process.cwd()));
  execSync('npm install', { stdio: 'inherit' });
  execSync('cp -R ./node_modules/ustart/template/. ./', { stdio: 'inherit' });
  execSync('mv gitignore .gitignore', { stdio: 'inherit' });
  execSync('mv env .env', { stdio: 'inherit' });
};
