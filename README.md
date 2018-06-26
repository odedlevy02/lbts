# generator-lbts [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generator for converting loopback default created package to a typescript with autoupdate

## Installation

First, install [Yeoman](http://yeoman.io) and generator-lbts using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-lbts
```

Then generate your new project:

```bash
yo lbts
```

##About
I found [Loopback](https://loopback.io/) to be a very helpful tool when working with databases. You start off by generating a
new Node project and continue on generating datasources, models and even relations, all with the command line.

The only downside to it was that it does not generate typescript code. In addition I needed to add some basic code in order to support 
one time database migrations and also updating of the database with each execution validating that the database is always inline with the latest code.

##Usage
start off by generating a regular [loopback](http://loopback.io/getting-started/) 3.0 Node project and define a datasource. 
Then from the commnad line  run **yo lbts** that will do the rest for upgrading to typescript and adding the required code for db migration and updating      

## License

MIT License © [Oded Levy]()


[npm-image]: https://badge.fury.io/js/generator-lbts.svg
[npm-url]: https://npmjs.org/package/generator-lbts
[travis-image]: https://travis-ci.org/NA/generator-lbts.svg?branch=master
[travis-url]: https://travis-ci.org/NA/generator-lbts
[daviddm-image]: https://david-dm.org/NA/generator-lbts.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/NA/generator-lbts
