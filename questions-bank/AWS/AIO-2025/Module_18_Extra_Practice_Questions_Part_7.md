---
title: Module 18: Extra Practice Questions (Part 7)
tags: []
domains: ["AWS"]
---

# Which feature below does not belong to Private Subnet?

- [x] No requirement of NAT Gateway Usage for internet access
- [ ] Not directly accessible from the internet
- [ ] Route table does not include a route to the Internet Gateway
- [ ] Used for Databases, Internal Application Servers, or Batch Processing

# Which feature allows an Aurora database to be restored to a specific point in time without using backups or creating a new cluster?

- [ ] Point-in-Time Restore (PITR)
- [x] Backtrack
- [ ] Snapshot Restore
- [ ] Database Cloning

# A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?

- [ ] A MySQL database installed on an EC2 instance
- [ ] Amazon DynamoDB
- [x] Amazon Aurora
- [ ] Amazon Neptune

# Which service is best for storing common database query results, which helps to alleviate database access load?

- [ ] Amazon Machine Learning
- [ ] Amazon SQS
- [x] Amazon ElastiCache
- [ ] Amazon EC2 Instance Store

# Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?

- [ ] AWS manages the data stored in Amazon RDS tables
- [x] AWS manages the maintenance of the operating system
- [ ] AWS automatically scales up instance types on demand
- [ ] AWS manages the database type

# What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?

- [x] It simplifies relational database administration tasks
- [ ] It provides 99.99
- [ ] It automatically scales databases for loads
- [ ] It enabled users to dynamically adjust CPU and RAM resources

# A customer needs to run a MySQL database that easily scales. Which AWS service should they use?

- [x] Amazon Aurora
- [ ] Amazon Redshift
- [ ] Amazon DynamoDB
- [ ] Amazon ElastiCache

# What is the AWS service that provides five times the performance of a standard MySQL database?

- [ ] Amazon Redshift
- [ ] Amazon DynamoDB
- [x] Amazon Aurora
- [ ] Amazon Neptune

# Which of the following Amazon RDS features facilitates offloading of database read activity?

- [ ] Database Snapshots
- [ ] Multi-AZ Deployments
- [ ] Automated Backups
- [x] Read Replicas

# You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?

- [ ] Amazon EFS
- [ ] Amazon Neptune
- [x] Amazon ElastiCache
- [ ] Amazon SQS

# You want to decouple two microservices so that the "Order Service"can continue to function even if the "Shipping Service"is temporarily unavailable. Which service should you use?

- [ ] Amazon SNS
- [ ] Amazon RDS Proxy
- [x] Amazon SQS
- [ ] Amazon Route 53

# Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?

- [ ] RDS Single-AZ
- [ ] RDS Write Replica
- [ ] RDS Snapshots
- [x] RDS Multi-AZ

# What is the primary benefit of deploying an Amazon RDS database with a Read Replica configuration?

- [ ] Provide synchronous replication for Disaster Recovery.
- [x] Offload read-heavy traffic from the primary database instance.
- [ ] Automatically scale storage capacity when space runs out.
- [ ] Improve the write performance (INSERT, UPDATE) of the database.

# A company needs to ensure their database can automatically failover to another Availability Zone with zero manual intervention in case of an outage. Which RDS feature should they enable?

- [ ] Read Replicas
- [x] Multi-AZ Deployment
- [ ] Auto Scaling Group
- [ ] Database Snapshotting

# A company wants to send a single alert that triggers an email notification to the admin and simultaneously starts a Lambda function to log the event. Which architecture is best?

- [x] SNS Topic with Email and Lambda as subscribers
- [ ] SQS Queue with Email and Lambda as consumers
- [ ] Amazon CloudWatch Logs
- [ ] SES (Simple Email Service)

# Which CIDR suffix allows for the largest number of total IP addresses?

- [ ] /32
- [ ] /24
- [ ] /16
- [x] /8

# An engineering team wants to ensure that in case of an Availability Zone (AZ) outage, their RDS database should continue working on the same endpoint without any manual administrative intervention. Which of the following solutions addresses this use-case?

- [x] Configure the database in RDS Multi-AZ deployment
- [ ] Configure the database in RDS Read Replica mode
- [ ] Provision the database via AWS CloudFormation
- [ ] Enable RDS Storage Auto Scaling

# Which database engine is a "cloud-native"AWS proprietary relational database that offers up to 5x the performance of standard MySQL?

