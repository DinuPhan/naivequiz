---
title: Module 20: Extra Practice Questions (Part 9)
tags: []
domains: ["AWS"]
---

# An application needs to perform three independent tasks whenever an ’Order Placed’ event occurs: 1) Send a confirmation email, 2) Update the Inventory database, 3) Send data to a Machine Learning model for fraud detection. Each task has different processing speeds and failure rates. What is the most ’Simple , Resilient and Scalable’ architecture?

- [ ] RDS Read Replicas for each device
- [ ] A single SQS Queue that al 3 services poll from
- [x] SNS Topic fanning out to three separate SQS Queues
- [ ] Amazone Kinesis Data Streams

# A financial company needs to scale its database’s read performance because of a massive increase in reporting queries. They do not want to impact the performance of the primary write database. What should they implement?

- [x] RDS Read Replicas
- [ ] Vertical Scaling (Increasing Instance Size)
- [ ] RDS Multi-AZ Deployment
- [ ] AWS DMS

# A developer is building a serverless application that needs to store simple profile data (User ID, Name, Preferences). The database must handle millions of requests per second with consistent single-digit millisecond performance. Which service is best?

- [ ] Amazon Redshift.
- [ ] Amazon Aurora.
- [x] Amazon DynamoDB.
- [ ] Amazon RDS PostgreSQL.

# A high-frequency trading firm requires a dedicated, consistent network connection between their on-premises data center and AWS that does not traverse the public internet. Which service should they choose?

- [ ] AWS Site-to-Site VPN.
- [ ] Amazon CloudFront.
- [ ] VPC Peering.
- [x] AWS Direct Connect

# How is a Virtual Private Cloud (VPC) best defined within the context of AWS?

- [ ] A physical data centre exclusively reserved for a single organisation’s hardware.
- [x] A logically isolated section of the AWS Cloud where resources can be launched in a defined
virtual network.
- [ ] A public subnet that automatically exposes all EC2 instances to the internet by default.
- [ ] A global network that connects all AWS Regions without the need for IP addressing.

# Which component is mandatory for a subnet to be classified as a ’Public Subnet’?

- [ ] A /32 CIDR block that locks all incoming traffic.
- [x] A route to the internet via an Internet Gateway (IGW).
- [ ] The presence of a PostgreSQL database instance.
- [ ] A direct connection to a private data centre via VPN.

# if a CIDR block has a /28 suffix, how many ’free’ bits remain for host addresses?

- [ ] 2 bits
- [ ] 16 bits
- [x] 4 bits
- [ ] 8 bits

# An enterprise is expanding from 5 VPCs to over 200 VPCs across multiple AWS accounts. They need to connect all VPCs to their on-premises data center via a single AWS Direct Connect gateway while avoiding the complexity of a ’mesh’ network of VPC Peering. Which service should they implement ?

- [ ] AWS PrivateLink.
- [x] AWS Transit Gateway.
- [ ] VPC Peering with transitive routing.
- [ ] Multiple Site-to-Site VPN tunnels.

# Per the AWS Shared Responsibility Model, management of which of the following AWS services is the responsibility of the customer?

- [ ] AWS Elastic Beanstalk
- [x] Amazon Elastic Compute Cloud (Amazon EC2)
- [ ] Amazon DynamoDB
- [ ] Amazon Simple Storage Service (Amazon S3)

# Which of the following will help you control the incoming traffic to an Amazon EC2 instance?

- [x] Security Group
- [ ] Network access control list (network ACL)
- [ ] AWS Resource Group
- [ ] Route Table

# Which of the following is the responsibility of the customer when running applications using AWS Lambda?

- [ ] Managing the physical servers where the Lambda function runs
- [ ] Configuring the networking infrastructure for the Lambda service
- [ ] Updating the operating system and runtime environment for Lambda functions
- [x] Writing and maintaining the function code and its dependencies

# A company is moving its on-premises application to AWS Cloud. The application uses in-memory caches for running custom workloads. Which Amazon Elastic Compute Cloud (Amazon EC2) instance type is the right choice for the given requirement?

- [x] Memory Optimized instance types
- [ ] Storage Optimized instance types
- [ ] Accelerated computing instance types
- [ ] Compute Optimized instance types

# A big data analytics company is moving its IT infrastructure from an on-premises data center to AWS Cloud. The company has some server-bound software licenses that it wants to use on AWS. As a Cloud Practitioner, which of the following EC2 instance types would you recommend to the company?

