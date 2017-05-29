<p align="center">
  <img src="http://i.imgur.com/jgHKoGM.png" width="300" height="300" alt="sprint">
  <br>
  <a href="https://www.npmjs.org/package/sprintjs"><img src="https://img.shields.io/npm/v/sprintjs.svg?style=flat" alt="npm"></a>
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
```html
<script>
  var Sprint = new sprint(
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

## Examples & Demos
 - [Demo](demo) - Check demo folder and start with some http service, for correct operation.

## API
Sprint's big proposition is to provide a familiar API and simple to implement on any static website.

### `sprint(options: Object)`
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
