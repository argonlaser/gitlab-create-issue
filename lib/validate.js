var _ = require('underscore')

/* Mandatory Payload
 * ====================
 * namespace: 'wordist'
 * project: 'product'
 * PRIVATE_TOKEN: 'xxxxxxx'
 * title: 'magilchi'
 */

 /* Optional payload
  * ===================
  * description
  * confidential
  * assignee_name / assignee_id
  * milestone_name / milestone_id
  * labels
  * due_date
  */
var _isValidDate = function (dateString) {
  var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(dateString)
  if (matches == null) return false
  var d = matches[2]
  var m = matches[1] - 1
  var y = matches[3]
  var composedDate = new Date(y, m, d)
  return composedDate.getDate() === d &&
          composedDate.getMonth() === m &&
          composedDate.getFullYear() === y
}

var validatePayload = function (payload, callback) {
  console.log(payload)
  if (!_.isObject(payload)) {
    callback(new TypeError('invalid input argument. Options argument must be an object. Value: `' + payload + '`.'), null)
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

  if (payload.assignee_name !== undefined && !_.isString(payload.assignee_name)) {
    callback(new TypeError('invalid option. `assignee_name` option must be a string primitive. Option: `' + payload.assignee_name + '`.'), null)
  }

  if (payload.description !== undefined && !_.isString(payload.description)) {
    callback(new TypeError('invalid option. `description` option must be a string primitive. Option: `' + payload.description + '`.'), null)
  }

  if (payload.labels !== undefined && !_.isArray(payload.labels)) {
    callback(new TypeError('invalid option. `labels` option must be a string array. Option: `' + payload.labels + '`.'), null)
  }

  if (payload.due_date !== undefined && !_isValidDate(payload.due_date)) {
    callback(new TypeError('invalid option. `due_date` option must be a string date. Option: `' + payload.due_date + '`.'), null)
  }
  callback(null, payload)
}

module.exports = validatePayload
