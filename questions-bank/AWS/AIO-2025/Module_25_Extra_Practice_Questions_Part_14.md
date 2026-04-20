---
title: Module 25: Extra Practice Questions (Part 14)
tags: []
domains: ["AWS"]
---

# A machine learning team runs training jobs on multiple Amazon EC2 instances across different Availability Zones, and all instances must read and update the same shared dataset using a standard file system interface without managing storage capacity manually. Which AWS storage service is the most appropriate?

- [ ] Amazon S3
- [x] Amazon EFS
- [ ] Amazon EBS
- [ ] Amazon S3 Glacier Deep Archive

# A company applies a lifecycle rule to transition objects to Amazon S3 Glacier after 90 days and to delete them after 365 days. What is the expected outcome?

- [ ] Objects remain in S3 Standard and only metadata is moved to Glacier after 90 days.
- [ ] Objects are archived in Glacier and cannot be deleted after the lifecycle policy is applied.
- [x] Objects are moved to Glacier after 90 days and automatically deleted after 365 days
- [ ] Objects are duplicated into Glacier and the original objects remain until deleted manually

# A company is designing a data pipeline where raw CSV logs are ingested daily. After 30 days, these logs are rarely accessed but must be retained for 3 years for regulatory compliance. If an audit occurs, the logs must be retrievable immediately without a restore step. What is the most cost-effective Amazon S3 Lifecycle configuration?

- [ ] Keep the objects in S3 Standard for 3 years, then expire them.
- [ ] Transition the objects to S3 Standard-IA after 30 days, then transition them to S3 Glacier
Flexible Retrieval after 3 years.
- [ ] Transition the objects to S3 Standard-IA after 30 days, then expire them after 1,095 days
(3 years).
- [x] Transition the objects to S3 Glacier Instant Retrieval after 30 days, then expire them
after 3 years.

# A developer needs block storage for an EC2 instance running a relational database requiring consistent sub-millisecond latency and more than 80,000 IOPS. Which Amazon EBS volume type should be selected?

- [ ] st1 (Throughput Optimized HDD)
- [ ] gp2 (General Purpose SSD)
- [ ] sc1 (Cold HDD)
- [x] io2 Block Express (Provisioned IOPS SSD)

# Why is Amazon Glacier considered unsuitable for active Machine Learning (ML) training tasks?

- [x] It has extremely high latency that prevents timely data access.
- [ ] It is too expensive for large datasets.
- [ ] It lacks the durability required for training datasets.
- [ ] It cannot store unstructured data like images or video.

# What is an AMI (Amazon Machine Image) used for?

- [ ] Monitoring EC2 performance
- [ ] Storing backups of databases
- [x] Launching EC2 instances with predefined configurations
- [ ] Encrypting EC2 data

# What is the main purpose of EC2 User Data?

- [ ] Store user credentials
- [x] Run scripts during instance startup
- [ ] Monitor CPU usage
- [ ] Assign IP addresses

# Which EC2 instance type is best suited for memory-intensive workloads like large databases?

- [x] Memory Optimized
- [ ] Compute Optimized
- [ ] General Purpose
- [ ] Storage Optimized

# Which statement about Elastic IP (EIP) is correct?

- [ ] It changes every time the instance restarts
- [ ] It is a private IP address
- [ ] It can only be used within a VPC
- [x] It is a static public IPv4 address

# What is a key characteristic of Amazon EBS?

- [ ] Data is lost when the instance stops
- [ ] It is shared across multiple instances by default
- [x] It provides persistent block storage
- [ ] It only works with serverless services

# Which EC2 pricing option provides the lowest cost but can be interrupted?

- [ ] On-Demand Instances
- [ ] Dedicated Hosts
- [ ] Reserved Instances
- [x] Spot Instances

# You successfully push a new Docker image tagged v2.0 to Amazon ECR, but your website still runs the old v1.0 code. You verify the v2.0 image is physically present in the ECR repository. What should you do to run your new v2.0 Docker Image to your website?

