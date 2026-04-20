---
title: Module 22: Extra Practice Questions (Part 11)
tags: []
domains: ["AWS"]
---

# Which AWS service is best suited for storing a large amount of unstructured data (images, videos, documents) with high durability and low cost?

- [ ] Amazon EBS
- [x] Amazon S3
- [ ] Amazon EFS
- [ ] EC2 Instance Store

# Which AWS storage type is best suited for running a relational database that requires high I/O performance on Amazon EC2?

- [ ] Amazon S3
- [x] Amazon EBS
- [ ] Amazon EFS
- [ ] Amazon Glacier

# Which component acts as a virtual firewall to control inbound and outbound traffic for EC2 instances?

- [ ] Route Table
- [x] Security Group
- [ ] IAM
- [ ] Elastic Load Balancer

# What is the primary function of ’User Data’ in Amazon EC2 when configuring a new instance launch?

- [ ] To store personal user files in the cloud
- [x] To run a bootstrap script to configure the server
- [ ] To define firewall rules for the instance
- [ ] To monitor CPU and memory usage

# What is the primary function of an Amazon Machine Image (AMI)?

- [x] To serve as a preconfigured template for launching EC2 instances
- [ ] To act as a firewall for incoming network traffic
- [ ] To provide persistent block storage for running instances
- [ ] To automatically scale the number of instances based on demand

# How can you encrypt an existing, unencrypted Amazon EBS volume?

- [ ] Change the setting directly in the AWS Console for that volume
- [x] Take a snapshot and copy that snapshot with encryption enabled
- [ ] Use a script to encrypt the data while the instance is running
- [ ] Attach an IAM policy to force the system to automatically encrypt this volume

# What is the primary difference between the EC2 Launch Type and the Fargate Launch Type in Amazon ECS?

- [ ] Fargate requires the user to install the ECR Agent manually
- [x] Fargate is a serverless architecture that removes the need to manage EC2 instances
- [ ] Only the EC2 Launch Type supports Docker containers
- [ ] The EC2 Launch Type is always more cost-effective for short-lived, small-scale tasks

# Which AWS service allows you to run code without provisioning or managing servers (Serverless compute)?

- [ ] Amazon EC2
- [ ] Amazon ECS
- [ ] Amazon EBS
- [x] AWS Lambda

# A company has an application with unpredictable traffic spikes and wants a database solution where they only pay for the exact read and write requests they perform. Which Amazon DynamoDB capacity mode should they choose?

- [ ] Provisioned Mode
- [x] On-Demand Mode
- [ ] Standard-IA Mode
- [ ] Global Tables Mode

# A company hosts a video streaming platform with its main servers located in the US. However, users in Asia frequently experience high latency and slow video loading times. Which AWS infrastructure component is specifically designed to cache content closer to these users to reduce latency?

- [ ] Availability Zones
- [ ] AWS Regions
- [x] Edge Locations
- [ ] AWS Outposts

# A startup needs to provision an EC2 instance to run a database for a long-term duration (at least 3 years). They want to achieve the lowest possible cost but must guarantee that the instance will never be interrupted by AWS. Which purchasing option should they recommend?

- [ ] EC2 Spot Instance
- [ ] EC2 On-Demand Instance
- [ ] EC2 Dedicated Host
- [x] EC2 Reserved Instance (RI)

# A developer is designing an Amazon DynamoDB table to store user profiles and session data. What is the maximum allowed size for a single item (row) in this table?

- [ ] 128 KB
- [ ] 256 KB
- [x] 400 KB
- [ ] 1 MB

# A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?

- [ ] Scaling the web application and services developed with Docker
- [ ] Provisioning or scheduling containers to run on clusters and maintain their availability
- [x] Performing hardware maintenance in the AWS facilities that run the AWS Cloud
- [ ] Managing the guest operating system, including updates and security patches

# Where can you store files in AWS?

- [x] Amazon EFS
- [ ] Amazon SNS
- [ ] Amazon ECS
- [ ] Amazon EMR

# Which EC2 storage option provides temporary block storage located on the physical host machine and loses its data if the instance is stopped or terminated?

