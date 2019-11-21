# ustart-cli

The uStart CLI. See the docs: https://ustart.dev/docs/installation.

## Getting started

Start a new project is easy with *ustart-cli*:

```
$ npx ustart-cli init MyNewProject
$ cd MyNewProject && npm start
```

## Usage

*init* command usage:

```
$ npx ustart-cli init [project-name] [--mongoose | --no-mongoose] [--sequelize | --no-sequelize] [--shield | --no-shield] [--git | --no-git] [--assumeyes, --y] [--assumeno, --n]
```

After initialize a project using *init* command, the cli will be available locally:

```
$ npx ustart --help
$ npx ustart --version
$ npx ustart build [options]
$ npx ustart db:migrate
$ npx ustart migration:autogenerate --name "migration-name"
```
