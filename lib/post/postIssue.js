var path = require('path')
var inject = require(path.join(__dirname, '../inject.js'))

module.exports = function (payload, callback) {
  var options = require(path.join(__dirname, '../defaults.json'))
  var link = options.protocol + '://' + options.hostname +
      options.api_verion + 'projects/' + payload.projectId +
          '/issues'

  inject.post(payload, link, function (res, err) {
    callback(err, res)
  })
}