- [ ] Restart Run the Docker Image with v2.0 tag in Amazon ECR.
- [x] Update the Amazon ECS Task Definition to point to the v2.0 tag.
- [ ] Increase the storage quota for the Amazon ECR registry.
- [ ] Wait for Amazon ECR to automatically deploy the image to the servers.

# A research intern needs to process a short video dataset that is ’interrupt-tolerant’. Which purchasing model would minimize costs for this non-critical task?

- [ ] Reserved Instances
- [x] Spot Instances
- [ ] On-Demand Instances
- [ ] Dedicated Hosts

# What does horizontal scaling (scale out) mean?

- [x] Adding more instances to handle load
- [ ] Increasing CPU and RAM of one instance
- [ ] Reducing storage size
- [ ] Moving to a different region

# Which statement best describes AWS Lambda?

- [ ] Requires manual server provisioning
- [ ] Runs continuously like EC2
- [x] Executes code in response to events
- [ ] Only supports Java

# Which of the following workload types is least suited for Reserved Instances?

- [ ] Long-term workloads
- [x] Batch jobs
- [ ] Permanent workloads
- [ ] Non-changing workloads

# They need a specific EC2 configuration, want to save costs while ensuring high availability. Which EC2 pricing model is most appropriate?

- [ ] On-Demand Instances
- [x] Reserved Instances
- [ ] Savings Plans
- [ ] Spot Instances

# Which of the following is not a valid EC2 instance type?

- [x] Data Lake Optimized
- [ ] General Purpose
- [ ] Compute Optimized
- [ ] Memory Optimized

# A development team has multiple Linux-based EC2 instances across different Availability Zones that need concurrent read/write access to a shared, POSIX-compliant file system. The solution must be highly available, automatically scale, and require no management of underlying servers. Which storage service is the most appropriate?

- [ ] Amazon Elastic Block Store (Amazon EBS)
- [x] Amazon Elastic File System (Amazon EFS)
- [ ] Amazon FSx for Windows File Server
- [ ] Amazon S3

# What is statement is WRONG about EBS and EFS file systems?

- [ ] EFS works across multiple AZs.
- [ ] EBS can be mounted by only one EC2 instance.
- [x] Both are only compatible with Linux-based AMIs.
- [ ] EFS can be mounted by multiple EC2 instances simultaneously.

# A company plans to host its database on one or more EC2 instances to store persistent transaction data. Which storage option is not suitable for this use case?

- [ ] Elastic File System
- [x] Instance Store
- [ ] Elastic Block Store
- [ ] nan

# Which AWS service provides virtual servers in the cloud?

- [ ] Amazon S3
- [x] Amazon EC2
- [ ] AWS Lambda
- [ ] Amazon RDS

# A company is building an application on AWS. The application stores: - Website images and video files that need to be accessed over the internet, - A database running on one EC2 instance that requires low-latency block storage, - Shared application files that must be accessed by multiple EC2 instances at the same time. Which combination of AWS storage services is the most appropriate?

- [ ] Use Amazon EBS for website images, Amazon S3 for the database, and Amazon EFS for
shared files
- [x] Use Amazon S3 for website images and video files, Amazon EBS for the database, and
Amazon EFS for shared files
- [ ] Use Amazon EFS for website images and video files, Amazon S3 for the database, and
Amazon EBS for shared files
- [ ] Use Amazon S3 for website images and video files, Amazon EFS for the database, and
Amazon EBS for shared files

# Your primary goal is to minimize long-term operating costs (OPEX) over the next three years. Which combination of AWS features should you choose?

- [ ] EC2 Spot Instances using the T-family (General Purpose burstable).
- [x] EC2 Reserved Instances using the Inf2-family (Compute Optimized)
- [ ] AWS Lambda triggered by API Gateway.
- [ ] EC2 Reserved Instances using the G-family (Accelerated Computing)

# A company stores backup files that are accessed infrequently (about once every 3–6 months) but must be available in milliseconds when needed for compliance audits. The data is mission-critical and should remain highly durable across multiple Availability Zones. The team wants to minimize storage costs without sacrificing immediate access or high availability. Which Amazon S3 storage class is the most appropriate choice for these backups?

