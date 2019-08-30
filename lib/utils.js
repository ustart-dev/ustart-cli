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
  "scripts": {
    "clean": "rm -rf dist",
    "build:dev": "npm run clean && babel src -d dist --copy-files --quiet",
    "build": "npm run clean && babel --copy-files --no-comments --minified src -d dist",
    "watch-src": "babel --watch src -d dist --copy-files --skip-initial-build --quiet",
    "watch-node": "nodemon ./node_modules/ustart-scripts/dist/scripts/ustart-entry.js",
    "start": "npm run build:dev && concurrently --raw --kill-others \\"npm run watch-src\\" \\"npm run watch-node\\"",
    "serve": "node ./node_modules/ustart-scripts/dist/scripts/ustart-entry.js",
    "test": "jest"
  },
  "files": [
    "config",
    "dist",
    "migrations"
  ],
  "dependencies": {
    "ustart": "^2.0.0-alpha.0",
    "ustart-cli": "^2.0.0-alpha.0",
    "ustart-scripts": "^2.0.0-alpha.0"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-stage-3": "^6.24.1",
    "concurrently": "^4.1.2",
    "graphql-request": "^1.8.2",
    "jest": "^22.4.3",
    "nodemon": "^1.19.1"
  },
  "nodemonConfig": {
    "ignore": [
      "src",
      "__tests__",
      "*.test.js",
      "tests/*.test.js",
      "tests/**/*.test.js"
    ],
    "watch": "dist"
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
