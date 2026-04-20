---
title: Module 23: Extra Practice Questions (Part 12)
tags: []
domains: ["AWS"]
---

# Which storage type is most suitable for running relational databases (SQL) and Virtual Machine (VM) disks?

- [ ] Object Storage — because of its rich metadata capabilities
- [ ] File Storage — because of its hierarchical directory structure
- [x] Block Storage — because of its extremely fast performance and support for high-transaction
workloads
- [ ] Archival Storage — because of its low cost

# A customer showed interest in a company product and wanted to quickly review its application. To do it, the boss wants to launch an instance as fast as it can and optimizing the cost shows we can easily stop it after the customer’s review. Which purchasing options below are preferred?

- [ ] Spot instance
- [ ] Reserved Instance
- [x] On-demand Instance
- [ ] Saving Plans

# Which of the following that an ALB can’t route traffic to?

- [x] S3 Buckets
- [ ] EC2 Instances
- [ ] Lambda Functions
- [ ] IP Addresses

# Which service provides temporary block storage that is physically attached to the host computer?

- [x] Instance store
- [ ] EBS
- [ ] S3 standard
- [ ] Amazon EFS

# What attaching an EBS volume to an EC2 instance, where must the volume be located?

- [ ] In any AWS region
- [ ] Should be at your physical service where you company placed
- [x] In the same AZ as the EC2 instance
- [ ] In the same VPC as the EC2 instance

# What is the keys difference between EBS and EFS in terms of Availability Zones?

- [ ] EFS is only available in a single AZ
- [ ] Neither service supports multiple AZs
- [x] EBS is locked to a single AZ, while EFS data is stored redundantly across multiple AZs.
- [ ] EBS can work across multiple AZs by default

# A company is building a distributed ML training system on multiple EC2 instances. The training nodes must access the same dataset at the same time. The workload does not require ultra-low latency like a relational database, but it does require shared access and scalability. Which storage option is the best fit?

- [ ] Amazon EBS
- [x] Amazon EFS
- [ ] Amazon S3
- [ ] Instance store

# How does EFS scale its storage capacity?

- [ ] Manually increase the size in the AWS console
- [x] It scales automatically as you add or remove files
- [ ] It scales based on the number of EC2 instances attached
- [ ] You must use Auto Scaling Groups to scale EFS

# Which ELB is best suited for handling millions of requests per second while maintaining ultra-low latency?

- [ ] Application Load Balancer
- [x] Network Load Balancer
- [ ] Classic Load Balancer
- [ ] Amazon Load Balancer

# A company needs storage for a content platform where data is stored as files in folders, accessed by file path, and shared by several application servers. Which storage type and AWS service best match this requirement?

- [ ] Block storage — Amazon EBS
- [x] File storage — Amazon EFS
- [ ] Object storage — Amazon S3
- [ ] Archival storage — Amazon Glacier

# Which statement is TRUE about object storage?

- [ ] It is best for high-transaction relational databases because it supports partial in-place
edits efficiently.
- [ ] It has lower latency than block storage and is the default choice for SQL databases.
- [x] It is cost-effective for massive datasets, supports rich metadata, and is suitable for backups
and AI/ML training sets.
- [ ] It is mainly designed for EC2 root volumes and ultra-low-latency workloads.

# A solutions architect is choosing between S3, EBS, and EFS for a workload. The workload is single-instance, random I/O heavy, latency-sensitive, and behaves like a transactional system. Which is the best choice?

- [ ] Amazon S3
- [ ] Amazon EFS
- [x] Amazon EBS
- [ ] Amazon S3 Glacier Instant Retrieval

# Which service allows multiple EC2 instances to access the same file system simultaneously across different AZs ?

- [ ] EBS
- [x] EFS
- [ ] ELB
- [ ] ENI

# Elastic block storage (EBS), Elastic network interfaces (ENI), Elastic load balancer (ELB), Elastic file system (EFS). Which service here, its setup default can only work with a single EC2 instance?

- [x] EBS
- [ ] ENI
- [ ] ELB
- [ ] EFS

# A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3. Which AWS service can meet these requirements?

- [ ] Amazon Inspector
- [x] Amazon Macie
- [ ] Amazon GuardDuty
- [ ] AWS Secrets Manager

# What kind of database is Amazon DynamoDB?

- [ ] Document database
- [ ] Relational database
- [x] NoSQL database
- [ ] Graph database

# Which Amazon S3 storage class has the lowest cost?

- [ ] S3 Intelligent-Tiering
- [ ] S3 Standard
- [x] S3 Glacier Deep Archive
- [ ] S3 One Zone-IA

# What is AWS EFS?

- [x] AWS Elastic File System
- [ ] AWS Efficient File System
- [ ] AWS Enterprise File System
- [ ] AWS External File Storage

