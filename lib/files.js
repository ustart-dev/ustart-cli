const fs = require('fs');
const utils = require('./utils');

module.exports = {
  // createADirectoryIfNotExists: (dir) => {
  //   try {
  //     fs.mkdirSync(`./${dir}`);
  //   } catch (err) {
  //     if (err.code !== 'EEXIST') throw err;
  //   }
  // },
  createPackageJson: (dir, dirName) => {
    try {
      fs.writeFileSync(`${dir}package.json`, utils.packageJson(dirName), { flag: 'wx'});
    } catch (err) {
      if (err.code === 'EEXIST') {
        throw new Error('A package.json already exists. ustart needs a new or an empty folder.');
      }
      throw err;
    }
  }
};
