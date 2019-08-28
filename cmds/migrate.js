const path = require("path");
const { ustart, loadDatasources } = require("ustart");
const execSync = require("child_process").execSync;
const cmds = require("../lib/cmds");

exports.command = "db:migrate";
exports.desc = "Run pending migrations";
exports.handler = function(argv) {
  loadDatasources();

  const migration = ustart.getMigration();
  if (!migration) {
    console.log("There is no migration enabled in your project.");
    process.exit(0);
  }

  execSync(
    `${cmds.sequelize} db:migrate --url '${migration.uri}'`,
    { stdio: 'inherit' }
  );
};
