var _ = require('underscore')

var validateOptions = function (opts, callback) {
  if (_.isObject(opts)) {
    callback(new TypeError('invalid input argument. Options argument must be an object. Value: `' + options + '`.'))
  }
  if (options.hasOwnProperty('body')) {
    opts.body = options.body
    if (!isString(opts.body)) {
      return new TypeError('invalid option. `body` option must be a string primitive. Option: `' + opts.body + '`.')
    }
  }
  if (options.hasOwnProperty('assignee')) {
    opts.assignee = options.assignee
    if (!isString(opts.assignee)) {
      return new TypeError('invalid option. `assignee` option must be a string primitive. Option: `' + opts.assignee + '`.')
    }
  }
  if (options.hasOwnProperty('milestone')) {
    opts.milestone = options.milestone
    if (!isPositiveInteger(opts.milestone)) {
      return new TypeError('invalid option. `milestone` option must be a positive integer. Option: `' + opts.milestone + '`.')
    }
  }
  if (options.hasOwnProperty('labels')) {
    opts.labels = options.labels
    if (!isStringArray(opts.labels)) {
      return new TypeError('invalid option. `labels` option must be a string array. Option: `' + opts.labels + '`.')
    }
  }
  if (options.hasOwnProperty('useragent')) {
    opts.useragent = options.useragent
    if (!isString(opts.useragent)) {
      return new TypeError('invalid option. `useragent` option must be a string primitive. Option: `' + opts.useragent + '`.')
    }
  }
  return null
}

module.exports = validateOptions
