var superagent = require('superagent')
var path = require('path')

module.exports = function (opts, callback) {
  var options = require(path.join(__dirname, '../defaults.json'))
  opts.PRIVATE_TOKEN = 'tt54_ssJxowm3Ma69i2E'
  var link = options.protocol + ':/' + '/' + options.hostname + options.api_verion + 'users/username=' + opts.username

  superagent
  .get(link)
  .set('PRIVATE-TOKEN', opts.PRIVATE_TOKEN)
  .end(function (err, res) {
    // Calling the end function will send the request
    console.log(err + ' ' + res)
    if (err) {
      callback(undefined, err)
    } else {
      callback(res.body[0].id, err)
    }
  })
}
