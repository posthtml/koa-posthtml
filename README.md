[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][build]][build-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][style]][style-url]
[![Chat][chat]][chat-badge]

# Koa PostHTML <img align="right" width="200" height="220" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">

## Install

```bash
npm i -S koa-posthtml
```

## Usage

```js
'use strict'

import { join } from 'path'

import koa from 'koa'
import posthtml from 'koa-posthtml'

const app = koa()

// Setup View Engine
posthtml(app, {
  ext: 'html',
  root: join(__dirname, 'views'),
  options: {/* Options */},
  plugins: [/* Plugins */]
  writeResp: true
})

app.use(function * () {
  // Render index.html
  yield this.render('index')
})

app.on('error', (err) => console.error('=> Server error', err))

app.listen(3000, () => console.log('=> Server started'))
```

## Maintainers

<table>
  <tbody>
   <tr>
    <td align="center">
      <img width="150 height="150"
      src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
      <br />
      <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>
    </td>
   </tr>
  <tbody>
</table>

## Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [contribution guide](CONTRIBUTING.md).

## LICENSE

[npm]: https://img.shields.io/npm/v/koa-posthtml.svg
[npm-url]: https://npmjs.com/package/koa-posthtml

[deps]: https://david-dm.org/posthtml/koa-posthtml.svg
[deps-url]: https://david-dm.org/posthtml/koa-posthtml

[build]: http://img.shields.io/travis/posthtml/koa-posthtml.svg
[build-url]: https://travis-ci.org/posthtml/koa-posthtml

[cover]: https://coveralls.io/repos/github/posthtml/koa-posthtml/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/koa-posthtml?branch=master

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-badge]: https://gitter.im/posthtml/posthtml?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