- [ ] S3 Standard
- [ ] S3 Intelligent-Tiering
- [x] S3 Standard-Infrequent Access (S3 Standard-IA)
- [ ] S3 Glacier Instant Retrieval

# A company with no remote offices wants to host an internal website that is used only during business hours. Which EC2 purchasing option is most suitable?

- [x] On-Demand
- [ ] Reserved Instances
- [ ] Spot Instances
- [ ] Savings Plans

# Which EC2 Placement Group type is best for applications that require very low latency between instances?

- [ ] Spread
- [x] Cluster
- [ ] Partition
- [ ] Regional

# A batch processing application is highly fault-tolerant and can be paused and restarted later without affecting the results. Which Amazon EC2 instance purchasing option provides the most cost savings (up to 90

- [x] A. Spot Instances
- [ ] B. On-Demand Instances
- [ ] C. Dedicated Hosts
- [ ] D. Reserved Instances

# What is the default behavior of an EBS root volume when an EC2 instance is terminated?

- [ ] It is moved to another instance
- [x] It is deleted automatically
- [ ] It is archived to Amazon Glacier
- [ ] It remains and must be deleted manually

# A web system is deployed using an Application Load Balancer and Auto Scaling Group across multiple Availability Zones. What is the primary purpose of this architecture?

- [ ] Reduce operational cost
- [x] Increase availability and prevent downtime
- [ ] Improve EC2 CPU performance
- [ ] Reduce storage usage

# A financial services company has a workload that runs continuously 24/7 for the next 3 years with a fixed instance type and region. The company wants to minimize cost while ensuring the instance is never interrupted. Which purchasing option provides the GREATEST discount under these conditions?

- [ ] EC2 Spot Instance
- [x] EC2 Reserved Instance with All Upfront payment on a 3-year term
- [ ] EC2 On-Demand Instance
- [ ] EC2 Reserved Instance with No Upfront payment on a 1-year term

# In the lab, why does the Web Server Security Group only allow traffic from the ALB, instead of allowing public access (0.0.0.0/0)?

- [ ] To improve system performance
- [ ] To reduce costs
- [x] To enhance security by preventing direct internet access
- [ ] Because ALB does not support public traffic

# You want to automatically install a Web Server as soon as the EC2 instance is finished launching for the first time. Which feature should you use?

- [ ] EC2 Metadata
- [ ] Amazon Machine Image (AMI)
- [x] EC2 User Data
- [ ] Elastic Network Interface (ENI)

# If EC2 CPU utilization exceeds 50

- [ ] EC2 instances will be terminated
- [x] Auto Scaling Group will launch additional instances
- [ ] The Load Balancer will stop working
- [ ] Security Groups will automatically change

# What is the main difference between a Public IP and an Elastic IP on AWS?

- [x] An Elastic IP can be remapped from one instance to another, whereas a Public IP cannot.
- [ ] A Public IP can only be used within a VPC, while an Elastic IP is used on the Internet.
- [ ] A Public IP is fixed, while an Elastic IP changes every time the instance reboots.
- [ ] There is no functional difference.

# What is the greatest benefit of using ’Hibernate’ compared to a normal instance ’Stop’?

- [ ] Data in the Instance Store will be preserved.
- [ ] Saves on EBS storage costs.
- [ ] No need to encrypt the Root volume.
- [x] Applications can resume from their previous running state (in-memory state).

# A financial services company needs to retain its data for 10 years to meet compliance norms. Which Amazon Simple Storage Service (Amazon S3) storage class is the best fit for this use case considering that the data has to be stored at a minimal cost?

- [ ] Amazon S3 Standard-Infrequent Access (S3 Standard-IA)
- [ ] Amazon S3 Glacier Flexible Retrieval
- [ ] Amazon S3 Intelligent-Tiering
- [x] Amazon S3 Glacier Deep Archive

