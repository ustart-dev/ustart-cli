# CHANGELOG

This is the log of notable changes to the ustart-cli package.

----

## master

### 🛠 Breaking changes

### 🎉 New features

### 🐛 Bug fixes

## 2.0

### 🛠 Breaking changes

- Updated jest to v23.6.0

### 🎉 New features

- Added "concurrently" package to NPM scripts for improving development process, ustart package will only load code from dist folder and babel-node was replaced with babel watch
- Added migrate and auto generate migration commands. Auto-generate uses our forked package [@ustart/sequelize-auto-migrations](https://www.npmjs.com/package/@ustart/sequelize-auto-migrations)
- Added "ustart-script" in replace for "ustart" package for initialize a new project
- Added LICENSE, COLLABORATORS and CHANGELOG files

### 🐛 Bug fixes

- Added "files" entry to package.json because ".git" folder were being packed
- Added build step into auto generate migration command
- Added "config" and "migrations" folder to packing list (files entry at package.json)

## 1.1.1

- Fix: Missing "files" entry into package.json.

## 1.1.0

- Implemented the "build" command.
- Added homepage, bugs and repository entries to package.json.

## 1.0.0

- Not documented
