module.exports = {
  packageJson: (dirName) => {
    const j =
`
{
  "name": "${dirName}",
  "version": "1.0.0",
  "description": "",
  "keywords": [],
  "author": "uStart - ustart.dev",
  "dependencies": {
    "app-root-path": "^2.1.0",
    "casual": "^1.5.19",
    "compression": "^1.7.2",
    "ustart": "file:../ustart-1.0.0.tgz"
    "mongoose": "^5.4.19",
    "sequelize": "^5.1.0",
  },
  "scripts": {
    "clean": "rm -rf dist",
    "build:dev": "npm run clean && babel src -d dist --copy-files",
    "build": "npm run clean && babel --copy-files --no-comments --minified src -d dist",
    "start": "nodemon ./node_modules/ustart/dist/scripts/ustart-entry.js --exec babel-node",
    "serve": "node ./node_modules/ustart/dist/scripts/ustart-entry.js",
    "test": "jest"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-stage-3": "^6.24.1",
    "graphql-request": "^1.6.0",
    "jest": "^22.4.3",
    "nodemon": "^1.17.2"
  },
  "nodemonConfig": {
    "ignore": [
      "dist",
      "__tests__",
      "*.test.js",
      "tests/*.test.js",
      "tests/**/*.test.js"
    ]
  },
  "jest": {
    "verbose": true,
    "testURL": "http://localhost/",
    "testMatch": [
      "**/__tests__/**/(*.)+(spec|test).[jt]s?(x)",
      "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
    "setupFiles": [
      "./config/jestSetup.js"
    ],
    "testEnvironment": "node"
  }
}
`;
    return j;
  }
};