- [ ] Reserved Instance (RI)
- [x] Dedicated Host
- [ ] Dedicated Instance
- [ ] On-Demand Instance

# Which of the following is a serverless AWS service?

- [ ] Amazon Elastic Compute Cloud (Amazon EC2)
- [ ] AWS Elastic Beanstalk
- [ ] Amazon EMR
- [x] AWS Lambda

# A startup wants to provision an EC2 instance for the lowest possible cost for a long-term duration but needs to make sure that the instance would never be interrupted. As a Cloud Practitioner, which of the following options would you recommend?

- [ ] EC2 Spot Instance
- [x] EC2 Reserved Instance (RI)
- [ ] EC2 Dedicated Host
- [ ] EC2 On-Demand Instance

# Which of the following AWS services should be used to automatically distribute incoming traffic across multiple targets?

- [x] AWS Elastic Load Balancing (ELB)
- [ ] AWS Elastic Beanstalk
- [ ] Amazon OpenSearch Service
- [ ] AWS Auto Scaling

# Which of the following is the MOST cost-effective option to purchase an EC2 Reserved Instance (RI)?

- [ ] No upfront payment option with standard 1-year term
- [ ] All upfront payment option with the standard 1-year term
- [x] Partial upfront payment option with standard 3-years term
- [ ] No upfront payment option with standard 3-years term

# Which AWS technology/service helps you to scale your resources to match supply with demand while still keeping your cloud solution cost-effective?

- [ ] AWS Systems Manager
- [ ] AWS CloudFormation
- [ ] AWS Cost Explorer
- [x] AWS Auto Scaling

# Which of the following statements is INCORRECT about AWS Auto Scaling?

- [ ] You can automatically register new instances to a load balancer
- [ ] You can scale out and add more Amazon Elastic Compute Cloud (Amazon EC2) instances
to match an increase in demand as well as scale in and remove Amazon Elastic Compute Cloud (Amazon EC2) instances to match a reduced demand
- [ ] You can automatically remove unhealthy instances
- [x] You can automatically deploy AWS Shield when a DDoS attack is detected

# Which AWS service can be used to store, manage, and deploy Docker container images?

- [ ] Amazon Elastic Container Service (Amazon ECS)
- [ ] Amazon Elastic Compute Cloud (Amazon EC2)
- [x] Amazon Elastic Container Registry (Amazon ECR)
- [ ] AWS Lambda

# Which AWS service should be used when you want to run container applications, but want to avoid the operational overhead of scaling, patching, securing, and managing servers?

- [ ] AWS Lambda
- [ ] Amazon Elastic Compute Cloud (Amazon EC2)
- [ ] Amazon Elastic Container Service (Amazon ECS)- EC2 launch type
- [x] Amazon Elastic Container Service (Amazon ECS)- Fargate launch type

# A startup company decides to move from purchasing physical servers to using AWS cloud services. Instead of paying a large upfront investment to build a data center, they only pay monthly for the computing resources they actually use. Which core benefit of AWS cloud computing does this scenario illustrate?

- [ ] Stop guessing capacity (No need to predict resource capacity in advance)
- [x] Trade fixed expense for variable expense
- [ ] Go global in minutes
- [ ] Benefit from massive economies of scale

# A company wants to run its workload on Amazon EC2 instances for more than 1 year. This workload will run continuously. Which option offers a discounted hourly rate compared to the hourly rate of On-Demand Instances?

- [ ] AWS Graviton processor
- [ ] Dedicated Hosts
- [x] EC2 Instance Savings Plans
- [ ] Amazon EC2 Auto Scaling instances

# A company wants to automatically add and remove Amazon EC2 instances. The company wants the EC2 instances to adjust to varying workloads dynamically.

- [ ] Amazon DynamoDB
- [ ] Amazon EC2 Spot Instances
- [ ] AWS Snow Family
- [x] Amazon EC2 Auto Scaling

# Which design principle aligns with performance efficiency pillar of the AWS Well-Architected Framework?

- [x] Using serverless architectures
- [ ] Scaling horizontally
- [ ] Measuring the cost of workloads
- [ ] Using managed services

# A company runs a web application on Amazon EC2 instances using a fixed number of On-Demand instances. During peak hours, the application experiences high traffic and slow
response times. During off-peak hours, many instances remain underutilized, increasing costs. The company wants to optimize cost while maintaining high availability and performance. Which solution is the most appropriate?

