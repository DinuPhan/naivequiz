---
title: Module 10: Automatic Scaling and Monitoring
tags: []
domains: ["AWS"]
---

# Which of the following are true regarding CloudWatch Events? (Select TWO.)

- [ ] It can reboot an EC2 instance when an error appears in a log file.
- [ ] It can send an SNS notification when an EC2 instance’s CPU utilization exceeds 90%.
- [x] It can send an SNS notification when an IAM user logs in to the AWS Management Console.
- [x] It can shut down an EC2 instance at a specific time.

# What Auto Scaling group parameters set the limit for the number of instances that Auto Scaling creates? (Select TWO.)

- [x] Maximum
- [ ] Desired capacity
- [ ] Group size
- [x] Minimum

# Which of the following is a simple load balancer with multiple protocols?

- [ ] Application Load Balancer
- [ ] Network Load Balancer
- [x] Classic Load Balancer
- [ ] Traffic Load Balancer

# Which of the following load balancer routes traffic based on IP protocol data?

- [ ] Classic Load Balancer
- [x] Network Load Balancer
- [ ] Application Load Balancer
- [ ] Traffic Load Balancer

# How does an application load balancer enable reliability?

- [ ] By replacing failed instances
- [x] By routing traffic away from failed instances
- [ ] By routing traffic to the least busy instances
- [ ] By caching frequently accessed content

# An Auto Scaling group has a desired capacity of 7 and a maximum size of 7. What will Auto Scaling do if someone manually terminates one of these instances?

- [ ] It will not launch any new instances
- [ ] It will change the desired capacity to 6
- [x] It will launch one new instance
- [ ] It will terminate one instance

# You want to log every object downloaded from an S3 bucket in a specific region. You want to retain these logs indefinitely and search them easily. What’s the most cost-effective way to do this? (Select TWO.)

- [x] Stream CloudTrail logs to CloudWatch Logs.
- [ ] Use CloudTrail event history.
- [x] Create a trail to log S3 data events.
- [ ] Enable CloudTrail logging of global service events.

# What’s the most cost-effective way to view and search only the last 60 days of management API events on your AWS account?

- [ ] Create a trail.
- [ ] Use CloudWatch Events.
- [ ] Stream CloudTrail logs to CloudWatch.
- [x] Use CloudTrail event history.

# An Auto Scaling group can use an EC2 system health check to determine whether an instance is healthy. What other type of health check can it use?

- [ ] SNS
- [ ] S3
- [ ] VPC
- [x] ELB

# A company needs to know which user was responsible for terminating several critical Amazon Elastic Compute Cloud (EC2) Instances. Where can the customer find this information?

- [x] AWS CloudTrail logs
- [ ] AM Trusted Advisor
- [ ] Amazon EC2 instance usage report
- [ ] Amazon CloudWatch

# What is a benefit of using CloudTrail log file integrity validation?

- [ ] It prevents unauthorized users from deleting CloudTrail log files.
- [ ] It lets you assert that no CloudTrail log files have been deleted from CloudWatch.
- [x] It lets you assert that no CloudTrail log files have been deleted from S3.
- [ ] It tells you how a CloudTrail log file has been tampered with.

# Which of the following load balancer supports traffic to a containerized application?

- [ ] Network Load Balancer
- [x] Application Load Balancer
- [ ] Traffic Load Balancer
- [ ] Classic Load Balancer

# You’ve created a target tracking policy for an Auto Scaling group. You want to ensure that the number of instances in the group never exceeds 5. How can you accomplish this?

- [x] Set the maximum group size to 5.
- [ ] Set the minimum group size to 5.
- [ ] Set the group size to 5.
- [ ] Delete the target tracking policy.

# What Auto Scaling feature creates a scaling schedule based on past usage?

- [ ] Scheduled scaling
- [x] Predictive scaling
- [ ] Pattern scaling
- [ ] Dynamic scaling

# Which of the following load balancer routes traffic based on the content of the request?

- [ ] Classic Load Balancer
- [x] Application Load Balancer
- [ ] Network Load Balancer
- [ ] Traffic Load Balancer

# What is the primary goal of auto scaling?

- [ ] To ensure the long-term reliability of a particular physical resource
- [x] To ensure that a predefined service level is maintained regardless of external demand or instance failures
- [ ] To orchestrate the use of multiple parallel resources to direct incoming user requests
- [ ] To ensure the long-term reliability of a particular virtual resource

# Which of the following contains the configuration information for instances in an Auto Scaling group?

- [ ] Launch directive
- [ ] CloudFormation template
- [ ] Dynamic scaling policy
- [x] Launch template

# For a load balancer to accept incoming traffic, which of the following need to be configured?

- [x] Listener
- [ ] Port
- [ ] Client
- [ ] Target

# You want to predefine the configuration of EC2 instances that you plan to launch manually and using Auto Scaling. What resource must you use?

- [ ] CloudFormation template
- [ ] Instance role
- [x] Launch template
- [ ] Launch configuration

# Which of the following load balancers operates at the OSI model transport layer?

- [ ] Classic Load Balancer
- [ ] Traffic Load Balancer
- [x] Network Load Balancer
- [ ] Application Load Balancer

