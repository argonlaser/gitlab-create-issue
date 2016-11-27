var _ = require('underscore')

/* Mandatory Payload
 * ====================
 * namespace: 'argonlaser'
 * project: 'gitlab-create-issue-test'
 * PRIVATE_TOKEN: 'xxxxxxx'
 * title: 'TITLE'
 */

 /* Optional payload
  * ===================
  * description
  * assigneeName / assigneeId
  * milestone_id
  * labels
  * due_date
  */
var _isValidDate = function (dateString) {
  var regEx = /^\d{4}-\d{2}-\d{2}$/
  return dateString.match(regEx) != null
}

var validatePayload = function (payload, callback) {
  if (!_.isObject(payload)) {
    callback(new TypeError('invalid input argument. Options argument must be an object. Value: `' + payload + '`.'), null)
  }

  if (payload.hasOwnProperty('privateToken')) {
    if (!_.isString(payload.privateToken)) {
      callback(new TypeError('invalid option. `privateToken` option must be a string primitive. Option: `' + payload.privateToken + '`.'), null)
    }
  } else {
    callback(new Error('Missing mandatoryPayload privateToken'), null)
  }

  if (payload.hasOwnProperty('namespace')) {
    if (!_.isString(payload.namespace)) {
      callback(new TypeError('invalid option. `namespace` option must be a string primitive. Option: `' + payload.namespace + '`.'), null)
    }
  } else {
    callback(new Error('Missing mandatoryPayload namespace'), null)
  }
  if (payload.hasOwnProperty('project')) {
    if (!_.isString(payload.project)) {
      callback(new TypeError('invalid option. `project` option must be a string primitive. Option: `' + payload.project + '`.'), null)
    }
  } else {
    callback(new Error('Missing mandatoryPayload project'), null)
  }

  if (!_.isUndefined(payload.assigneeId) && !_.isUndefined(payload.assigneeName)) {
    callback(new Error('invalid. Either assignee_id or assignee_name should be given not both'), null)
  }

  if (!_.isUndefined(payload.assigneeId) && !_.isNumber(payload.assigneeId)) {
    callback(new TypeError('invalid option. `assignee_id` option must be a number'), null)
  }

  if (!_.isUndefined(payload.assigneeName) && !_.isString(payload.assigneeName)) {
    callback(new TypeError('invalid option. `assignee_name` option must be a string primitive. Option: `' + payload.assignee_name + '`.'), null)
  }

  if (!_.isUndefined(payload.milestone_id) && !_.isNumber(payload.milestone_id)) {
    callback(new TypeError('invalid option. `milestone_id` option must be a number'), null)
  }

  if (!_.isUndefined(payload.description) && !_.isString(payload.description)) {
    callback(new TypeError('invalid option. `description` option must be a string primitive. Option: `' + payload.description + '`.'), null)
  }

  if (!_.isUndefined(payload.labels) && !_.isArray(payload.labels)) {
    callback(new TypeError('invalid option. `labels` option must be a string array. Option: `' + payload.labels + '`.'), null)
  }

  if (!_.isUndefined(payload.due_date) && !_isValidDate(payload.due_date)) {
    callback(new TypeError('invalid option. `due_date` option must be a string date. Option: `' + payload.due_date + '`.'), null)
  }

  callback(null, payload)
}

module.exports = validatePayload
