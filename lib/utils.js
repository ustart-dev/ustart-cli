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
    "test": "jest",
    "format": "prettier-standard 'src/**/*.js' '__tests__/**/*.js'"
  },
  "lint-staged": {
    "linters": {
      "**/*.js": [
        "prettier-standard",
        "git add"
      ]
    }
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm run format"
    }
  },
  "files": [
    "config",
    "dist",
    "migrations"
  ],
  "dependencies": {
    "ustart": "^2.0.0",
    "ustart-cli": "^2.0.0",
    "ustart-scripts": "^2.0.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.0.0",
    "@babel/core": "^7.0.0",
    "@babel/plugin-proposal-class-properties": "^7.0.0",
    "@babel/plugin-proposal-json-strings": "^7.0.0",
    "@babel/plugin-syntax-dynamic-import": "^7.0.0",
    "@babel/plugin-syntax-import-meta": "^7.0.0",
    "@babel/preset-env": "^7.0.0",
    "babel-core": "^7.0.0-bridge.0",
    "babel-jest": "^23.4.2",
    "concurrently": "^4.1.2",
    "graphql-request": "^1.8.2",
    "husky": "^3.0.9",
    "jest": "^23.6.0",
    "lint-staged": "^9.4.2",
    "nodemon": "^1.19.1",
    "prettier-standard": "^15.0.1"
  },
  "nodemonConfig": {
    "ignore": [
      "src",
      "__tests__",
      "*.test.js",
      "tests/*.test.js",
      "tests/**/*.test.js"
    ],
    "watch": ["dist","config"],
    "ext": "js,mjs,json,graphql,gql"
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
