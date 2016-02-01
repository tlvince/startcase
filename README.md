# startcase

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/startcase
[travis-image]: https://img.shields.io/travis/tlvince/startcase.svg
[npm-url]: https://www.npmjs.com/package/startcase
[npm-image]: https://img.shields.io/npm/v/startcase.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/startcase.svg

> Convert a string to start case

Like [lodash.startCase][], but:

* Preserves diacritical marks (*does not* deburr)
* Does not treat `/` as a word delimiter
* Preserves Roman numerals

[lodash.startCase]: https://lodash.com/docs#startCase

## Installation

```shell
npm install --save startcase
```

## Usage

```js
var startCase = require('startcase')
startCase('hello henry IV/world')
// => 'Hello Henry IV/World'
```

## Author

© 2016 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
