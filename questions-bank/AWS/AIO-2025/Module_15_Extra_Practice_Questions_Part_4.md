---
title: Module 15: Extra Practice Questions (Part 4)
tags: []
domains: ["AWS"]
---

# A company has moved all its infrastructure to the AWS Cloud. To plan ahead for each quarter, the finance team wants to track the cost and usage data of all resources from previous months. The finance team wants to automatically generate reports that contains the data. Which AWS service or feature should the finance team use to meet these requirements?

- [ ] Amazon Detective
- [ ] AWS Pricing Calculator
- [x] AWS Budgets
- [ ] AWS Savings Plans

# Which AWS service or tool provides a visualization of historical AWS spending patterns and projections of future AWS costs?

- [ ] Amazon Cloud Watch
- [ ] AWS Budgets
- [ ] AWS Cost and Usage Report
- [x] Cost Explorer

# A company wants to track the monthly cost and usage of all Amazon EC2 instances in a specific AWS environment. Which AWS service or tool will meet these requirements?

- [ ] AWS Trusted Advisor
- [ ] AWS Compute Optimizer
- [ ] AWS Cost Anomaly Detection
- [x] AWS Budgets

# A company is using multiple AWS accounts for different business teams. The finance team wants to receive one bill for all of the company’s accounts. Which AWS service or tool should the finance team use to meet this requirement?

- [ ] AWS Budgets
- [ ] Cost Explorer
- [ ] AWS Trusted Advisor
- [x] AWS Organizations

# Which of the following can the AWS Pricing Calculator do?

- [ ] Provide users with access to their monthly bills.
- [x] Project monthly AWS costs.
- [ ] Provide in-depth information about AWS pricing strategies.
- [ ] Calculate historical AWS costs

# A company wants to implement detailed tracking of its cloud costs by department and project. Which AWS feature or service should the company use?

- [ ] AWS Marketplace
- [ ] AWS Budgets
- [x] Cost allocation tags
- [ ] Consolidated billing

# Which AWS service or tool helps users visualize, understand, and manage spending and usage over time?

- [ ] AWS Organizations
- [ ] AWS Pricing Calculator
- [ ] AWS Service Catalog
- [x] AWS Cost Explorer

# A company has multiple AWS accounts that include compute workloads that cannot be interrupted. The company wants to obtain billing discounts that are based on the company’s use of AWS services. Which AWS feature or purchasing option will meet these requirements?

- [ ] Resource tagging
- [x] Consolidated billing
- [ ] Pay-as-you-go pricing
- [ ] Spot Instances

# A company plans to migrate to AWS and wants to create cost estimates for its AWS use cases. Which AWS service or tool can the company use to meet these requirements?

- [x] AWS Pricing Calculator
- [ ] Amazon CloudWatch
- [ ] AWS Cost Explorer
- [ ] AWS Budgets

# What is the best practice for granting permissions in AWS IAM?

- [ ] Share the AWS account root user credentials with all administrators
- [x] Apply the principle of "least privilege"by granting only the permissions required for a task
- [ ] Grant "AdministratorAccess"to every user to avoid permission issues
- [ ] Use a single IAM user for multiple employees to simplify management

# Which AWS service or feature provides an additional layer of security by requiring a user to provide a unique code from a device in addition to their password?

- [ ] AWS Shield
- [x] Multi-Factor Authentication (MFA)
- [ ] AWS CloudTrail
- [ ] AWS Key Management Service (AWS KMS)

# A company stores sensitive customer data including credit card numbers and personal information in Amazon S3 buckets. The security team wants to automatically identify and classify this sensitive data. Which AWS service should they use?

- [x] Amazon Macie
- [ ] WS Security Hub
- [ ] Amazon Inspector
- [ ] Amazon GuardDuty

# A company uses AWS Organizations. They want to prevent all accounts in a specific department from launching EC2 instances. Which feature should they use?

- [ ] IAM Permission Boundary
- [ ] AWS Config Rules
- [x] Service Control Policies (SCP)
- [ ] AWS Security Hub