- [ ] Amazon Redshift
- [ ] Amazon DynamoDB
- [x] Amazon Aurora
- [ ] MariaDB

# A solutions architect is migrating a legacy SQL Server database to AWS. The company wants to retain full control over the underlying Operating System to install custom third-party software. Which option should they choose?

- [ ] Amazon RDS for SQL Server
- [ ] Amazon Aurora
- [x] Amazon EC2 with SQL Server installed
- [ ] Amazon DynamoDB

# Which of the following is a key difference between Kinesis Data Streams and Kinesis Data Firehose?

- [ ] Data Streams is serverless, while Firehose requires manual scaling of shards.
- [x] Data Streams can store data for up to 365 days, while Firehose does not have a data
retention period.
- [ ] Firehose is used for real-time processing, while Data Streams is used for batch loading.
- [ ] Data Streams only supports S3 as a destination, while Firehose supports any database.

# A startup wants a fully managed NoSQL database with millisecond latency and minimal operational overhead. Which service is BEST?

- [ ] Amazon RDS
- [ ] Amazon Redshift
- [x] Amazon DynamoDB
- [ ] Amazon Aurora

# Which AWS service is a managed relational database service that supports engines like MySQL, PostgreSQL, and Oracle?

- [ ] Amazon DynamoDB
- [x] Amazon RDS
- [ ] Amazon Redshift
- [ ] Amazon ElastiCache

# What is the main purpose of an Internet Gateway (IGW) in a VPC?

- [ ] To connect two different VPCs together.
- [x] To allow communication between your VPC and the internet.
- [ ] To encrypt data stored in S3 buckets.
- [ ] To balance traffic across multiple EC2 instances.

# A company needs to improve read performance of its production database without affecting write operations. Which solution is MOST appropriate?

- [ ] Enable Multi-AZ
- [x] Create Read Replicas
- [ ] Enable automated backups
- [ ] Use snapshots

# Which RDS feature uses synchronous replication and automatically fails over without manual intervention?

- [x] Multi-AZ
- [ ] Read Replica
- [ ] Backup Restore
- [ ] Auto Scaling

# An application needs extremely fast data access with very low latency for frequently accessed data. Which service should be used?

- [ ] Amazon RDS
- [ ] Amazon Aurora
- [x] Amazon ElastiCache
- [ ] Amazon SQS

# A system requires guaranteed message ordering and no duplicate processing. Which combination should be used?

- [x] SNS FIFO + SQS FIFO
- [ ] SNS + SQS Standard
- [ ] SQS Standard only
- [ ] Amazon MQ

# A company wants the lowest-cost disaster recovery strategy and can tolerate long recovery time. Which approach should they choose?

- [ ] Multi-site
- [ ] Warm Standby
- [ ] Pilot Light
- [x] Backup Restore

# Which statement correctly describes Aurora compared to standard RDS?

- [ ] Aurora does not support replication
- [ ] Aurora is slower than RDS
- [x] Aurora automatically scales storage up to large capacity
- [ ] Aurora only supports one Availability Zone

# A company wants to deploy its infrastructure in AWS while keeping full control over IP addressing, internal communication rules, and internet access configuration. Which AWS service provides this capability?

- [ ] Security Group
- [ ] Subnet
- [x] VPC
- [ ] Route Table

# A company creates a subnet that has a route to an Internet Gateway and is directly accessible from the internet. What type of subnet is this?

- [ ] Private Subnet
- [x] Public Subnet
- [ ] Isolated Subnet
- [ ] Internal Subnet

# A private subnet needs to access the internet for downloading updates but must not be directly accessible from the internet. Which component is required?

- [ ] Internet Gateway
- [ ] Route Table
- [x] NAT Gateway
- [ ] Security Group

# Which statement correctly describes a subnet in AWS?

- [ ] It spans multiple regions
- [ ] It is a physical server
- [x] It is a logical subdivision of a VPC within a specific AZ
- [ ] It replaces VPC

# A network engineer wants to control traffic routing for specific subnets in a VPC. Which component should they configure?

- [ ] Security Group
- [x] Route Table
- [ ] Internet Gateway
- [ ] DNS

# Which AWS network security component operates at the subnet level and supports both allow and deny rules?

- [ ] Security Group
- [x] Network ACL
- [ ] Route Table
- [ ] NAT Gateway

# A system uses a firewall that automatically allows return traffic without requiring explicit rules. What type of firewall is this?

