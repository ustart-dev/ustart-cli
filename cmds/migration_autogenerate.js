const path = require("path");
const execSync = require("child_process").execSync;
const cmds = require("../lib/cmds");

exports.command = "migration:autogenerate";
exports.desc =
  "Autogenerates a migration based on the models' difference from the last run of this command";
exports.builder = yargs =>
  yargs.option("name", {
    describe: "Defines the name of the migration",
    type: "string",
    demandOption: true
  }).argv;
exports.handler = function(argv) {
  execSync(
    `${cmds.sequelizeAutoMigration} --ustart-models --name "${argv.name}"`,
    { stdio: 'inherit' }
  );
};