# Which IAM component is used to grant temporary security credentials to AWS services like EC2 or Lambda?

- [ ] IAM User
- [ ] IAM Group
- [x] IAM Role
- [ ] IAM Policy

# Which AWS service is used to easily provision, manage, and deploy SSL/TLS certificates for encryption in transit?

- [ ] AWS KMS
- [ ] AWS Secrets Manager
- [x] AWS Certificate Manager (ACM)
- [ ] SSM Parameter Store

# Which type of KMS Key allows you to download and share the Public Key with others?

- [ ] Symmetric KMS Keys
- [ ] AWS Owned Keys
- [x] Asymmetric KMS Keys
- [ ] AWS Managed Keys

# Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?

- [ ] AWS Cost Explorer
- [ ] AWS Cost Allocation Tags
- [ ] AWS Organizations
- [x] AWS Budgets

# A company is planning to migrate its on-premises workloads to AWS. They want to estimate their potential monthly costs for a specific set of services (such as Amazon EC2, Amazon RDS, and Amazon S3) based on their expected usage before actually launching any resources. Which AWS tool should they use?

- [ ] AWS Cost Explorer
- [x] AWS Pricing Calculator
- [ ] AWS Budgets
- [ ] AWS Trusted Advisor

# Under the AWS Shared Responsibility Model, which of the following is a responsibility of the customer regarding billing and cost management?

- [ ] Maintaining the physical billing infrastructure.
- [x] Managing cost allocation tags to track expenses by department.
- [ ] Ensuring the global availability of the AWS Billing console
- [ ] Determining the underlying hardware costs for EC2 instances.

# A large enterprise has multiple AWS accounts for different business units. The finance department wants to receive a single, combined invoice for all accounts to simplify the payment process and benefit from volume-based discounts. Which feature of AWS Organizations should they implement?

- [ ] Service Control Policies (SCPs)
- [ ] Resource Groups
- [ ] AWS Cost and Usage Report
- [x] Consolidated Billing

# A company is looking at real-time processing of streaming big data for their ad-tech platform. Which of the following AWS services is the right choice for this requirement?

- [x] Amazon Kinesis Data Streams
- [ ] Amazon Simple Queue Service (Amazon SQS)
- [ ] Amazon Redshift
- [ ] Amazon EMR

# An e-commerce application sends out messages to a downstream application whenever an order is created. The downstream application processes the messages and updates its own systems. Currently, the two applications directly communicate with each other. Which service will you use to decouple this architecture, without any communication loss between the two systems?

- [x] Amazon Simple Queue Service (SQS)
- [ ] Amazon Kinesis Data Streams
- [ ] Amazon Simple Notification Service (Amazon SNS)
- [ ] AWS Lambda

# Which of the following is an AWS database service?

- [ ] AWS Database Migration Service (AWS DMS)
- [x] Amazon Redshift
- [ ] AWS Glue
- [ ] AWS Storage Gateway

# An e-commerce company has deployed an RDS database in a single Availability Zone (AZ). The engineering team wants to ensure that in case of an AZ outage, the database should continue working on the same endpoint without any manual administrative intervention. Which of the following solutions can address this use-case?

- [x] Configure the database in RDS Multi-AZ deployment with automatic failover to the
standby
- [ ] Configure the database in RDS read replica mode with automatic failover to the standby
- [ ] Provision the database via AWS CloudFormation
- [ ] Deploy the database via AWS Elastic Beanstalk

# An e-commerce company wants to store data from a recommendation engine in a database. As a Cloud Practioner, which AWS service would you recommend to provide this functionality with the LEAST operational overhead for any scale?

- [ ] Amazon Neptune
- [ ] Amazon Simple Storage Service (Amazon S3)
- [ ] Amazon Relational Database Service (Amazon RDS)
- [x] Amazon DynamoDB

# Which of the following AWS services allows a database to have flexible schema and supports document data models?

- [x] Amazon DynamoDB
- [ ] Amazon Relational Database Service (Amazon RDS)
- [ ] Amazon Aurora
- [ ] Amazon Redshift

