var path = require('path')
var inject = require(path.join(__dirname, '../inject.js'))

module.exports = function (payload, callback) {
  var options = require(path.join(__dirname, '../defaults.json'))
  var link = options.protocol + '://' + options.hostname + options.api_verion + 'projects/' +
      payload.namespace + '%2F' + payload.project

  inject.get(payload, link, function (res, err) {
    if (err) {
      callback(err, res)
    } else {
      payload.projectId = res.body.id
      callback(err, payload)
    }
  })
}
