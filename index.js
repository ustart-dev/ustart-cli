#!/usr/bin/env node

const argv = require('yargs')
  .commandDir('cmds')
  .demandCommand()
  .help()
  .epilogue('for more information, find our manual at https://ustart.dev')
  .argv;
