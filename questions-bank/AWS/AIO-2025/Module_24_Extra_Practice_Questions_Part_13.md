---
title: Module 24: Extra Practice Questions (Part 13)
tags: []
domains: ["AWS"]
---

# What is Amazon DynamoDB Accelerator (DAX) capable of?

- [ ] Improves visualization of graphs
- [ ] Improves write performance
- [x] Improves read performance of NoSQL data
- [ ] Improves relational queries

# A company wants to run short-term workloads at the lowest possible cost and is willing to accept that instances may be terminated at any time. Which solution is the most appropriate?

- [ ] On-Demand
- [ ] Reserved
- [x] Spot Instances
- [ ] Dedicated Hosts

# What problem is the Amazon EBS “Snapshot Archive” feature specifically designed to solve?

- [ ] Increase the speed of creating new volumes from snapshots through Fast Snapshot Restore.
- [ ] Protect important snapshots from accidental deletion for up to one year.
- [ ] Automatically create incremental backups based on real-time data changes.
- [x] Optimize costs for infrequently accessed backups with an expected restore time of 24 to
72 hours.

# A company runs a steady workload on EC2 over a long period of time. They want to minimize costs as much as possible without changing the architecture. Which solution is the most appropriate?

- [ ] On-Demand Instances
- [ ] Spot Instances
- [x] Reserved Instances
- [ ] Auto Scaling

# A developer is using an AWS Lambda function to process large video files uploaded to S3. The function consistently takes 18 minutes to complete the processing. To ensure the function finishes successfully, which action should be taken?

- [ ] Increase the Memory (RAM) allocation to the maximum (10GB) to provide more CPU
power.
- [ ] Change the Timeout setting in the Lambda configuration to 20 minutes
- [x] Migrate the workload to Amazon EC2 or AWS Fargate.
- [ ] Enable Provisioned Concurrency to keep the function "warm"for longer processing.

# A company wants to quickly deploy multiple instances with the same configuration and pre-installed software, while minimizing setup time. Which solution is the best?

- [ ] Configure each instance via SSH
- [ ] Use snapshots each time
- [x] Create an AMI and use it in a Launch Template
- [ ] Manually copy files

# You are using an Amazon EBS Volume (General Purpose SSD) attached to an EC2 instance in Availability Zone (AZ) us-east-1a. There is a major power outage that takes down the entire us-east-1a zone. How can you access your data in another zone (us-east-1b)?

- [ ] EBS is a Regional service, so you can simply attach the volume to a new instance in
us-east-1b.
- [x] You cannot; EBS volumes are tied to a specific AZ. You must restore the data from a
Snapshot.
- [ ] AWS automatically replicates EBS volumes across all AZs in a Region for high availability.
- [ ] Use S3 Transfer Acceleration to move the EBS data to the new zone.

# How much time does the Auto Scaling Group need to take the next activates (default) ?

- [ ] 3 seconds
- [ ] 300 miliseconds
- [x] 300 seconds
- [ ] 3000 seconds

# What is an Amazon Machine Image (AMI) primarily used for?

- [ ] To automatically scale EC2 resources
- [x] To provide a preconfigured template to launch EC2 instances
- [ ] To distribute network traffic across instances
- [ ] To provide network-attached storage for EC2

# A company is using a third-party service to back up 10 TB of data to a tape library. The on-premises backup server is running out of space. The company wants to use AWS services for the backups without changing its existing backup workflows. Which AWS service should the company use to meet these requirements?

- [ ] Amazon Elastic Block Store (Amazon EBS)
- [x] AWS Storage Gateway
- [ ] Amazon Elastic Container Service (Amazon ECS)
- [ ] AWS Lambda

# A company runs a web application on multiple EC2 instances behind an Application Load Balancer (ALB). The instances need to share a common directory containing user-uploaded files with low latency. Which solution is the most appropriate?

- [ ] Store the files in Amazon S3 and mount it directly to the EC2 instances
- [ ] Use an EBS volume and attach it to all instances
- [x] Use Amazon EFS and mount it to all instances
- [ ] Store the files in the instance store

# Which feature allows you to run a startup script automatically when an EC2 instance first boots?

- [ ] Auto Scaling Groups
- [ ] AWS Step Functions
- [x] EC2 User Data
- [ ] Elastic Network Interfaces

