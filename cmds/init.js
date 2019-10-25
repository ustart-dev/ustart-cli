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
const execSync = require('child_process').execSync;
const { prompt } = require('enquirer');
const files = require('../lib/files');
const cmds = require("../lib/cmds");

const promptNonSetValues = async function(argv) {
  let result = {};
  if (typeof argv.mongoose === 'undefined') {
    Object.assign(result, await prompt({
      type: 'confirm',
      name: 'mongoose',
      message: 'Are you going to use MongoDB?'
    }));
  }
  if (typeof argv.sequelize === 'undefined') {
    Object.assign(result, await prompt({
      type: 'confirm',
      name: 'sequelize',
      message: 'Are you going to use PostgreSQL, MariaDB, MySQL or SQLite?'
    }));
  }
  if (typeof argv.shield === 'undefined') {
    Object.assign(result, await prompt({
      type: 'confirm',
      name: 'shield',
      message: 'Are you going to use the permission layer?'
    }));
  }
  return result;
}

exports.command = "init [project-name] [mongoose] [sequelize] [shield]";
exports.desc =
  "Initializes a new backend project based on uStart framework";
exports.builder = yargs =>
  yargs
  .positional("project-name", {
    describe: "Name of the project's folder",
    type: "string"
  })
  .positional("mongoose", {
    describe: "Set to install mongoose during initialization",
    type: "boolean"
  })
  .positional("sequelize", {
    describe: "Set to install sequelize during initialization",
    type: "boolean"
  })
  .positional("shield", {
    describe: "Set to install graphql-shield during initialization",
    type: "boolean"
  })
  .middleware(promptNonSetValues)
  .argv;
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
  if (argv.mongoose) {
    execSync(`cd ${dir} && npm install mongoose`, { stdio: 'inherit' });
  }
  if (argv.sequelize) {
    execSync(`cd ${dir} && ${cmds.installAllSequelize}`, { stdio: 'inherit' });
  }
  if (argv.shield) {
    execSync(`cd ${dir} && npm install graphql-shield`, { stdio: 'inherit' });
  }
  execSync(`cd ${dir} && cp -R ./node_modules/ustart-scripts/template/. ./`, { stdio: 'inherit' });
  execSync(`cd ${dir} && mv gitignore .gitignore`, { stdio: 'inherit' });
  execSync(`cd ${dir} && mv env .env`, { stdio: 'inherit' });
};
