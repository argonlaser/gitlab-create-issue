var assert = require('assert')
var path = require('path')

describe('Post Issue', function () {
  it('#should post issue in that particular project', function (done) {
    this.timeout(25000)
    var createIssue = require(path.join(__dirname, '../lib', 'createIssue.js'))
    var mPayload = {namespace: 'argonlaser', project: 'gitlab-create-issue-test', privateToken: process.env.privateToken, title: 'magilchi'}
    var oPayload = {assignee_name: 'argonlaser', due_date: '2018-11-11'}

    createIssue(mPayload, oPayload, function (err, res) {
      if (err) {
        done(err)
      } else {
        res || assert(res.statusCode, 201)
        done()
      }
    })
  })

  it('#should not post issue in that particular project', function (done) {
    this.timeout(25000)
    var createIssue = require(path.join(__dirname, '../lib', 'createIssue.js'))
    var mPayload = {namespace: 'argonlaser', project: 'gitlab-create-issue-test', privateToken: process.env.privateToken}
    var oPayload = {assignee_name: 'argonlaser', due_date: '2018-11-11'}

    createIssue(mPayload, oPayload, function (err, res) {
      if (err) {
        res || assert(res.statusCode, 400)
        done()
      } else {
        done(err)
      }
    })
  })
})
