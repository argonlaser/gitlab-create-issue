var path = require('path')
var async = require('async')
var merge = require('merge')

var getProjectId = require(path.join(__dirname, 'get', 'getProjectId.js'))
var getAssigneeId = require(path.join(__dirname, 'get', 'getAssigneeId.js'))
var postIssue = require(path.join(__dirname, 'post', 'postIssue.js'))
var validatePayload = require(path.join(__dirname, 'validate.js'))

var createIssue = function (mandatoryPayload, optionalPayload, callback) {
  var totalPayload = merge(mandatoryPayload, optionalPayload)
  var validatePayloadWrapper = function (callback) {
    callback(null, totalPayload)
  }

  async.waterfall(
    [
      validatePayloadWrapper,
      validatePayload,
      getProjectId,
      getAssigneeId,
      postIssue
    ], function (err, res) {
    callback(err, res)
  })
}

var mPayload = {namespace: 'argonlaser', project: 'bingo-game', PRIVATE_TOKEN: '_ezW6eVjoUZd5aqgvJix', title: 'magilchi'}
var oPayload = {}
createIssue(mPayload, oPayload, function (err, res) {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
  }
})
