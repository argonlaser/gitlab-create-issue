var superagent = require('superagent')
var path = require('path')

module.exports = function (projectSlug, callback) {
  var options = require(path.join(__dirname, '../defaults.json'))
  var link = options.protocol + ':/' + '/' + options.hostname + options.api_verion + 'projects/' + projectSlug.namespace + '%2F' + projectSlug.project

  superagent
  .get(link)
  .set('PRIVATE-TOKEN', projectSlug.PRIVATE_TOKEN)
  .end(function (err, res) {
    // Calling the end function will send the request
    console.log(err + ' ' + res)
    if (err) {
      callback(undefined, err)
    } else {
      callback(res.body.id, err)
    }
  })
}
