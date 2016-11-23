var path = require('path')
var superagent = require('superagent')

module.exports = function (opts, callback) {
  var options = require(path.join(__dirname, '../defaults.json'))
  var link = options.protocol + '://' + options.hostname +
    options.api_verion + 'users/username=' + opts.username

  superagent
  .get(link)
  .set('PRIVATE-TOKEN', opts.PRIVATE_TOKEN)
  .end(function (err, res) {
    // Calling the end function will send the request
    if (err) {
      callback(undefined, err)
    } else {
      callback(res.body[0].id, err)
    }
  })
}