# A company wants a fully managed Windows file server for its Windows-based applications. Which AWS service will meet this requirement?

- [x] Amazon FSx
- [ ] Amazon Elastic Kubernetes Service (Amazon EKS)
- [ ] Amazon Elastic Container Service (Amazon ECS)
- [ ] Amazon EMR

# A company has an uninterruptible application that runs on Amazon EC2 instances. The application constantly processes a backlog of files in an Amazon Simple Queue Service (Amazon SQS) queue. This usage is expected to continue to grow for years. What is the MOST cost-effective EC2 instance purchasing model to meet these requirements?

- [ ] Spot Instances
- [ ] On-Demand Instances
- [x] Savings Plans
- [ ] Dedicated Hosts

# A company needs to store millions of log files. The files will be accessed frequently during the first 30 days, after which they will rarely be accessed but must be retained for a long period. Which solution is the most cost-effective?

- [x] Amazon S3 Standard with a lifecycle policy transitioning to Glacier
- [ ] Amazon S3 Standard
- [ ] Amazon S3 Intelligent-Tiering
- [ ] Amazon EFS Infrequent Access

# A company plans to deploy containers on AWS. The company wants full control of the compute resources that host the containers. Which AWS service will meet these requirements?

- [ ] Amazon Elastic Kubernetes Service (Amazon EKS)
- [ ] AWS Fargate
- [x] Amazon EC2
- [ ] Amazon Elastic Container Service (Amazon ECS)

# Which EC2 purchasing option allows you to use spare AWS capacity at up to a 90

- [x] Spot Instances
- [ ] Eco Plans
- [ ] Savings Instances
- [ ] Savings Plans

# Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?

- [x] On-Demand Instances
- [ ] Reserved Instances
- [ ] Spot Instances
- [ ] Dedicated Instances

# A system needs to store static files (images, CSS, JavaScript) for a public website, with high scalability and CDN integration. Which solution is the best?

- [ ] EBS
- [ ] EFS
- [x] S3 + CloudFront
- [ ] Instance Store

# What is the maximum number of instances per Availability Zone allowed in a Spread Placement Group?

- [ ] 3
- [ ] 5
- [x] 7
- [ ] Based on developer’s settings

# A company needs to run a batch processing job. This task can be abruptly interrupted and resumed later without causing errors or affecting the final result. Which Amazon EC2 pricing model will provide the lowest cost for the company in this scenario?

- [ ] On-Demand Instances
- [x] Spot Instances
- [ ] Reserved Instances
- [ ] Dedicated Hosts

# What is the default termination behavior for the root EBS volume when an EC2 instance is terminated?

- [ ] It is kept and must be manually deleted.
- [ ] It is automatically backed up to a snapshot, then deleted.
- [x] It is automatically deleted.
- [ ] It is moved to the Recycle Bin.

# An e-commerce website frequently experiences unpredictable spikes in traffic. Which of the following architectures combines two AWS services to automatically increase the number of servers during high load and evenly distribute incoming traffic across them?

- [ ] AWS Lambda and Amazon Route 53
- [ ] Amazon CloudFront and Amazon S3
- [x] Amazon EC2 Auto Scaling and Elastic Load Balancing (ELB)
- [ ] AWS Elastic Beanstalk and Amazon RDS

# An engineer notices that Amazon EFS has higher latency than Amazon EBS when running database workloads. What is the main reason?

- [ ] Amazon EFS does not use SSDs
- [x] Amazon EFS is a network file system
- [ ] Amazon EFS is object storage
- [ ] Amazon EFS does not support caching

# Which EBS volume type provides the lowest-cost storage option and is designed specifically for infrequently accessed data?

- [ ] Provisioned IOPS SSD (io1/io2)
- [ ] Throughput Optimized HDD (st1)
- [ ] General Purpose SSD (gp2/gp3)
- [x] Cold HDD (sc1)

# A developer wants to automatically run a code script to compress an image immediately every time a user uploads a new image to Amazon S3. They only want to pay for the exact compute time the code consumes and do not want to provision, configure, or manage any servers. Which compute service is best suited for this requirement?

