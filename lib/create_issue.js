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
          callback(response)
        }
      })
    }
  })
}

createIssue({namespace: 'wordist', project: 'product', PRIVATE_TOKEN: 'kxy5EHjj2Gn2NQ-y24sw', title: 'magilchi'}, 'asda', {}, function () {
  console.log('asjdnk')
})
