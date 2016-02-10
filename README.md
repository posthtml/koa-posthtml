# [PostHTML](https://github.com/posthtml/posthtml)
View Engine for [koa](koajs.com)

[PostHTML Plugins Catalog](https://maltsev.github.io/posthtml-plugins/)

# Install

```bash

(sudo) npm i -S koa-posthtml
```

# Usage

```javascript

var koa = require('koa')
var posthtml = require('koa-posthtml')

var app = koa()

posthtml(app, {
  ext: 'html',
  root: path.join(__dirname, 'views'),
  plugins: [ PostHTML Plugins ]
  cache: false,
  debug: true
})

app.use(function *() {
  yield this.render('file')
});

app.listen(3000)
```
