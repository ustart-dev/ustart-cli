/**
Command:
  $ ustart build [options]
     1.- Clean dist folder
     2.- Build the sources into dist

TODO: At the moment this commands is just a wrapper of npm run command.
It is the same to call "ustart build" and "npm run build".
It was implemented for future use, in next releases they behavior will be different.
*/
const path = require('path');
const cmds = require('../lib/cmds');
const execSync = require('child_process').execSync;

exports.command = 'build';
exports.desc = 'Builds the current project into \'dist\' folder';
exports.handler = function (argv) {
  if (argv.dev) {
    execSync(`${cmds.npmRun} build:dev`, { stdio: 'inherit' });
  } else {
    execSync(`${cmds.npmRun} build`, { stdio: 'inherit' });
  }
};
