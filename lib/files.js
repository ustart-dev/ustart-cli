const path = require('path');
const fs = require('fs');
const utils = require('./utils');

module.exports = {
  createFolder: (dir) => {
    try {
      fs.mkdirSync(dir, { recursive: true });
    } catch (err) {
      if (err.code !== 'EEXIST') throw err;
    }
  },
  createPackageJson: (dir, projectName) => {
    const p = path.join(dir, 'package.json');
    try {
      fs.writeFileSync(p, utils.packageJson(projectName), { flag: 'wx'});
    } catch (err) {
      if (err.code === 'EEXIST') {
        throw new Error('A package.json already exists. ustart needs a new or an empty folder.');
      }
      throw err;
    }
  }
};
