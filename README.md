<p align="center">
  <img src="http://i.imgur.com/jgHKoGM.png" width="300" height="300" alt="sprint">
  <br>
  <a href="https://www.npmjs.org/package/sprintjs"><img src="https://img.shields.io/npm/v/sprintjs.svg?style=flat" alt="npm"></a>
  <a href="https://travis-ci.org/matuzalemsteles/sprint"><img src="https://travis-ci.org/matuzalemsteles/sprint.svg?branch=master" alt="Build Status"></a>
  <a href='https://coveralls.io/github/matuzalemsteles/sprint?branch=master'><img src='https://coveralls.io/repos/github/matuzalemsteles/sprint/badge.svg?branch=master' alt='Coverage Status' /></a>
  <a href="https://unpkg.com/sprintjs/dist/sprintjs.js"><img src="http://img.badgesize.io/https://unpkg.com/sprintjs/dist/sprintjs.js?compression=gzip" alt="gzip"></a>
</p>
<p align="center">Simple SPA alternative for small web pages in <b>2</b> kB.</p>

# Sprint

- **Tiny:** under **2 kB** of [ES3](https://unpkg.com/sprintjs) gzipped

> 🤔 **What's Missing?**
> - Use container to wrap new pages.
> - Simple virtual DOM or reconciliation, call as you wish. 😁
> - Test Creation
> - Create lifecycle

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Examples & Demos](#examples--demos)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)

## Install
Install via [yarn](https://yarnpkg.com/lang/en/):

```sh
$ yarn add sprintjs
```

Install via [npm](https://www.npmjs.com/):

```sh
$ npm install --save sprintjs
```

With a bundler module as a [rollup](https://rollupjs.org/) or [webpack](https://webpack.js.org/), use:

```javascript
// using ES6 modules
import sprintjs from 'sprintjs'

// using CommonJS modules
var sprintjs = require('sprintjs')
```

The UMD build is also available on [unpkg](https://unpkg.com):

```html
<script src="//unpkg.com/sprintjs"></script>
```

## Usage
Use from HTML tag.
```html
<script>
  var Sprint = new sprintjs(
    {
      routes: [
        '*.html',
        '/site/*'
      ],
      enabled: true,
    }
  )
</script>
```
Or use Sprint package.
```javascript
import Sprint from 'sprintjs';

const engine = new Sprint({
  routes: [
    '*.html',
    '/site/*'
  ],
  enabled: true,
});
```
## Examples & Demos
 - [Demo](https://codepen.io/matuzalemteles/project/full/ZLYzkv/)

## API
Sprint's big proposition is to provide a familiar API and simple to implement on any static website.

### `sprintj(options: Object)`
Sprint contains the following properties in options:

 * `routes`: An array, routes are added to enable Sprint. Use of the `*` before or after the `/` or `.` The mechanism understands and will process anything forward.
 * `enabled`: A boolean, true, or false to activate the engine.

## Contribute

First of all, thank you for your contribution.
> Now, remember the priority is simplicity to use and size.

### Reporting Issues
Did you find a problem? Do you want a new feature? First check if your problem or idea [has been reported](../../issues).
If there is a [new question](../../issues/new), please be clear and descriptive.

> 🚨 Check issue open and closed.

### Submitting pull requests

Make sure your pull requests are within scope and that you follow the project assumptions.

> 🚨 Submit your pull solipsies with tests if necessary.

-   Fork it!
-   Clone your fork: `git clone https://github.com/<your-username>/sprint`
-   Navigate to the newly cloned directory: `cd sprint`
-   Create a new branch for the new feature: `git checkout -b new-feature`
-   Install the tools necessary for development: `yarn`
-   Make your changes.
-   `yarn run build` to verify your change doesn't increase output size.
-   Commit your changes: `git commit -am 'Add new feature'`
-   Push to the branch: `git push origin new-feature`
-   Submit a pull request with full remarks documenting your changes.

## License

[MIT License](LICENSE.md) © [Matuzalém Teles](https://matuzalemteles.com/)