# An e-commerce company has its on-premises data storage on an NFS file system that is accessed in parallel by multiple applications. The company is looking at moving the applications and data stores to AWS Cloud. Which storage service should the company use to move their files to AWS Cloud seamlessly if the application is hosted on Amazon Elastic Compute Cloud (Amazon EC2) instances?

- [ ] Amazon Simple Storage Service (Amazon S3)
- [ ] Amazon Elastic Block Store (Amazon EBS)
- [x] Amazon Elastic File System (Amazon EFS)
- [ ] AWS Storage Gateway

# When using EBS Multi-Attach (io1/io2 family only), how many EC2 instance(s) can it support?

- [ ] 4
- [ ] 8
- [ ] 16
- [x] All of the above

# Which of the following Amazon Simple Storage Service (Amazon S3) storage classes has NO constraint of a minimum storage duration charge for objects?

- [ ] Amazon S3 Standard-Infrequent Access (S3 Standard-IA)
- [ ] Amazon S3 Glacier Flexible Retrieval
- [x] Amazon S3 Standard
- [ ] Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)

# A compliance team requires that a copy of all S3 objects in a critical bucket be maintained in another AWS Region to protect against regional disasters. The copy must occur automatically when new objects are created. Which feature should you configure?

- [ ] S3 Lifecycle transition to Glacier Deep Archive in the same Region
- [ ] Amazon EFS asynchronous replication between Regions
- [x] S3 Cross-Region Replication (CRR) on the bucket
- [ ] EBS snapshot copy from the primary Region to the secondary Region

# You manage an S3 bucket storing log files that grow quickly. Older logs (over 90 days) are rarely accessed, but must remain immediately retrievable when needed. How should you configure storage classes using lifecycle policies?

- [ ] Store all logs in S3 Glacier Deep Archive to minimize cost
- [ ] Immediately transition logs to S3 One Zone-IA upon upload
- [ ] Delete logs after 90 days using lifecycle expiration
- [x] Transition objects to S3 Standard-IA after 90 days and keep them there

# A company wants to build a system that allows users to upload files, processes the files immediately after upload, and does not require managing servers. Which architecture is the MOST appropriate?

- [ ] Amazon EC2 with Amazon EBS
- [x] Amazon S3 with AWS Lambda trigger
- [ ] Amazon EFS with Amazon EC2
- [ ] Amazon RDS with AWS Lambda

# An application experiences spiky traffic during peak hours, has almost no traffic at night, and needs to optimize cost. Which compute solution is MOST appropriate?

- [ ] Amazon EC2 On-Demand
- [ ] Amazon EC2 Reserved Instances
- [x] AWS Lambda
- [ ] Dedicated Hosts

# An application needs storage that can be attached directly to an EC2 instance like a disk. Which service should be used?

- [ ] Amazon S3
- [ ] Amazon EFS
- [x] Amazon EBS
- [ ] Amazon S3 Glacier

# A global web application needs to store static content and reduce latency for users worldwide. Which solution is MOST appropriate?

- [ ] Amazon EC2 with Amazon EBS
- [x] Amazon S3 with Amazon CloudFront
- [ ] Amazon EFS with Application Load Balancer
- [ ] Amazon RDS with Amazon Route 53

# A system needs to store data long-term at low cost with infrequent access. Which solution is MOST appropriate?

- [ ] Amazon S3 Standard
- [x] Amazon S3 Glacier
- [ ] Amazon EBS
- [ ] Amazon EFS

# What is Amazon EC2?

- [ ] A database service for storing structured data
- [x] A scalable virtual server service in the cloud (IaaS)
- [ ] A tool for designing websites only
- [ ] A physical data center owned by users

# What is an AMI (Amazon Machine Image)?

- [ ] A backup file stored in S3
- [x] A preconfigured template used to launch EC2 instances
- [ ] A networking protocol
- [ ] A monitoring tool only

# What does EC2 User Data allow you to do?

- [ ] Store files permanently
- [x] Automatically run scripts when the instance starts
- [ ] Change instance type after launch
- [ ] Delete EC2 instances automatically

