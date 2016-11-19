var superagent = require('superagent')
var path = require('path')

module.exports = function (opts, callback) {
  var options = require(path.join('__dirname', '../defaults.json'))
  var link = options.protocol + '://' + options.hostname +
    options.api_verion + 'users/username=' + opts.username

  inject.get(projectSlug, link, function (res, err) {
    if (err) {
      callback(undefined, err)
    } else {
      if (res.body.length === 1)
          { callback(res.body[0].id, err) }
      else
          { callback(undefined, err) }
    }
  })
}
