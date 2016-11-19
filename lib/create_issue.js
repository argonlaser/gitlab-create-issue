var path = require('path')
var getProjectId = require(path.join(__dirname, 'get', 'getProjectId.js'))
var postIssue = require(path.join(__dirname, 'post', 'postIssue.js'))

var createIssue = function (projectSlug, title, options, callback) {
  getProjectId(projectSlug, function (projectId, err) {
    if (err) {
      console.error(err)
    } else {
      projectSlug.projectId = projectId
      postIssue(projectSlug, function (response, err) {
        if (err) {
          console.error(err)
        } else {
          console.log(response)
          callback(response)
        }
      })
    }
  })
}

createIssue({namespace: 'wordist', project: 'product', PRIVATE_TOKEN: '', title : 'magilchi'}, 'asda', {}, function () {
  console.log('asjdnk')
})