- [ ] Amazon EC2
- [ ] Amazon ECS
- [ ] AWS Elastic Beanstalk
- [x] AWS Lambda

# A developer wants to increase the CPU power for an AWS Lambda function. Which configuration change is required to achieve this?

- [ ] Switch the Lambda execution environment to a dedicated EC2 instance.
- [ ] Enable ’Turbo Mode’ in the Lambda configuration.
- [x] Increase the Memory (RAM) allocated to the function.
- [ ] Update the CPU allocation setting in the Lambda Console.

# In order to use the EC2 Hibernate feature, which requirement must be met for the root volume?

- [ ] The root volume must be stored on an Instance Store.
- [x] The root volume must be an encrypted Amazon EBS volume.
- [ ] The root volume must be detached before hibernating.
- [ ] The root volume must be backed by an EFS file system.

# Your company is planning to migrate its microservices architecture, currently packaged as Docker containers, to AWS. The technical team wants to use a fully managed container orchestration service that natively supports the open-source Kubernetes engine. Which service should they choose?

- [ ] Amazon Elastic Container Service (Amazon ECS)
- [x] Amazon Elastic Kubernetes Service (Amazon EKS)
- [ ] AWS Fargate
- [ ] AWS Elastic Beanstalk

# Which Amazon EC2 purchasing option is best suited for a 24/7 database workload with a predictable traffic pattern for the next 3 years?

- [ ] On-Demand Instances
- [ ] Dedicated Hosts
- [ ] Spot Instances
- [x] Reserved Instances (RI)

# A company is designing a shared storage solution for a containerized application running on multiple Amazon EC2 instances across different Availability Zones. The application requires a POSIX-compliant file system with automatic scaling and high availability. Which solution is the most appropriate?

- [ ] Use Amazon EBS volumes and attach them to all EC2 instances across Availability Zones
- [x] Use Amazon EFS and mount it on all EC2 instances
- [ ] Store data in Amazon S3 and access it using the S3 API
- [ ] Use instance store volumes for shared storage

# A company is looking for a storage solution that can store a vast amount of unstructured data, such as images and videos. Each item must be stored with a unique identifier and descriptive metadata. Which storage type should they use?

- [ ] Block Storage
- [ ] File Storage
- [x] Object Storage
- [ ] Single Disk Storage

# A company needs to store large volumes of AI training datasets (images and text files) that are accessed frequently during model training. The solution must scale to petabytes, minimize cost, and require no strict schema. Which AWS storage service best fits this requirement?

- [ ] Amazon EBS (gp3 volume)
- [ ] Amazon EFS Standard
- [x] Amazon S3 Standard
- [ ] Amazon RDS on EBS

# Compared to a Single Disk Storage, which of the following is a key characteristic of a Distributed Storage System (Max Scale)?

- [ ] Lowest Durability and High Speed
- [x] Very High Durability and Very High Throughput
- [ ] Low Cost and Limited Throughput
- [ ] Low Latency and High Speed

# Which OSI layer does the Application Load Balancer (ALB) operate at in AWS Structure ?

- [ ] Layer 3
- [ ] Layer 4
- [x] Layer 7
- [ ] Layer 2

# A developer is building a real-time AI recommendation system. They need a storage layer that ensures the data used for training is the same as the data used for serving (consistency) and requires low latency for instant predictions. Which storage layer should they use?

- [ ] Raw Data Storage
- [x] Feature Storage
- [ ] Metadata Storage
- [ ] Model Storage

# A data engineering team uploads log files to Amazon S3. The logs are actively analyzed for the first 30 days, rarely accessed from day 31–90, and must be archived cheaply from day 91 onward. Which feature of Amazon S3 automates this storage class transition?

- [ ] S3 Replication Rules
- [x] S3 Lifecycle Rules
- [ ] S3 Bucket Versioning
- [ ] S3 Access Points

# A developer is running a temporary test environment where Low Cost and Low Latency (High Speed) are the top priorities. Data loss is not a concern for this specific task. Which storage type should they choose?

- [ ] Storage Cluster
- [ ] Distributed Storage System
- [x] Single Disk Storage
- [ ] Object Storage

# A big data analytics platform requires Very High Throughput to process massive datasets and Very High Durability to ensure no data is ever lost. They can tolerate higher latency (slower response time). Which storage is most suitable?