- [ ] Use larger EC2 instance types to handle peak traffic at all times
- [x] Use Auto Scaling and distribute traffic using an Elastic Load Balancing
- [ ] Move all instances to Reserved Instances and keep a fixed number of servers
- [ ] Deploy the application in a single Availability Zone with more powerful instances

# Which of the following data transfers is completely FREE under the Amazon S3 pricing model?

- [ ] Data transferred out from S3 to the internet
- [x] Data transferred in to S3 from the internet
- [ ] Data transferred out from S3 to an EC2 instance in a different AWS Region.
- [ ] Inter-Region data transfer between S3 buckets

# Amazon S3 is designed for ’11 nines’ of durability. What does this mean?

- [ ] The data is available 99.999999999
- [x] The probability of losing an object is 0.000000001
- [ ] Data can be accessed from 11 different AWS Regions simultaneously.
- [ ] The system can handle 11 trillion requests per second.

# A developer needs to update a small piece of data within a 10GB file. Which storage type is LEAST efficient for this ’partial edit’ task?

- [ ] Block Storage
- [ ] File Storage
- [x] Object Storage
- [ ] Network Attached Storage (NAS)

# Which AWS service enables on-premises applications to seamlessly use AWS Cloud storage by caching frequently accessed data locally while storing all data in S3?

- [x] AWS Storage Gateway
- [ ] AWS Snowball
- [ ] AWS Direct Connect
- [ ] Amazon EFS

# Which of the following Amazon S3 storage classes has NO constraint on a minimum storage duration charge for objects?

- [ ] Amazon S3 Standard- Infrequent Access (S3 Standard- IA)
- [ ] Amazon S3 One Zone- Infrequent Access (S3 One Zone-IA)
- [ ] Amazon S3 Glacier Flexible Retrieval
- [x] Amazon S3 Standard

# A real-time stock trading platform needs a load balancer that can handle millions of TCP requests per second with ultra-low latency. Which ELB should they choose?

- [ ] Application Load Balancer
- [x] Network Load Balancer
- [ ] Gateway Load Balancer
- [ ] Classic Load Balancer

# Which EBS volume type supports Multi-Attach, allowing it to be attached to multiple EC2 instances simultaneously?

- [ ] Cold HDD (sc1)
- [ ] General Purpose SSD (gp2/ gp3)
- [ ] Throughput Optimized HDD (st1)
- [x] Provisioned IOPS SSD (io1/io2)

# Which feature eliminates the initial read latency when accessing a newly restored EBS volume from a snapshot?

- [ ] EBS Multi-Attach
- [ ] EBS Snapshot Archive
- [ ] Provisioned IOPS
- [x] Fast Snapshot Restore (FSR)

# A financial services company needs to retain its data for 10 years to meet compliance norms. Which Amazon Simple Storage Service (Amazon S3) storage class is the best fit for this use case considering that the data has to be stored at a minimal cost?

- [ ] Amazon S3 Standard-Infrequent Access (S3 Standard-IA)
- [x] Amazon S3 Glacier Deep Archive
- [ ] Amazon S3 Glacier Flexible Retrieval
- [ ] Amazon S3 Intelligent-Tiering

# A media company uses Amazon Simple Storage Service (Amazon S3) for storing all its data. Which storage class should it consider for cost-optimal storage of the data that has random access patterns?

- [ ] Amazon S3 Random Access (S3 Random-Access)
- [ ] Amazon S3 Standard (S3 Standard)
- [x] Amazon S3 Intelligent-Tiering (S3 Intelligent-Tiering)
- [ ] Amazon S3 Standard-Infrequent Access (S3 Standard-IA)

# An e-commerce company has its on-premises data storage on an NFS file system that is accessed in parallel by multiple applications. The company is looking at moving the applications and data stores to AWS Cloud. Which storage service should the company use to move their files to AWS Cloud seamlessly if the application is hosted on Amazon Elastic Compute Cloud (Amazon EC2) instances?

- [ ] Amazon Simple Storage Service (Amazon S3)
- [ ] AWS Storage Gateway
- [ ] Amazon Elastic Block Store (Amazon EBS)
- [x] Amazon Elastic File System (Amazon EFS)

# Which of the following is the correct statement regarding the AWS Storage services?

