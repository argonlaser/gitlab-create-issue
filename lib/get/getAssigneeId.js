var path = require('path')
var inject = require(path.join(__dirname, '../inject.js'))

module.exports = function (payload, callback) {
  if (payload.assigneeName === undefined && payload.assigneeId === undefined) {
    callback(null, payload)
    return
  }
  var options = require(path.join(__dirname, '../defaults.json'))
  var link = options.protocol + '://' + options.hostname +
    options.api_verion + 'projects/' + payload.projectId + '/members?query=' + payload.assigneeName
  inject.get(payload, link, function (res, err) {
    if (err) {
      callback(err, res)
    } else {
      if (res.body.length === 1) {
        payload.assignee_id = res.body[0].id
        callback(err, payload)
      } else {
        callback(err, null)
      }
    }
  })
}
