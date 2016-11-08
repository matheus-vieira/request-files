[![Build Status](https://travis-ci.org/matheus-vieira/request-files.svg?branch=master)](https://travis-ci.org/matheus-vieira/request-files)
[![Coverage Status](https://coveralls.io/repos/github/matheus-vieira/request-files/badge.svg?branch=master)](https://coveralls.io/github/matheus-vieira/request-files?branch=master)

# request-files
A simple way to request single and multiple files


## Synopsis

This is a simple way yo request single or multiple file in your node project.

## Code Example

```javascript
const requestFiles = require('request-files');
consta fileList = [];

requestFiles('./**/*_some.js', (f) => fileList.push(f));
```

## Motivation

In a project I need to create several assignment to an object, but as the project grow this assignmento to the objet will have several files. In order to increase the project maintenance.

## Installation

`npm install @mvieira/request-files`


## Tests

Just run test with

`npm test`

## Contributors

At this time I am the only maintener of this project, if you see any improvement or bug fell free to create an issue or a pull request

## License

MIT: [http://rem.mit-license.org](http://rem.mit-license.org)