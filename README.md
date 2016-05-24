[![NPM][npm]][npm-url]
[![Node][node]][node-url]
[![Dependencies][deps]][deps-url]
[![DevDependencies][devdeps]][devdeps-url]
[![Standard Code Style][style]][style-url]

<div align="center">
    <img width="150" height="150" title="Express" src="https://camo.githubusercontent.com/674563115c4e0d4e5d99440b916952ad795c498e/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f752f363339363931332f6b6f612f6c6f676f2e706e67">
    <img width="125" height="150" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">
</div>

## Install

```bash
$ npm i -S koa-posthtml
```

## Usage

```js
'use strict'

const path = require('path')

const koa = require('koa')
const posthtml = require('koa-posthtml')

let app = koa()

// Setup PostHTML View Engine
posthtml(app, {
  ext: 'html',
  root: path.join(__dirname, 'views'),
  options: {/* PostHTML Options */},
  plugins: [/* PostHTML Plugins */]
  writeResp: true
})

app.use(function * () {
  // Render index.html
  yield this.render('index')
})

app.on('error', function (err) {
  console.error('=> Server error', err)
})

app.listen(3000, () => {
  console.log('=> Server started')
})
```

> MIT License (MIT)

> Copyright (c) 2016 Michael Ciniawsky

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm]: https://img.shields.io/npm/v/koa-posthtml.svg
[npm-url]: https://npmjs.com/package/koa-posthtml

[node]: https://img.shields.io/node/v/gh-badges.svg?maxAge=2592000
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/posthtml/koa-posthtml.svg
[deps-url]: https://david-dm.org/posthtml/koa-posthtml

[devdeps]: https://david-dm.org/posthtml/koa-posthtml/dev-status.svg
[devdeps-url]: https://david-dm.org/posthtml/koa-posthtml#info=devDependencies

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/posthtml/koa-posthtml.svg
[travis-url]: https://travis-ci.org/posthtml/koa-posthtml

[travis-rel]: http://img.shields.io/travis/posthtml/koa-posthtml.svg?branch=release/1.0.0
[travis-rel-url]:https://travis-ci.org/posthtml/koa-posthtml?branch=release/1.0.0

[travis-dev]: http://img.shields.io/travis/posthtml/koa-posthtml.svg?branch=develop
[travis-dev-url]: https://travis-ci.org/posthtml/koa-posthtml?branch=develop

[cover]: https://coveralls.io/repos/github/posthtml/koa-posthtml/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/koa-posthtml?branch=master

[cover-rel]: https://coveralls.io/repos/github/posthtml/koa-posthtml/badge.svg?branch=release/1.0.0
[cover-rel-url]: https://coveralls.io/github/posthtml/koa-posthtml?branch=release/1.0.0

[cover-dev]: https://coveralls.io/repos/github/posthtml/koa-posthtml/badge.svg?branch=develop
[cover-dev-url]: https://coveralls.io/github/posthtml/koa-posthtml?branch=develop

[license]: https://img.shields.io/github/license/posthtml/koa-posthtml.svg
[license-url]: https://raw.githubusercontent.com/posthtml/koa-posthtml/master/LICENSE
