---
id: sample-md-quiz
title: Markdown & Architect Test
tags: [markdown, rich-text, code]
domains: [Architecture, Security]
---

# What is the correct way to declare a variable in Javascript for a constant?

- [ ] `var x = 10;`
- [x] `const x = 10;`
- [ ] `let x = 10;`
- [ ] `immutable x = 10;`

> Use `const` for variables that should not be reassigned. For example:
> ```javascript
> const PI = 3.14;
> // PI = 3; // Error!
> ```

# Which AWS service matches this **infrastructure as code** description?

```yaml
Resources:
  MyS3Bucket:
    Type: 'AWS::S3::Bucket'
```

- [ ] AWS Lambda
- [ ] Amazon EC2
- [x] AWS CloudFormation
- [ ] AWS Elastic Beanstalk

> CloudFormation uses YAML or JSON templates to define infrastructure.