- [ ] Stateless firewall
- [x] Stateful firewall
- [ ] NAT firewall
- [ ] Route-based firewall

# A user types a domain name into a browser and receives a web page. Which process is responsible for translating the domain name into an IP address?

- [ ] Routing
- [ ] NAT
- [x] DNS
- [ ] CIDR

# A company wants to divide its VPC IP range into smaller manageable segments for better organization and control. Which concept is being applied?

- [ ] Route Table
- [ ] CIDR
- [ ] Internet Gateway
- [x] Subnetting

# A company wants to host its public-facing web servers while keeping its database servers completely isolated from the internet. Which AWS VPC architecture best satisfies this requirement?

- [ ] Place all servers in a single public subnet and use Security Groups to block database
traffic
- [x] Place web servers in a public subnet and database servers in a private subnet within the
same VPC
- [ ] Create two separate VPCs: one for web servers and one for databases
- [ ] Place all servers in a private subnet and attach an Internet Gateway directly to each EC2
instance

# A developer in a private subnet needs to download OS security patches from the internet, but the company policy forbids assigning public IP addresses to backend servers. Which AWS service enables this outbound-only internet access?

- [ ] Internet Gateway (IGW)
- [ ] VPC Peering
- [ ] AWS Direct Connect
- [x] NAT Gateway

# A global e-commerce company wants to reduce latency for users worldwide when they access static content such as images and videos stored in Amazon S3. Which AWS service is the MOST appropriate solution?

- [x] Amazon CloudFront
- [ ] AWS Global Accelerator
- [ ] AWS Route 53 with latency-based routing
- [ ] Elastic Load Balancing (ELB)

# Which AWS service or tool can be used to set up a firewall to control traffic going into and coming out of an Amazon VPC subnet?

- [ ] Security group
- [ ] AWS WAF
- [ ] AWS Firewall Manager
- [x] Network ACL

# A company needs stateless network filtering for its VPC. Which AWS service, tool, or feature will meet this requirement?

- [ ] AWS PrivateLink
- [ ] Security group
- [x] Network access control list (ACL)
- [ ] AWS WAF

# To reduce costs, a company is planning to migrate a NoSQL database to AWS. Which AWS service is fully managed and can automatically scale throughput capacity to meet database workload demands?

- [ ] Amazon Redshift
- [ ] Amazon Aurora
- [x] Amazon DynamoDB
- [ ] Amazon RDS

# Which networking component acts as a firewall for associated subnets, controlling both inbound and outbound traffic at the subnet level?

- [ ] NAT Gateway
- [ ] Internet Gateway
- [ ] Security Group
- [x] Network Access Control List (NACL)

# You are designing a Hub-and-Spoke architecture with 50 VPCs that need to communicate with a central hub. You want to allow these VPCs to communicate with each other without creating hundreds of individual Peering connections. Which AWS service is the most optimal solution?

- [ ] AWS VPC Endpoint Services (PrivateLink)
- [x] AWS Transit Gateway
- [ ] Full-mesh VPC Peering
- [ ] AWS Software VPN

# A company has an Amazon EC2 instance in a private subnet. The company wants to initiate a connection to the internet to pull operating system updates while preventing traffic from the internet from accessing the EC2 instance. Which AWS managed service allows this?

- [ ] VPC endpoint
- [x] NAT gateway
- [ ] Amazon PrivateLink
- [ ] VPC peering

# A company wants to securely access an Amazon S3 bucket from an Amazon EC2 instance without accessing the internet. What should the company use to accomplish this goal?

- [ ] VPN connection
- [ ] nternet gateway
- [x] VPC endpoint
- [ ] NAT gateway

# A network engineer needs to build a hybrid cloud architecture connecting on-premises networks to the AWS Cloud using AWS Direct Connect. The company has a few VPCs in a single AWS Region and expects to increase the number of VPCs to hundreds over time. Which AWS service or feature should the engineer use to simplify and scale this connectivity as the VPCs increase in number?

- [ ] VPC endpoints
- [x] AWS Transit Gateway
- [ ] Amazon Route 53
- [ ] Amazon Route 53 D. AWS Secrets Manager

# Which of the following AWS database services is best described as an in-memory data store used to improve application response time?

- [ ] Amazon DynamoDB
- [ ] Amazon RDS
- [x] Amazon ElastiCache
- [ ] Amazon Redshift