# What is the primary benefit of deploying an Amazon Relational Database Service (Amazon RDS) database in a Read Replica configuration?

- [ ] Read Replica reduces database usage costs
- [ ] Read Replica protects the database from a regional failure
- [ ] Read Replica enhances database availability
- [x] Read Replica improves database scalability

# Which AWS service can be used for online analytical processing?

- [ ] Amazon Relational Database Service (Amazon RDS)
- [ ] Amazon ElastiCache
- [x] Amazon Redshift
- [ ] Amazon DynamoDB

# Which of the following is correct regarding the Amazon Relational Database Service (Amazon RDS) service?

- [ ] You can use read replicas for disaster recovery only and multi-AZ deployment for improved
read performance only
- [x] You can use both read replicas and multi-AZ deployment for disaster recovery
- [ ] You can use read replicas for improved read performance only and multi-AZ deployment
for disaster recovery only
- [ ] You can use both read replicas and multi-AZ deployment having single standby for
improved read performance

# According to the AWS Shared Responsibility Model, which of the following are responsibilities of the customer for Amazon RDS?

- [x] Database encryption
- [ ] Applying patches to the Amazon Relational Database Service (Amazon RDS) database
- [ ] Applying patches to the underlying OS
- [ ] Managing the underlying server hardware on which Amazon Relational Database Service
(Amazon RDS) runs

# A company has an Amazon EC2 instance in a private subnet. The company wants to initiate a connection to the internet to pull operating system updates while preventing traffic from the internet from accessing the EC2 instance. Which AWS managed service allows this?

- [ ] VPC endpoint
- [x] NAT gateway
- [ ] Amazon PrivateLink
- [ ] VPC peering

# A company wants to securely access an Amazon S3 bucket from an Amazon EC2 instance without accessing the internet. What should the company use to accomplish this goal?

- [ ] VPN connection
- [ ] Internet gateway
- [x] VPC endpoint
- [ ] NAT gateway

# A network engineer needs to build a hybrid cloud architecture connecting on premises networks to the AWS Cloud using AWS Direct Connect. The company has a few VPCs in a single AWS Region and expects to increase the number of VPCs to hundreds over time. Which AWS service or feature should the engineer use to simplify and scale this connectivity as the VPCs increase in number?

- [ ] VPC endpoints
- [x] AWS Transit Gateway
- [ ] Amazon Route 53
- [ ] AWS Secrets Manager

# Which task can a company perform by using security groups in the AWS Cloud?

- [x] Allow access to an Amazon EC2 instance through only a specific port.
- [ ] Deny access to malicious IP addresses at a subnet level.
- [ ] Protect data that is cached by Amazon CloudFront.
- [ ] Apply a stateless firewall to an Amazon EC2 instance.

# A company hosts its website on Amazon EC2 instances. The company needs to ensure that the website reaches a global audience and provides minimum latency to users. Which AWS service should the company use to meet these requirements?

- [ ] Amazon Route 53
- [x] Amazon CloudFront
- [ ] Elastic Load Balancing
- [ ] AWS Lambda

# A company wants to monitor and block malicious HTTP and HTTPS requests that its Amazon CloudFront distributions receive. Which AWS service should the company use to meet these requirements?

- [ ] Amazon GuardDuty
- [ ] Amazon Inspector
- [x] AWS WAF
- [ ] Amazon Detective

# Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?

- [ ] AWS VPN
- [ ] Amazon Connect
- [x] AWS Direct Connect
- [ ] Internet gateway

# Which AWS service or feature gives users the ability to capture information about network traffic in a VPC?

- [x] VPC Flow Logs
- [ ] Amazon Inspector
- [ ] VPC route tables
- [ ] AWS CloudTrail

# Which of the following accurately describes a Public Subnet within an AWS Virtual Private Cloud (VPC)?

- [ ] It is a subnet where Security Groups cannot be applied.
- [ ] It is a logically isolated section of the AWS cloud with no external access.
- [ ] It is a subnet that relies solely on a NAT Gateway for outbound internet access.
- [x] It is a subnet that has a route to the internet via an Internet Gateway.

