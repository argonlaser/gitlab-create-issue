# gitlab-create-issue
Creates gitlab issues with the given payload

[![Run Status](https://api.shippable.com/projects/58349ac0c5316610006b0615/badge?branch=master)](https://app.shippable.com/projects/58349ac0c5316610006b0615)

# Why gitlab-create-issue?
The gitlab API requires the project ID to be given as payload to create an issue.
This module finds the project ID from the project and namespace.

# Install
```bash
npm install --save gitlab-create-issue
```

# Payload
<h5>1) mandatoryPayload</h5>
```javascript
{
 namespace: 'argonlaser',
 project: 'gitlab-create-issue-test',
 privateToken: 'xxxxxxx',
 title: 'TITLE'
 }
```

<h5>2) optionalPayload</h5>
```javascript
{
  description: 'create issue',
  assigneeName: 'argonlaser' (or) assigneeId: '111111',
  labels: ['AAA', 'BBB'],
  dueDate: 'YYYY-MM-DD'
}
 ```

# Usage
```javascript
var createIssue = require('gitlab-create-issue')
var mandatoryPayload =
 {
  namespace: 'argonlaser',
  project: 'gitlab-create-issue-test',
  privateToken: process.env.privateToken,
  title: 'Title'
 }
var optionalPayload =
 {
  assigneeName: 'argonlaser',
  dueDate: '2018-11-11'
 }

createIssue(mandatoryPayload, optionalPayload, function (err, res) {
  if (err) {
    // Handle error
  } else {
    // Do something with response
  }
}
```
