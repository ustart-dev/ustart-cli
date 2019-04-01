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
    "ustart": "/Users/leo/Repositories/ustart-cloud/ustart",
    "apollo-engine": "^1.0.2",
    "apollo-errors": "^1.8.0",
    "app-root-path": "^2.1.0",
    "bcrypt-nodejs": "^0.0.3",
    "body-parser": "^1.18.2",
    "casual": "^1.5.19",
    "compression": "^1.7.2",
    "graphql-shield": "^5.1.0",
    "graphql-yoga": "^1.6.0",
    "jsonwebtoken": "^8.2.1",
    "lodash": "^4.17.5",
    "merge-graphql-schemas": "^1.5.8",
    "moment": "^2.22.2",
    "mongoose": "^5.4.19",
    "nodemailer": "^4.6.5",
    "pg": "^7.4.1",
    "pg-hstore": "^2.3.2",
    "rand-token": "^0.4.0",
    "rutjs": "^0.1.1",
    "sequelize": "^5.1.0",
    "sequelize-cli": "^5.4.0"
  },
  "scripts": {
    "start": "nodemon ./node_modules/ustart/dist/scripts/ustart-entry.js --exec babel-node",
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