- [ ] Amazon Elastic Block Store (Amazon EBS)
- [ ] Amazon Elastic File System (Amazon EFS)
- [x] EC2 Instance Store
- [ ] Amazon S3

# Using Amazon EC2 falls under which of the following cloud computing models?

- [ ] Iaas SaaS
- [x] IaaS
- [ ] SaaS
- [ ] PaaS

# Amazon Glacier is an Amazon S3 storage class that is suitable for storing which type of data?

- [x] Active archives
- [ ] Dynamic websites’ assets
- [ ] Active databases
- [ ] Cached data

# Which EC2 placement group strategy divides instances into logical segments, ensuring that each segment runs on separate underlying hardware racks to support large distributed systems like Hadoop or Cassandra?

- [ ] Cluster Placement Group
- [ ] Spread Placement Group
- [x] Partition Placement Group
- [ ] Dedicated Hosts

# Which is not a type of Storage in AWS services?

- [ ] Block Storage
- [ ] File Storage
- [x] Disk Storage
- [ ] Object Storage

# Which feature allows you to fully initialize an Amazon EBS volume created from a snapshot to eliminate initial read latency?

- [ ] Snapshot Archive
- [ ] Recycle Bin for Snapshots
- [x] Fast Snapshot Restore (FSR)
- [ ] Cross-Region Snapshot Copy

# When deploying containers using Amazon Elastic Container Service (Amazon ECS), which launch type allows you to run tasks on AWS-managed infrastructure without provisioning or managing the underlying EC2 instances?

- [ ] EC2 Launch Type
- [x] Fargate Launch Type
- [ ] External Launch Type
- [ ] Kubernetes Launch Type

# What must be enabled as a prerequisite before you can set up Amazon DynamoDB Global Tables for cross-region data replication?

- [ ] DynamoDB Accelerator (DAX)
- [ ] Amazon Kinesis Data Streams
- [ ] On-Demand Capacity Mode
- [x] DynamoDB Streams

# Which of the following procedures will help reduce your Amazon S3 costs?

- [ ] Use the Import/Export feature to move old files automatically to Amazon Glacier
- [x] Use the right combination of storage classes based on different use cases
- [ ] Pick the right Availability Zone for your S3 bucket
- [ ] Move all the data stored in S3 standard to EBS

# If an Application Load Balancer is configured to route incoming traffic based on the domain name, such as routing one.example.com to Service A and other.example.com to Service B, which routing method is being utilized?

- [x] Host-based routing
- [ ] Request-based routing
- [ ] Path-based routing
- [ ] Header-based routing

# An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. Which AWS storage service should be used?

- [ ] Amazon EBS
- [x] Amazon EFS
- [ ] Amazon S3
- [ ] AWS Artifact

# Which Amazon API Gateway endpoint type is designed for worldwide users by routing requests through CloudFront Edge Locations to reduce latency?

- [ ] Regional
- [x] Edge-Optimized
- [ ] Private
- [ ] Global

# Which of the following is a key limitation of object storage systems like Amazon S3?

- [ ] They cannot store massive datasets cost-effectively.
- [ ] They provide very limited metadata capabilities.
- [ ] They require a rigid, hierarchical folder structure to operate.
- [x] They do not support partial edits; the entire object must be overwritten to make a change.

# A data science team is setting up a shared ML dataset for distributed cluster training. Which storage option provides the moderate speed and high scalability required for this specific workload?

- [x] Amazon Elastic File System (Amazon EFS)
- [ ] Amazon S3 Glacier
- [ ] Relational Database running on Amazon EBS
- [ ] Single Disk Storage

# How does block storage manage and locate data on the backend?

- [ ] By nesting files within a hierarchy of directories and folders using file paths.
- [x] By breaking data into fixed-size blocks, each with a unique address stored in a mapping table.
- [ ] By using a flat address space with globally unique identifiers and customizable metadata.
- [ ] By organizing data into relational tables with primary and foreign keys.

# A company needs to process large-scale log files where the lowest storage cost is the primary priority, and the data is accessed infrequently. Which Amazon EBS volume type is most appropriate?

