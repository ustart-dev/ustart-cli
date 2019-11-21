const path = require('path');
const execSync = require('child_process').execSync;
const { prompt } = require('enquirer');
const fse = require('fs-extra');
const files = require('../lib/files');
const cmds = require("../lib/cmds");

const promptNonSetValues = async function(argv) {

  if (argv.assumeyes) {
    return {
      mongoose: true,
      sequelize: true,
      shield: true,
      git: true
    };
  }

  if (argv.assumeno) {
    return {
      mongoose: false,
      sequelize: false,
      shield: false,
      git: false
    };
  }

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
  if (typeof argv.git === 'undefined') {
    Object.assign(result, await prompt({
      type: 'confirm',
      name: 'git',
      message: 'Do we init a git repository for you?'
    }));
  }
  return result;
}

exports.command = "init <projectName> [mongoose] [sequelize] [shield] [git] [assumeyes] [assumeno]";
exports.desc =
  "Initializes a new backend project based on uStart framework";
exports.builder = yargs =>
  yargs
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
  .positional("git", {
    describe: "Set to init the project as a git repository",
    type: "boolean"
  })
  .positional("assumeyes", {
    describe: "Assume yes; assume that the answer to any question which would be asked is yes",
    alias: "y",
    type: "boolean"
  })
  .positional("assumeno", {
    describe: "Assume no; assume that the answer to any question which would be asked is no",
    alias: "n",
    type: "boolean"
  })
  .middleware(promptNonSetValues)
  .argv;
exports.handler = function(argv) {
  const fullPath = path.join(process.cwd(), argv.projectName);
  const parsedPath = path.parse(fullPath);

  if (parsedPath.ext !== '') {
    throw new Error('Project name cannot contain an extension');
  }

  fse.ensureDirSync(fullPath);
  files.createPackageJson(fullPath, parsedPath.name);

  const options = { stdio: 'inherit', cwd: fullPath };

  if (argv.git) {
    execSync('git init .', options);
  }

  execSync('npm install', options);
  if (argv.mongoose) {
    execSync('npm install mongoose', options);
  }
  if (argv.sequelize) {
    execSync(cmds.installAllSequelize, options);
  }
  if (argv.shield) {
    execSync('npm install graphql-shield', options);
  }

  fse.copySync(
    path.join(fullPath, 'node_modules/ustart-scripts/template'),
    path.join(fullPath, '/')
  );
  fse.moveSync(
    path.join(fullPath, 'gitignore'),
    path.join(fullPath, '.gitignore')
  );
  fse.moveSync(
    path.join(fullPath, 'env'),
    path.join(fullPath, '.env')
  );
  fse.moveSync(
    path.join(fullPath, 'dockerignore'),
    path.join(fullPath, '.dockerignore')
  );
};