# Economies of scale continually reduce AWS Cloud pricing.

- [ ] False
- [x] True
- [ ] Only for enterprise customers
- [ ] Only for storage services

# Which database is ideal for large organizations and enterprises?

- [ ] PostgreSQL
- [ ] MySQL
- [x] Amazon Aurora
- [ ] SQLite

# A company needs to run a large-scale data analysis workload that is fault-tolerant and can handle interruptions. Which Amazon EC2 purchasing option provides the lowest cost (up to 90

- [ ] On-Demand Instances
- [x] Reserved Instances
- [ ] Spot Instances
- [ ] Dedicated Hosts

# What is the primary advantage of using AWS Fargate for containerized applications?

- [ ] It provides a physical server fully dedicated to a single customer.
- [ ] It allows you to choose and manage the specific EC2 instances that run your containers.
- [x] It is a serverless compute engine for containers that removes the need to provision or
manage servers.
- [ ] It acts as a static public IPv4 address for your container environment.

# A developer wants to automatically install software packages and update the operating system the first time an Amazon EC2 instance starts. Which feature should they use?

- [ ] Amazon Machine Image (AMI)
- [x] EC2 User Data
- [ ] Security Groups
- [ ] Elastic Block Store (EBS) Snapshots

# A developer accidentally terminated an EC2 instance. They noticed that the root volume (which contained the operating system) was automatically deleted, but an additional data volume attached to the same instance was kept. What is the default behavior of Amazon EBS regarding the DeleteOnTermination attribute?

- [ ] Both root and additional volumes are deleted by default.
- [ ] Both root and additional volumes are kept by default.
- [x] The root volume is deleted by default, but additional volumes are kept by default.
- [ ] The root volume is kept by default, but additional volumes are deleted by default.

# You are building a serverless web application. You have written your backend logic using AWS Lambda. You now need to expose these Lambda functions as RESTful APIs so your frontend application can call them over HTTPS. Which AWS service should you use to create and manage these APIs?

- [x] Amazon API Gateway
- [ ] Elastic Load Balancer (ELB)
- [ ] AWS Step Functions
- [ ] Amazon Route 53

# A media production company has petabytes of raw 4K video footage. Once a video project is finished, the raw footage is archived. The company wants the absolute lowest storage cost possible. If an old project needs to be reopened, the video editors are completely fine waiting up to 12 hours for the files to be restored. Which Amazon S3 storage class should they use?

- [ ] S3 Standard-IA
- [ ] S3 Glacier Instant Retrieval
- [ ] S3 Glacier Flexible Retrieval
- [x] S3 Glacier Deep Archive

# You are configuring an S3 Lifecycle Rule to automate storage costs. Your goal is to keep objects in S3 Standard for the first 30 days. After 30 days, the objects are infrequently accessed but need immediate retrieval. After 365 days, the objects are kept only for compliance and can take a day to retrieve. Which transition sequence is valid and most cost-effective?

- [ ] S3 Standard S3 Glacier Deep Archive S3 Standard-IA
- [ ] S3 Standard S3 Intelligent-Tiering S3 One Zone-IA
- [x] S3 Standard S3 Standard-IA S3 Glacier Deep Archive
- [ ] S3 Standard S3 Glacier Flexible Retrieval S3 Glacier Instant Retrieval

# The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?

- [ ] S3 Intelligent-Tiering.
- [ ] AWS Marketplace.
- [x] Amazon S3 Glacier Deep Archive.
- [ ] Amazon EBS.

# If an instance store reboots, does the data persist?

- [ ] Yes, always
- [x] No
- [ ] Only for Linux instances
- [ ] Only if backed up

# A company needs to physically migrate 50 Petabytes of data from their local data center to AWS because transferring it over their internet connection would take several years. Which service is designed for this?

- [ ] AWS Storage Gateway
- [ ] AWS Snowball Edge
- [x] AWS Snowmobile
- [ ] AWS Direct Connect

# Which services are parts of the AWS serverless platform?

- [ ] Amazon EC2, Amazon S3, Amazon Athena.
- [ ] Amazon Kinesis, Amazon SQS, Amazon EMR.
- [x] AWS Step Functions, Amazon DynamoDB, Amazon SNS.
- [ ] Amazon Athena, Amazon Cognito, Amazon EC2.

# Which of the following are characteristics of Amazon S3?

- [ ] A global file system
- [x] A cloud-based object storage service
- [ ] A local file store
- [ ] A network file system

# A startup wants to store secondary backup copies of data that can be easily recreated if lost at the absolute lowest cost possible, without needing high resilience. Which storage class is best?

- [ ] Amazon S3 Standard
- [x] Amazon S3 One Zone-IA
- [ ] Amazon S3 Standard-IA
- [ ] Amazon S3 Intelligent-Tiering