- [ ] Amazon Simple Storage Service (Amazon S3) is file based storage, Amazon Elastic Block
Store (Amazon EBS) is block based storage and Amazon Elastic File System (Amazon EFS) is object based storage
- [ ] Amazon Simple Storage Service (Amazon S3) is block based storage, Amazon Elastic Block Store (Amazon EBS) is object based storage and Amazon Elastic File System (Amazon EFS) is file based storage
- [x] Amazon Simple Storage Service (Amazon S3) is object based storage, Amazon Elastic Block Store (Amazon EBS) is block based storage and Amazon Elastic File System (Amazon EFS) is file based storage
- [ ] Amazon Simple Storage Service (Amazon S3) is object based storage, Amazon Elastic Block Store (Amazon EBS) is file based storage and Amazon Elastic File System (Amazon EFS) is block based storage

# A fleet of Amazon EC2 instances spread across different Availability Zones (AZ) needs to access, edit and share file-based data stored centrally on a system. As a Cloud Practitioner, which AWS service would you recommend for this use-case?

- [ ] Amazon Elastic Block Store (Amazon EBS)
- [ ] Amazon Simple Storage Service (Amazon S3)
- [ ] EC2 Instance Store
- [x] Amazon Elastic File System (Amazon EFS)

# A company wants a fully managed, flexible, and scalable file storage system, with low latency access, for its Windows-based applications. Which AWS service is the right choice for the company?

- [ ] Amazon Elastic File System (Amazon EFS)
- [x] Amazon FSx for Windows File Server
- [ ] Amazon Elastic Block Storage (Amazon EBS)
- [ ] Amazon FSx for Lustre

# Which Amazon Simple Storage Service (Amazon S3) storage class offers the lowest availability?

- [x] Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)
- [ ] Amazon S3 Glacier Flexible Retrieval
- [ ] Amazon S3 Intelligent-Tiering
- [ ] Amazon S3 Standard

# Which of the following is the best way to protect your data from accidental deletion on Amazon S3?

- [ ] Amazon S3 storage classes
- [x] Amazon S3 Versioning
- [ ] Amazon S3 lifecycle configuration
- [ ] Amazon S3 Transfer Acceleration (Amazon S3TA)

# What is Amazon EBS primarily used for?

- [ ] Hosting static websites.
- [ ] Creating a highly scalable data lake.
- [x] Providing Block Storage volumes for Amazon EC2 instances.
- [ ] Archiving compliance logs for 10 years.

# A research lab wants to optimize the caching capabilities for its scientific computations application running on Amazon Elastic Compute Cloud (Amazon EC2) instances. Which Amazon Elastic Compute Cloud (Amazon EC2) storage option is best suited for this use case?

- [x] Instance Store
- [ ] Amazon Elastic Block Store (Amazon EBS)
- [ ] Amazon Simple Storage Service (Amazon S3)
- [ ] Amazon Elastic File System (Amazon EFS)

# An IT company has deployed a static website on Amazon Simple Storage Service (Amazon S3), but the website is still inaccessible. As a Cloud Practioner, which of the following solutions would you suggest to address this issue?

- [x] Fix the Amazon S3 bucket policy
- [ ] Enable Amazon S3 versioning
- [ ] Disable Amazon S3 encryption
- [ ] Enable Amazon S3 replication

# Which of the following Amazon Simple Storage Service (Amazon S3) storage classes has NO constraint of a minimum storage duration charge for objects?

- [ ] Amazon S3 Standard-Infrequent Access (S3 Standard-IA)
- [ ] Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)
- [ ] Amazon S3 Glacier Flexible Retrieval
- [x] Amazon S3 Standard

# Which AWS service can be used to host a static website with the LEAST effort?

- [ ] Amazon S3 Glacier
- [x] Amazon Simple Storage Service (Amazon S3)
- [ ] AWS Storage Gateway
- [ ] Amazon Elastic File System (Amazon EFS)

# An organization would like to copy data across different Availability Zones (AZs) using Amazon EBS snapshots. Where are Amazon EBS snapshots stored in the AWS Cloud?

- [ ] Amazon Elastic Compute Cloud (Amazon EC2)
- [x] Amazon Simple Storage Service (Amazon S3)
- [ ] Amazon Relational Database Service (Amazon RDS)
- [ ] Amazon Elastic File System (Amazon EFS)

# Which Amazon EC2 pricing model provides the most significant discount for fault-tolerant and flexible workloads?

- [x] Spot Instances
- [ ] On-Demand Instances
- [ ] Reserved Instances
- [ ] Dedicated Hosts

# A media company needs to store millions of high-resolution images for their public website. These images must be accessible via a URL and the storage must scale automatically. Which service is best suited for this?

- [ ] Amazon EBS
- [ ] AWS Snowball
- [ ] Amazon EFS
- [x] Amazon S3