# When configuring network security in AWS, what is a key difference between Security Groups and Network ACLs?

- [x] Security Groups are stateful firewalls, while Network ACLs are stateless firewalls.
- [ ] Security Groups are stateless, while Network ACLs are stateful.
- [ ] Security Groups support ’Deny’ rules, while Network ACLs only support ’Allow’ rules.
- [ ] Security Groups operate at the subnet level, while Network ACLs operate at the instance
level.

# A startup wants a managed relational database for a steady, predictable workload using standard MySQL with minimal administration. High availability in a single Region is required, but they do not need global replication. Which service best fits their needs?

- [x] Amazon RDS for MySQL
- [ ] Amazon DynamoDB
- [ ] Amazon Aurora Global Database
- [ ] Amazon Neptune

# You notice that requests to your application fronted by an Application Load Balancer (ALB) sometimes fail when one Availability Zone experiences issues, even though other Zones are healthy. Which configuration change can improve resilience to AZ failures?

- [ ] Disable health checks on the ALB so that it continues sending traffic to all targets evenly.
- [ ] Register targets with the ALB only in a single Availability Zone to simplify routing.
- [x] Enable cross-zone load balancing on the ALB and ensure there are healthy targets in
multiple Availability Zones.
- [ ] Use Network ACLs to block traffic from the affected Availability Zone.

# An e-commerce company is experiencing order loss during peak traffic because the Order service directly calls the Payment service, and they want to decouple the system while ensuring no data loss, which solution is most appropriate?

- [x] Amazon SQS
- [ ] Amazon SNS
- [ ] Amazon EC2
- [ ] Amazon RDS

# An AdTech company needs to process clickstream data from millions of users in real-time with very high throughput, which service is the best fit?

- [ ] Amazon SQS
- [ ] Amazon SNS
- [x] Amazon Kinesis
- [ ] Amazon S3

# A student is learning about managed database services on AWS. Which service is specifically designed to manage relational databases and automate tasks like backups and patching?

- [ ] Amazon SQS for messaging between distributed applications.
- [x] Amazon RDS for managing relational database instances.
- [ ] Amazon SNS for broadcasting messages to subscribers.
- [ ] Amazon S3 for storing unstructured object data.

# Which of the following database engines is not currently supported by Amazon RDS?

- [ ] PostgreSQL
- [ ] MariaDB
- [x] MongoDB
- [ ] IBM DB2

# When using Amazon SQS, what happens to a message after a consumer retrieves it from the queue, but before it is explicitly deleted?

- [ ] The message is immediately removed from the queue to prevent duplicate processing.
- [ ] The message remains visible to all other consumers immediately.
- [x] The message enters a visibility timeout period where it is hidden from other consumers.
- [ ] The message is moved to a Dead Letter Queue (DLQ) automatically.

# Which AWS service is used to send one message to multiple subscribers using a publish/subscribe model?

- [ ] Amazon SQS
- [x] Amazon SNS
- [ ] Amazon RDS
- [ ] Amazon ElastiCache

# An e-commerce application experiences heavy read traffic during sales events. The primary database becomes a bottleneck, but write operations must remain consistent. What is the best solution?

- [ ] Enable Multi-AZ deployment to distribute read traffic.
- [ ] Replace RDS with SQS to queue database operations.
- [ ] Use SNS to broadcast database queries to all services.
- [x] Create Read Replicas and redirect read queries there.

# What is the fundamental difference in replication mechanism between RDS Read Replicas and RDS Multi-AZ?

- [ ] ead Replicas uses synchronous replication (SYNC), while Multi-AZ uses asynchronous
replication (ASYNC).
- [ ] Both features use synchronous replication (SYNC) to ensure no data loss.
- [x] Read Replicas uses asynchronous replication (ASYNC), while Multi-AZ uses synchronous
replication (SYNC).
- [ ] Read Replicas only supports replication within the same Availability Zone, while Multi-AZ