# A global corporation has a predictable baseline of compute usage across multiple AWS Regions. They use a mix of EC2 instances, AWS Lambda, and AWS Fargate. Which purchasing model provides the highest level of flexibility to cover all these services?

- [ ] Standard Reserved Instances
- [ ] EC2 Instance Savings Plans
- [x] Compute Savings Plans
- [ ] Regional Reserved Instances

# A solutions architect is designing a system for a tightly coupled scientific simulation that requires extremely low-latency communication between nodes using a Cluster Placement Group. What is a true limitation of this strategy?

- [x] It cannot span across multiple Availability Zones
- [ ] It is limited to a maximum of 7 instances per Region
- [ ] It requires the use of Dedicated Hosts for all instances.
- [ ] It only supports T-series instance types

# AWS Elastic Block Store Snapshot is

- [ ] Differential data backup
- [ ] Full data backup
- [x] Incremental data backup
- [ ] Manual data copy

# What is the maximum amount of RAM you can allocate to an AWS Lambda function?

- [x] 10 GB
- [ ] 3 GB
- [ ] 1 GB
- [ ] 32 GB

# Which Amazon EFS storage class offers the lowest “first byte read latency”?

- [x] EFS Standard
- [ ] EFS Infrequent Access (IA)
- [ ] EFS Archive
- [ ] They all have the same latency.

# Which AWS storage service is designed to transfer petabytes of data in and out of the cloud?

- [x] AWS Snowmobile
- [ ] AWS Redshift
- [ ] Amazon S3
- [ ] AWS DataSync

# Which tool lets you visualize and manage your AWS costs?

- [x] AWS Cost Explorer
- [ ] AWS Budgets
- [ ] AWS Price Calculator
- [ ] AWS Billing Dashboard

# Which service lets you run code without managing servers

- [ ] AWS ECS
- [x] AWS Lambda
- [ ] Amazon EC2 Auto Scaling
- [ ] AWS Fargate

# Which of the following factors directly affects the training speed of a machine learning model (ML Training Speed)?

- [ ] Monthly storage cost
- [ ] Maximum capacity of a single disk
- [ ] User API interface
- [x] Storage system I/O performance

# Which AWS service provides a history of application data changes with immutability?

- [x] AWS Quantum Ledger Database
- [ ] AWS Neptune
- [ ] AWS DocumentDB
- [ ] AWS ElastiCache

# Why is AWS Glacier considered NOT suitable for directly training machine learning models?

- [x] Extremely high latency
- [ ] Storage cost is too expensive
- [ ] Does not support log data storage
- [ ] Low data durability

# Which AWS storage service is recommended for distributed training thanks to its high scalability and moderate speed?

- [ ] Amazon EBS
- [x] Amazon EFS
- [ ] Amazon S3 Glacier
- [ ] Local Storage Device

# In the scenario of enabling the Hibernate feature for an EC2 instance, which of the following technical requirements is mandatory for the root volume?

- [ ] The root volume must have a size at least twice the instance’s RAM.
- [ ] The root volume must be an Instance Store volume to ensure RAM write speed.
- [x] The root volume must be an encrypted Amazon EBS volume.
- [ ] The root volume must have the "Delete on Termination"attribute set to false

# A solutions architect needs to run a cluster of 7 EC2 instances such that each instance is placed on a separate physical hardware rack within the same Availability Zone to avoid simultaneous failures. Which type of Placement Group best meets this requirement?

- [ ] Dedicated Placement Group
- [ ] Cluster Placement Group
- [ ] Partition Placement Group
- [x] Spread Placement Group

# A company runs a web application on Amazon EC2. Traffic spikes during peak hours and drops at night. The company wants a solution that automatically adjusts the number of instances based on actual load while minimizing operational effort. Which solution is the most appropriate?

- [ ] Use Scheduled Scaling
- [x] Use Target Tracking Scaling
- [ ] Manually increase instance size
- [ ] Use Reserved Instances

# What is the key difference in hardware control capabilities between Dedicated Hosts and Dedicated Instances?

- [ ] Dedicated Instances allow users to choose the exact physical rack location in the data
center.
- [ ] Both provide the same level of control over the physical server’s BIOS configuration.
- [ ] Dedicated Instances always remain on the same physical hardware even after a Stop/Start
operation.
- [x] Dedicated Hosts provide visibility and control over instance placement on physical servers
to meet software licensing requirements (BYOL).

# An application requires high availability and fault tolerance. If one instance fails, traffic must automatically be routed to another instance, and the system must self-recover. Which solution is the most appropriate?

- [ ] Use EC2 only
- [ ] EC2 + Auto Scaling
- [ ] EC2 + Load Balancer
- [x] EC2 + Load Balancer + Auto Scaling

