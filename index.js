// ------------------------------------
// #POSTHTML - KOA
// ------------------------------------

'use strict'

var fs = require('co-fs')
var path = require('path')
var copy = require('copy-to')

var posthtml = require('posthtml')

var defaults = {
  ext: 'html',
  cache: true,
  layout: 'layout',
  plugins: [],
  debug: false,
  writeResp: true
}

exports = module.exports = function (app, settings) {
  if (app.context.render) {
    return
  }

  if (!settings || !settings.root) {
    throw new Error('settings.root required')
  }

  settings.root = path.resolve(process.cwd(), settings.root)

  var cache = Object.create(null)

  copy(defaults).to(settings)

  settings.ext = settings.ext ? '.' + settings.ext.replace(/^\./, '') : ''

  function * render (view, options) {
    view += settings.ext

    var path = path.join(settings.root, view)
    // get from cache
    if (settings.cache && cache[path]) {
      return cache[path].call(options.scope, options)
    }

    var source = yield fs.readFile(path, 'utf8')
    var plugins = settings.plugins || []
    var fn =
    posthtml(plugins)
      .process(source.toString())
      .then(result => result.html)

    if (settings.cache) {
      cache[path] = fn
    }

    return fn.call(options.scope, options)
  }

  app.context.render = function *(view, _context) {
    var context = {}
    merge(context, this.state)
    merge(context, _context)

    var html = yield * render(view, context)

    var layout = context.layout === false ? false : (context.layout || settings.layout)
    if (layout) {
      // if using layout
      context.body = html
      html = yield * render(layout, context)

      var writeResp = context.writeResp === false ? false : (context.writeResp || settings.writeResp)
      if (writeResp) {
        // normal operation
        this.type = 'html'
        this.body = html
      } else {
        // only return the html
        return html
      }
    }
  }

  function merge (target, source) {
    for (var key in source) {
      target[key] = source[key]
    }
  }
}