- [ ] Single Disk Storage
- [x] Distributed Storage System (Max Scale)
- [ ] Block Storage
- [ ] Local Storage

# An AI startup stores 500 TB of raw training data in an S3 bucket. The data is accessed frequently for the first 30 days, but after that, the access pattern becomes unpredictable—some files are never touched again, while others are needed randomly for re-training. Which S3 storage strategy offers the best balance between cost-optimization and performance without manual intervention?

- [ ] S3 Standard-IA with a lifecycle policy to move data after 30 days.
- [ ] S3 One Zone-IA.
- [ ] S3 Glacier Deep Archive.
- [x] S3 Intelligent-Tiering.

# Which of the following storage options provides High Durability and High Throughput while maintaining Normal Latency (Medium Speed)?

- [ ] Single Disk Storage
- [ ] Distributed Storage System
- [x] Storage Cluster
- [ ] Tape Drive Storage

# A startup is building a distributed ML training cluster where multiple EC2 instances across different Availability Zones must simultaneously read from a shared dataset. Which AWS storage service is most appropriate?

- [ ] Amazon EBS io2
- [ ] Amazon S3 Glacier
- [ ] Amazon EBS gp3
- [x] Amazon EFS

# A student is reviewing AWS storage services. He learns that one service is designed to store data as objects in a flat structure, supports REST API access, and is highly scalable and durable for storing large datasets such as logs, backups, and AI training data. Which AWS service is being described?

- [x] Amazon S3 provides object storage with high scalability and durability.
- [ ] Amazon EBS provides block storage attached to EC2 for low latency workloads.
- [ ] Amazon EFS provides shared file storage for multiple EC2 instances.
- [ ] Amazon EC2 provides virtual servers for running applications.

# Your image data uploaded to S3 is frequently accessed during the first 30 days, then access gradually declines, and after 90 days, it is rarely used. You want to automate the transition of this data from S3 Standard to cheaper storage classes. Which feature should you use?

- [ ] S3 Replication Rules
- [x] S3 Lifecycle Rules
- [ ] EBS Snapshots
- [ ] EFS Infrequent Access

# In the structure of an object in object storage, which component contains descriptive information such as Content-Type and other custom attributes?

- [ ] Unique ID
- [x] Metadata
- [ ] Data
- [ ] Storage Pool

# In the architecture of an Object Storage system (like Amazon S3), what is the primary characteristic of its addressing system compared to traditional file systems?

- [ ] It uses a nested directory tree with file paths.
- [x] It uses a flat address space where each object has a unique identifier.
- [ ] It organizes data into fixed-size 4KB blocks with physical addresses.
- [ ] It relies on a Master Boot Record (MBR) to locate data across clusters.

# In the context of AI systems, what is a key requirement for ’Raw Data Storage’?

- [ ] Extremely low latency for real-time inference.
- [x] Massive scalability from TB -> PB and low cost.
- [ ] Strict schema enforcement and relational consistency.
- [ ] Frequent partial edits to individual data blocks.

# A startup is building an AI data lake to store raw datasets, processed outputs, model artifacts, and logs. The team wants virtually unlimited scalability, high durability, low-cost storage, and API-based access for cloud-native applications. Which AWS storage service is the best fit?

- [ ] Amazon EBS
- [ ] Amazon EFS
- [x] Amazon S3
- [ ] EC2 Instance Store

# A company stores compliance audit logs in Amazon S3. The logs are accessed only once or twice per year for regulatory review. The company wants to minimize storage costs while maintaining data durability. Which S3 storage class is MOST cost-effective for this use case?

- [x] S3 Glacier Deep Archive
- [ ] S3 Standard
- [ ] S3 Standard-IA
- [ ] S3 Intelligent-Tiering

# A developer configures a lifecycle rule on an Amazon S3 bucket to transition objects to Amazon S3 Glacier after 60 days. What will happen when objects reach 60 days?

- [ ] Objects are automatically deleted and permanently removed from the bucket storage.
- [x] Objects are automatically moved to Glacier and become cheaper but slower to access.
- [ ] Objects are copied to Glacier while the original objects remain unchanged in S3.
- [ ] Objects are compressed and stored in the same storage class with reduced cost.

