// ------------------------------------
// #KOA - POSTHTML
// ------------------------------------

'use strict'

const fs = require('co-fs')
const path = require('path')
const copy = require('copy-to')

const posthtml = require('posthtml')

const defaults = {
  ext: 'html',
  options: {sync: true},
  plugins: [],
  writeResp: true
}

exports = module.exports = function (app, settings) {
  if (app.context.render) {
    return
  }

  if (!settings || !settings.root) {
    throw new Error('settings.root is required')
  }

  settings.root = path.resolve(process.cwd(), settings.root)

  copy(defaults).to(settings)

  settings.ext = settings.ext ? '.' + settings.ext.replace(/^\./, '') : ''

  function * render (view, options) {
    view += settings.ext

    const viewPath = path.join(settings.root, view)

    const source = yield fs.readFile(viewPath, 'utf8')

    options = settings.options || {}
    const plugins = settings.plugins || []

    if (options.sync) {
      return posthtml(plugins)
        .process(source, options)
        .html
    } else {
      return posthtml(plugins)
        .process(source, options)
        .then((result) => result.html)
    }
  }

  app.context.render = function * (view, options) {
    const html = yield * render(view, options)

    if (settings.writeResp) {
      // send response
      this.type = 'html'
      this.body = html
    } else {
      // only return the html
      return html
    }
  }
}
