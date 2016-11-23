# gitlab-create-issue
Creates gitlab issues with the given payload

[![Run Status](https://api.shippable.com/projects/58349ac0c5316610006b0615/badge?branch=master)](https://app.shippable.com/projects/58349ac0c5316610006b0615)

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
 PRIVATE_TOKEN: 'xxxxxxx',
 title: 'TITLE'
 }
```
 
<h5>2) optionalPayload</h5>
```javascript
{
  description: 'create issue',
  confidential: 'true' // default is false,
  assignee_name: 'argonlaser' (or) assignee_id: '111111',
  milestone_id: '11123',
  labels: ['AAA', 'BBB'],
  due_date: 'YYYY-MM-DD'
}
 ```

# Usage
```javascript
var createIssue = require('gitlab-create-issue')
var mandatoryPayload = 
 {
  namespace: 'argonlaser',
  project: 'gitlab-create-issue-test',
  PRIVATE_TOKEN: process.env.PRIVATE_TOKEN,
  title: 'test issue create'
 }
var optionalPayload =
 {
  assignee_name: 'argonlaser',
  due_date: '2017-11-01'
 }

createIssue(mandatoryPayload, optionalPayload, function (err, res) {
  if (err) {
    // Handle error
  } else {
    // Do something with response
  }
}
```
