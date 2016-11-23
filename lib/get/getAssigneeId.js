var path = require('path')
var inject = require(path.join(__dirname, '../inject.js'))

module.exports = function (payload, callback) {
  if (payload.assignee_name === undefined) {
    callback(null, payload)
    return
  }
  var options = require(path.join(__dirname, '../defaults.json'))
  var link = options.protocol + '://' + options.hostname +
    options.api_verion + 'users/username=' + payload.assignee_name

  inject.get(payload, link, function (res, err) {
    if (err) {
      callback(err, res)
    } else {
      if (res.body.length === 1) {
        callback(err, res.body[0].id)
      } else {
        callback(err, null)
      }
    }
  })
}