- [ ] Provisioned IOPS SSD (io1)
- [ ] General Purpose SSD (gp3)
- [x] Cold HDD (sc1)
- [ ] Throughput Optimized HDD (st1)

# When configuring an Amazon S3 Lifecycle rule to transition objects to a cheaper storage class, what is the recommended minimum object size to transition so that the transition costs do not outweigh the storage savings?

- [ ] 16 KiB
- [x] 128 KiB
- [ ] 1 MiB
- [ ] 1 GiB

# Which component is a pre-configured template (including operating system, software, etc.) used to launch an EC2 instance?

- [ ] EBS Snapshot
- [x] Amazon Machine Image (AMI)
- [ ] User Data
- [ ] Security Group

# You want to execute automated commands (such as installing applications) as soon as an EC2 instance is launched for the first time. Which feature should you use?

- [ ] Instance Metadata
- [ ] Elastic IP
- [x] User Data
- [ ] Lifecycle Rules

# Which EC2 instance type is designed for workloads that require heavy data processing in memory (RAM), such as distributed databases?

- [ ] Compute Optimized
- [x] Memory Optimized
- [ ] Storage Optimized
- [ ] General Purpose

# You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?

- [ ] AWS Lambda.
- [ ] AWS Config.
- [x] Amazon CloudWatch.
- [ ] AWS CloudTrail.

# A company is expecting a short-term spike in internet traffic for its application. During the traffic increase, the application cannot be interrupted. The company also needs to minimize cost and maximize flexibility. Which Amazon EC2 instance type should the company use to meet these requirements?

- [x] On-Demand Instances
- [ ] Spot Instances
- [ ] Reserved Instances
- [ ] Dedicated Hosts

# Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?

- [ ] Amazon Glacier.
- [ ] AWS Storage Gateway.
- [x] Amazon S3.
- [ ] Amazon EBS.

# A company runs a data analytics platform that processes large amounts of data every night. The workload is fault-tolerant and can handle interruptions. The company wants to minimize costs as much as possible.

- [ ] On-Demand Instances
- [ ] Reserved Instances
- [ ] Savings Plans
- [x] Spot Instances

# Which of the following statement about Amazon EC2 Security Groups is TRUE?

- [ ] A security group can only be associated with one EC2 instance
- [ ] Security group rules require a reboot of the instance to take effect
- [x] An EC2 instance can be associated with multiple security groups
- [ ] Security groups only control inbound traffic

# A company is running an application on an Amazon EC2 instance in Region

- [ ] The company wants to deploy the same application in Region B with identical configuration, including OS, installed software, and settings, for disaster recovery purposes. What is the MOST appropriate way to achieve this? A. Create a snapshot of the EC2 instance and directly launch it in Region B
- [x] Create an AMI from the EC2 instance, copy the AMI to Region B, and launch a new
instance from it
- [ ] Export the EC2 instance as a file and manually import it into Region B
- [ ] Use Auto Scaling to automatically replicate the instance to another region

# A machine learning team is training models on large datasets stored in Amazon S3. The training jobs run on EC2 instances that repeatedly read the same subset of data during each training epoch. Which storage strategy will most effectively reduce network bottlenecks and improve training performance without changing the data lake architecture?

- [x] Use EBS or instance store as a local cache of frequently accessed S3 objects
- [ ] Use Amazon S3 with S3 Select for every training batch read
- [ ] Move all data from S3 to dedicated EBS volumes before each training job
- [ ] Migrate all S3 data to EFS and mount it on training instances

# A distributed application running across hundreds of EC2 instances accesses the same EFS file system. You observe increased latency at scale. Which configuration change is most appropriate to improve scalability?

- [x] Switch the EFS performance mode from General Purpose to Max I/O
- [ ] Add more EFS mount targets in the same Availability Zone
- [ ] Increase the size of the EFS file system by writing dummy data
- [ ] Convert the EFS file system to One Zone storage class

# You run a big data analytics workload on EC2 that processes large, sequentially accessed files. The workload is cost-sensitive and can tolerate moderate latency but needs high throughput. Which Amazon EBS volume type is most cost-effective while still meeting these needs?

