---
title: Module 4: AWS Cloud Security
tags: []
domains: ["AWS"]
---

# According to the AWS Shared Responsibility Model, which of the following are responsibilities of AWS? (Choose two.)

- [ ] Patching OSs running on EC2 instances
- [x] Patching underlying virtualization software running in AWS data centers
- [ ] Security of what’s in the cloud
- [x] The security of the cloud

# What is the purpose of the Service Organization Controls (SOC) reports found on AWS Artifact?

- [ ] They’re an official, ongoing risk-assessment profiler for AWS-based deployments.
- [ ] They can be used to help you design secure and reliable credit card transaction applications.
- [x] They attest to AWS infrastructure compliance with data accountability standards like Sarbanes–Oxley.
- [ ] They guarantee that all AWS-based applications are, by default, compliant with Sarbanes–Oxley standards.

# Which of the following credentials can you use to log into the AWS Management Console?

- [x] Identity and Access Management (IAM) username
- [ ] Access key ID
- [ ] Account ID
- [ ] Account alias

# How, using security best practices, should your organization’s team members access your AWS account resources?

- [ ] Only a single team member should be given any account access.
- [ ] Ideally, resource access should occur only through the use of access keys.
- [x] Through the use of specially created users, groups, and roles, each given the fewest permissions necessary.
- [ ] Through a jointly shared single account user who’s been given full account-wide permissions.

# What will IAM users with AWS Management Console access need to successfully log in?

- [ ] Their account number and secret access key
- [ ] Their username, account number, and a password
- [x] Their username and password
- [ ] Their username, password, and secret access key

# What is an IAM role?

- [ ] A set of permissions allowing access to specified AWS resources
- [ ] Permissions granted an IAM user over specified AWS resources
- [ ] A set of IAM users given permission to access specified AWS resources
- [x] Permissions granted a trusted entity over specified AWS resources

# You want to log every object downloaded from an S3 bucket in a specific region. You want to retain these logs indefinitely and search them easily. What’s the most cost-effective way to do this? (Select TWO.)

- [x] Stream CloudTrail logs to CloudWatch Logs.
- [x] Create a trail to log S3 data events.
- [ ] Enable CloudTrail logging of global service events.
- [ ] Use CloudTrail event history.

# Which of the following are requirements you can include in an IAM password policy? (Select THREE.)

- [ ] Require at least one space or null character
- [x] Require at least one nonalphanumeric character
- [x] Require at least one number
- [x] Require at least one uppercase letter

# What does KMS use to encrypt objects stored on your AWS account?

- [ ] Client-side master key
- [x] Customer master key
- [ ] SSH master key
- [ ] KMS master key

# What will you need to provide for a new IAM user you’re creating who will use “programmatic access” to AWS resources?

- [ ] An access key ID
- [ ] A password and MFA
- [x] An access key ID and secret access key
- [ ] A password

# How does multi-factor authentication work?

- [ ] In addition to an access password, users also authenticate via a physical MFA device
- [ ] Users authenticate using tokens sent to at least two MFA devices
- [ ] Instead of an access password, users authenticate via a physical MFA device.
- [x] Users authenticate using a password and also either a physical or virtual MFA device.

# What’s the most cost-effective way to view and search only the last 60 days of management API events on your AWS account?

- [x] Create a trail.
- [ ] Use CloudTrail event history
- [ ] Stream CloudTrail logs to CloudWatch
- [ ] Use CloudWatch Events

# Which of the following steps should ideally be taken on behalf of an AWS account’s root user? (Select THREE.)

- [x] Set a complex password
- [x] Apply multifactor authentication (MFA)
- [ ] Create access keys
- [x] Delete associated access keys

# Which of the following tools should be used regularly to provide insight into who has access to your account resources?

- [x] Credential report
- [ ] Federation
- [ ] Encryption
- [ ] Single sign-on

# Which of the following describes an IAM role?

- [ ] An identity assumed by multiple users logging in (using passwords) to access one or more AWS resources
- [ ] An identity assumed when a person uses a password to log in to access one or more AWS resources
- [x] An identity used by a process to perform an action against an AWS resource
- [ ] An identity assigned the owner of an AWS account when the account is created

# Which of the following are valid third-party federated identity standards? (Choose Two)

- [x] Active Directory
- [ ] SSO
- [x] SAML 2.0
- [ ] Secure Shell

# How long will your session with the AWS Management Console remain active?

- [ ] 6 hours
- [ ] 8 hours
- [ ] 24 hours
- [x] 12 hours

# Which of the following authentication tools is most commonly used for programmatic or automated access to AWS resources?

- [ ] Multifactor authentication
- [ ] SSH key pairs
- [ ] Passwords
- [x] Access keys

# Which of the following fall under the administration responsibility of Amazon rather than you (the customer)? (Select TWO.)

- [ ] Data stored in customer accounts on AWS
- [x] Physical access to AWS data centers
- [ ] Data lost through malicious penetration of an application’s defenses
- [x] The infrastructure powering AWS managed services

# Which of the following features of S3 improve the security of data you store in an S3 bucket? (Select TWO.)

- [ ] S3 removes public objects by default.
- [ ] All objects are readable by all AWS users by default.
- [x] Objects in S3 are not public by default
- [x] By default, S3 removes ACLs that allow public read access to objects.

