var superagent = require('superagent')

var post = function (payload, endpoint, callback) {
  superagent
    .post(endpoint)
    .send(payload)
    .set('PRIVATE-TOKEN', payload.PRIVATE_TOKEN)
    .end(function (err, res) {
      // Calling the end function will send the request
      callback(res, err)
    })
}

var get = function (payload, endpoint, callback) {
  superagent
    .get(endpoint)
    .set('PRIVATE-TOKEN', payload.PRIVATE_TOKEN)
    .end(function (err, res) {
      // Calling the end function will send the request
      callback(res, err)
    })
}

module.exports =
{
  post: post,
  get: get
}