- [ ] Cold HDD (sc1)
- [x] Throughput Optimized HDD (st1)
- [ ] Provisioned IOPS SSD (io2)
- [ ] General Purpose SSD (gp3)

# You have deployed a web application on multiple Amazon EC2 instances behind an Application Load Balancer. Traffic fluctuates significantly throughout the day. You want to: Automatically scale based on demand; Reduce cost during low traffic periods; Ensure high availability without interruption. Which solution is MOST optimal?

- [ ] Use an Auto Scaling Group with Scheduled Scaling based on fixed times
- [x] Use an Auto Scaling Group with Dynamic Scaling (target tracking) based on CPU
utilization
- [ ] Use a fixed number of On-Demand instances and manually scale when needed
- [ ] Use only Spot Instances without any On-Demand instances

# You store log files in Amazon S3: 0–30 days -> frequently accessed; 30–90 days -> infrequently accessed; 90 days -> rarely accessed but must be retained long-term. You want to minimize cost as much as possible while still allowing retrieval when needed. Which strategy is the best fit?

- [ ] Keep all data in S3 Standard
- [x] Lifecycle: Standard →Standard-IA →Glacier Flexible Retrieval
- [ ] Lifecycle: Standard →One Zone-IA →Glacier Deep Archive
- [ ] Lifecycle: Standard →Intelligent-Tiering only (no further transitions)

# You are running a mission-critical relational database on Amazon EC2. The workload has the following characteristics: Requires consistently high IOPS; Low latency is critical; Cannot tolerate performance variability; Data durability is very important. Which Amazon EBS volume type is the MOST appropriate?

- [ ] gp3 (General Purpose SSD)
- [x] io2 (Provisioned IOPS SSD)
- [ ] st1 (Throughput Optimized HDD)
- [ ] sc1 (Cold HDD)

# A company is designing a storage architecture for its AI platform. They need to handle: (1) raw data ingestion at petabyte scale with low cost, (2) feature serving with low latency and consistency between training and serving, and (3) experiment metadata tracking with easy querying and lineage tracking. Based on the Storage Layer in AI Systems, which combination of storage layers and their associated tools correctly matches all three requirements?

- [x] Raw Data Storage (Data Warehouse/Data Lake) →Feature Storage (Feast) →Metadata
Storage (MLflow)
- [ ] Raw Data Storage (Pinecone) →Feature Storage (FAISS) →Metadata Storage (Feast)
- [ ] Raw Data Storage (Feast) →Feature Storage (MLflow) →Metadata Storage (Pinecone)
- [ ] Raw Data Storage (MLflow) →Feature Storage (Pinecone) →Metadata Storage (FAISS)

# A machine learning team needs to store a shared NLP dataset that will be used for distributed training across multiple compute instances in different Availability Zones. The dataset needs moderate read speed and high scalability. Based on the storage impact analysis for ML training, which AWS storage service and reasoning is most appropriate?

- [ ] Amazon S3 — because it offers the lowest latency for ML I/O operations
- [ ] Amazon EBS — because it supports multi-attach across Availability Zones for all volume
types
- [ ] AWS Glacier — because it provides the most cost-effective solution for large datasets
- [x] Amazon EFS — because it offers moderate speed, high scalability, and is suitable for
distributed training with shared access across AZs

# Regarding Amazon S3 Storage Classes, what happens when you configure Lifecycle Rules to transition objects automatically?

- [ ] Objects can only move from Glacier Deep Archive to Standard
- [x] Objects can transition from Standard →Standard IA →Glacier tiers, and this movement
can be automated using Lifecycle Rules
- [ ] Lifecycle Rules only apply to objects smaller than 128 KB
- [ ] Transition between storage classes requires manual intervention and cannot be automated

# In the AI system storage pipeline, what are the key requirements for Embedding Storage?

- [ ] Version control, reproducibility, and deployment tracking
- [ ] Massive scalability (TB →PB), low cost, and high durability
- [x] Fast similarity search (ANN), semantic retrieval, and low latency
- [ ] Query experiments easily, track lineage, and debug models

