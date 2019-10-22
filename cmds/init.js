/**
Command:
  $ ustart init
     1.- Creates the project folder if requested
     2.- Checks that package.json does not exists, if so it throws an error and exit
     3.- Creates a package.json
     4.- Installs all NPM dependencies
     5.- Copies ustart template's content into the current directory
*/
const path = require('path');
const files = require('../lib/files');
const execSync = require('child_process').execSync;

exports.command = "init [project-name]";
exports.desc =
  "Initializes a new backend project based on uStart framework";
exports.builder = yargs =>
  yargs.positional("project-name", {
    describe: "Name of the project's folder",
    type: "string",
  }).argv;
exports.handler = function(argv) {
  const parsedPath = path.parse(argv.projectName || process.cwd());
  let dir;
  const base = parsedPath.base;

  if (argv.projectName) {
    dir = path.join(parsedPath.dir || '.', base);
    files.createFolder(argv.projectName);
  } else {
    dir = '.';
  }

  files.createPackageJson(dir, base);
  execSync(`cd ${dir} && npm install`, { stdio: 'inherit' });
  execSync(`cd ${dir} && cp -R ./node_modules/ustart-scripts/template/. ./`, { stdio: 'inherit' });
  execSync(`cd ${dir} && mv gitignore .gitignore`, { stdio: 'inherit' });
  execSync(`cd ${dir} && mv env .env`, { stdio: 'inherit' });
};