# Which of the following IAM policies is the best choice for the admin user you create in order to replace the root user for day-to-day administration tasks?

- [x] AdministratorAccess
- [ ] AmazonS3FullAccess
- [ ] AmazonEC2FullAccess
- [ ] AdminAccess

# Which of the following standards governs AWS-based applications processing credit card transactions?

- [ ] FedRAMP
- [ ] SSE-KMS
- [x] PCI DSS
- [ ] ARPA

# Which of the following is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources?

- [ ] AWS compliance
- [x] AWS Config
- [ ] AWS Artifact
- [ ] AWS Audit

# Which of the following describes a methodology that protects your organization’s data when it’s on-site locally, in transit to AWS, and stored on AWS?

- [ ] Cryptographic transformation
- [x] Client-side encryption
- [ ] Encryption at rest
- [ ] Server-side encryption

# What role can the documents provided by AWS Artifact play in your application planning? (Select TWO.)

- [ ] They represent AWS infrastructure design policy.
- [ ] They can provide insight into the networking and storage design patterns your AWS applications use.
- [x] They can help you confirm that your deployment infrastructure is compliant with regulatory standards.
- [x] They can provide insight into various regulatory and industry standards that represent best practices.

# What is a benefit of using CloudTrail log file integrity validation?

- [ ] It tells you how a CloudTrail log file has been tampered with.
- [x] It lets you assert that no CloudTrail log files have been deleted from S3.
- [ ] It lets you assert that no CloudTrail log files have been deleted from CloudWatch.
- [ ] It prevents unauthorized users from deleting CloudTrail log files.

# What text format does the credential report use?

- [ ] ASCII
- [x] CSV
- [ ] XML
- [ ] JSON

# What is the primary function of the AWS IAM service?

- [ ] SSH key pair management
- [x] Identity and access management
- [ ] Access key management
- [ ] Federated access management

# Which of the following describes managing user authentication through third-party authentication services?

- [ ] Single sign-on
- [ ] MFA
- [ ] IAM roles
- [x] Federation

# Which of the following should you do to secure your AWS root user? (Select TWO.)

- [ ] Assign the root user to the “admins” IAM group
- [x] Enable MFA.
- [x] Create a strong password.
- [ ] Use the root user for day-to-day administration tasks.

# The AWS Shared Responsibility Model illustrates how AWS itself (as opposed to its customers) is responsible for which aspects of the cloud environment?

- [ ] The operating systems run on EC2 instances
- [ ] The redundancy and integrity of customer-added data
- [ ] Data and configurations added by customers
- [x] The underlying integrity and security of AWS physical resources

# Which of the following will encrypt your data while in transit between your office and Amazon S3?

- [ ] DynamoDB
- [ ] SSE-KMS
- [x] A client-side master key
- [ ] SSE-S3

# What’s the most efficient method for managing permissions for multiple IAM users?

- [ ] Create roles based on IAM policies, and assign them to IAM users.
- [ ] Assign users requiring similar permissions to IAM roles.
- [ ] Assign IAM users permissions common to others with similar administration responsibilities.
- [x] Assign users requiring similar permissions to IAM groups.

# What information does the IAM credential report provide?

- [x] The current state of security of your IAM users’ access credentials
- [ ] A record of failed password account login attempts
- [ ] The current state of your account security settings
- [ ] A record of API requests against your account resources

# Which of the following AWS resources cannot be encrypted using KMS?

- [x] Existing AWS Elastic Block Store volumes
- [ ] DynamoDB databases
- [ ] S3 buckets
- [ ] RDS databases

# What is Amazon Cognito?

- [ ] A relational database engine
- [ ] A service that permits processing and analyzing of real-time video and data streams
- [x] A service that can manage authentication and authorization for your public-facing AWS hosted applications
- [ ] A service that automates the administration of authentication secrets used by your AWS resources

# According to the AWS Shared Responsibility Model, which of the following are responsibilities of the Customer? (Choose two.)

- [x] Upgrades and patches to the operating system on the EC2 instance
- [ ] Physical security of the data center
- [ ] Virtualization infrastructure
- [x] EC2 security group settings

# According to the AWS Shared Responsibility Model, what’s the best way to define the status of the software driving an AWS managed service?

- [ ] Everything associated with an AWS managed service is the responsibility of the customer.
- [ ] Everything associated with an AWS managed service is the responsibility of AWS.
- [x] Whatever the customer can control (application code and/or configuration settings) is the customer’s responsibility.
- [ ] Whatever is added by the customer (like application code) is the customer’s responsibility.

# How can federated identities be incorporated into AWS workflows? (Select TWO).

- [x] You can provide users authenticated through a third-party identity provider access to backend resources used by your mobile app.
- [ ] You can use identities to guide your infrastructure design decisions.
- [x] You can provide admins authenticated through AWS Microsoft AD with access to a Microsoft SharePoint farm running on AWS.
- [ ] You can use authenticated identities to import external data (like email records from Gmail) into AWS databases.

# Which of the following are examples of applying the principles of the least privilege or maximum security? (Select TWO)

- [ ] Deleting an empty S3 bucket
- [x] Enabling S3 versioning
- [x] Granting each AWS user their own IAM username and password
- [ ] Creating a security group rule to deny access to unused ports

