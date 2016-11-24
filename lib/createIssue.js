var path = require('path')
var async = require('async')
var merge = require('merge')

var getProjectId = require('./get/getProjectId.js')
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

module.exports = createIssue
