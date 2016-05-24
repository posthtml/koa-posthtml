'use strict'

const path = require('path')

const posthtml = require('../index')
const plugin = require('posthtml-bem')

const koa = require('koa')

let app = koa()

posthtml(app, {
  ext: 'html',
  root: path.join(__dirname, 'public', 'views'),
  options: {sync: true},
  plugins: [ plugin() ]
})

app.use(function * () {
  yield this.render('index')
})

app.on('error', function (err) {
  console.error('=> Server error', err)
})

app.listen(3000, () => {
  console.log('=> Server started')
})
