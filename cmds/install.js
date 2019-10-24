const execSync = require('child_process').execSync;
const cmds = require("../lib/cmds");

exports.command = "install [package]";
exports.desc =
  "Installs a package that extends ustart features.";
exports.builder = yargs =>
  yargs
  .positional("package", {
    describe: "Package name",
    type: "string",
    choices: ["sequelize", "mongoose"]
  })
  .argv;
exports.handler = function(argv) {
  if (argv.package === "sequelize") {
    execSync(`${cmds.installAllSequelize}`, { stdio: 'inherit' });
  } else if (argv.package === "mongoose") {
    execSync(`npm install mongoose`, { stdio: 'inherit' });
  }
};
