---
title: Module 26: Extra Practice Questions (Part 15)
tags: []
domains: ["AWS"]
---

# What is the main purpose of Security Groups in EC2?

- [ ] Store application logs
- [x] Control network traffic to and from EC2 instances
- [ ] Increase CPU performance
- [ ] Backup EC2 instances

# What is an Elastic IP (EIP)?

- [ ] A dynamic IP that changes frequently
- [x] A static public IPv4 address provided by AWS
- [ ] A private IP inside VPC
- [ ] A DNS service

# Which AWS service allows you to run code in response to events without provisioning or managing any servers, and charges you only for the compute time you consume?

- [ ] AWS Elastic Beanstalk
- [ ] Amazon ECS
- [ ] Amazon EC2
- [x] AWS Lambda

# Which AWS service provides resizable compute capacity in the cloud, allowing you to launch virtual servers?

- [ ] Amazon VPC
- [ ] Amazon S3
- [ ] Amazon RDS
- [x] Amazon EC2

# A company has a steady-state, predictable workload that will run continuously for the next 3 years. Which Amazon EC2 pricing model provides the most cost-effective solution?

- [x] Reserved Instances
- [ ] Spot Instances
- [ ] Dedicated Hosts
- [ ] On-Demand Instances

# According to the architectural concepts of storage systems, which type of storage stores data in a flat address space, utilizes rich metadata, and is accessed primarily via REST APIs

- [ ] File Storage
- [x] Object Storage
- [ ] Block Storage
- [ ] Single-Disk Storage

# You are designing a system for big data processing and data warehousing that requires high sequential throughput. You need a low-cost EBS volume type, and it will NOT be used as a boot volume. Which EBS volume type is the most appropriate

- [ ] Cold HDD(s1)
- [ ] General purpose SSD(gp3)
- [ ] Object Storage
- [x] Throughput Optimized SSD(st1)

# Which kind of storage is the most relevant for normal latency and high durability

- [ ] Distributed Storage System
- [ ] Spot Instances
- [x] Storage Cluster
- [ ] Single-Disk Storage

# Which of the following best describes an Availability Zone (AZ) in the AWS Global Infrastructure?

- [ ] A single geographic area containing multiple AWS Regions.
- [x] One or more discrete data centers with redundant power, cooling, and networking.
- [ ] A global network of edge locations used for content delivery.
- [ ] A virtual server environment used to host web applications.

# A company wants to reduce latency for users by caching content (such as images or videos) closer to their geographic location. Which AWS component should they use?

- [ ] AWS Regions.
- [ ] Availability Zones.
- [x] Edge Locations.
- [ ] Backup Regions.

# According to the Cloud Service Models, which model provides the most control to Network Architects and IT Administrators over the underlying infrastructure?

- [ ] Software as a Service (SaaS).
- [ ] Platform as a Service (PaaS).
- [x] Infrastructure as a Service (IaaS).
- [ ] Function as a Service (FaaS).

# Which service is a serverless, pay-as-you-go compute service that scales automatically based on incoming requests?

- [ ] Amazon EC2
- [x] AWS Lambda
- [ ] Amazon Lightsail
- [ ] AWS Outposts

# Which S3 feature allows you to automatically transition objects to a cheaper storage class after a certain period?

- [ ] S3 Versioning
- [ ] S3 Replication
- [x] S3 Lifecycle Policy
- [ ] S3 Transfer Acceleration

# Which of the following is a managed, elastic file system that supports the NFS protocol and allows multiple EC2 instances to access data simultaneously?

- [ ] Amazon EBS.
- [ ] Amazon S3.
- [x] Amazon EFS.
- [ ] Amazon S3 Glacier.

# Which AWS service provides a managed registry for storing, managing, and deploying Docker container images?

- [ ] Amazon ECS
- [ ] Amazon EKS
- [x] Amazon ECR
- [ ] AWS App Runner

# Which storage type is characterized by a "flat address space"where data is stored as objects with unique IDs and rich metadata?

- [ ] Block Storage.
- [ ] File Storage.
- [x] Object Storage.
- [ ] Local Instance Store.

# What can be used to create a point-in-time backup of an Amazon EBS volume and can be copied across different AWS Regions?

- [ ] EBS Multi-attach.
- [x] EBS Snapshots.
- [ ] S3 Lifecycle Rules.
- [ ] EFS Mount Targets.

# Which storage option is best for low-latency database workloads?

- [ ] S3
- [ ] Glacier
- [x] EBS SSD
- [ ] EFS Infrequent Access

# For long-term backup with infrequent access, which service should you use?

- [ ] S3 Standard
- [ ] EFS
- [x] Glacier
- [ ] EBS

# According to the AWS Shared Responsibility Model, which of the following is AWS responsible for?

- [ ] Managing guest OS on EC2
- [x] Securing physical data centers
- [ ] Configuring Security Groups
- [ ] Encrypting application data

# How many EC2 instances can an EBS volume be attached to at the same time?

- [ ] Multiple instances
- [x] One instance (except Multi-Attach)
- [ ] nan
- [ ] Unlimited

# In AWS infrastructure terminology, the ability of a system to continue functioning correctly even when some of its components fail is called:

- [ ] Scalability.
- [ ] Consistency.
- [x] Fault Tolerance.
- [ ] Decoupling.

# Which AWS S3 feature allows a user to define rules to move objects to cheaper storage classes or delete them after a specific number of days?

- [ ] Bucket Versioning.
- [ ] Object Tags.
- [x] Lifecycle Policies.
- [ ] Cross-Region Replication.

# Which AWS service allows you to deploy applications without managing infrastructure but still gives access to underlying EC2 instances?

- [ ] AWS Lambda
- [x] AWS Elastic Beanstalk
- [ ] Amazon S3
- [ ] Amazon DynamoDB

# A company needs to store archive data that is accessed less than once a year but must be preserved for several years at the lowest possible cost. Which S3 storage class is best?

- [ ] S3 Standard.
- [ ] S3 Intelligent-Tiering.
- [ ] S3 Glacier Instant Retrieval.
- [x] S3 Glacier Deep Archive.

# Which EC2 pricing model is best for fault-tolerant workloads with the lowest cost?

- [ ] On-Demand.
- [ ] Reserved.
- [x] Spot Instances
- [ ] Dedicated Hosts

# What is a key limitation of Amazon EBS compared to Amazon EFS regarding instance attachment?

- [ ] EBS is object-based
- [ ] EFS only attaches to one instance
- [x] EBS usually attaches to one instance at a time
- [ ] EFS is much slower

# What is the main benefit of using AWS Lambda?

- [ ] Full control of OS.
- [x] No need to manage servers.
- [ ] Unlimited compute power.
- [ ] Fixed pricing.

# What happens to the data in an Instance Store if the associated EC2 instance is terminated?

- [ ] Data is saved to S3
- [ ] Data is persistent
- [x] Data is lost
- [ ] Data is moved to EBS

# Which AWS service is used for storing objects with high durability?

- [ ] Amazon EC2
- [x] Amazon S3
- [ ] Amazon RDS
- [ ] AWS Lambda

# Which of the following services can automatically scale EC2 instances based on demand?

- [ ] AWS Lambda
- [x] AWS Auto Scaling
- [ ] Amazon CloudWatch
- [ ] AWS IAM

# Where are Amazon EBS snapshots stored to ensure high durability and availability?

- [ ] Inside the EC2 instance
- [ ] On an Instance Store
- [x] In Amazon S3
- [ ] On a Tape Gateway

# Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?

- [x] Elimination of expenses for running and maintaining data centers.
- [ ] Price discounts that are identical to discounts from hardware providers
- [ ] Distribution of all operational controls to AWS.
- [ ] Elimination of operational expenses.

# Which AWS benefit is demonstrated by on-demand technology services that enable companies to replace upfront fixed expenses with variable expenses?

- [ ] High availability
- [ ] Economies of scale
- [x] Pay-as-you-go pricing
- [ ] Global reach

# A company wants to know more about the benefits offered by cloud computing. The company wants to understand the operational advantage of agility. How does AWS provide agility for users?

- [ ] The ability to ensure high availability by deploying workloads to multiple regions.
- [ ] A pay-as-you-go model for many services and resources.
- [ ] The ability to transfer infrastructure management to the AWS Cloud.
- [x] The ability to provision and deprovision resources quickly with minimal effort.

# Which AWS Cloud benefit is shown by an architecture’s ability to withstand failures with minimal downtime?

- [ ] Agility
- [ ] Elasticity
- [ ] Scalability
- [x] High availability

# Which AWS Cloud deployment model uses AWS Outposts as part of the application deployment infrastructure?

- [ ] On-premises
- [ ] Serverless
- [ ] Cloud-native
- [x] Hybrid

# Which of the following is an advantage that the AWS Cloud provides to users?

- [x] Users eliminate the need to guess about infrastructure capacity requirements.
- [ ] Users decrease their variable costs by maintaining sole ownership of IT hardware.
- [ ] Users maintain control of underlying IT infrastructure hardware.
- [ ] Users maintain control of operating systems for managed services.

# A company wants the ability to automatically acquire resources as needed and release the resources when they are no longer needed. Which cloud concept describes this functionality?

- [ ] Availability
- [x] Elasticity
- [ ] Durability
- [ ] Reliability

# Which benefit of cloud computing gives a company the ability to deploy applications to users all over the world through a network of AWS Regions, Availability Zones, and edge locations?

- [ ] Economy of scale
- [x] Global reach
- [ ] Agility
- [ ] High availability

# A user is moving a workload from a local data center to an architecture that is distributed between the local data center and the AWS Cloud. Which type of migration is this?

- [ ] On-premises to cloud native
- [ ] Hybrid to cloud native
- [x] On-premises to hybrid
- [ ] Cloud native to hybrid

# A company needs to deploy applications in the AWS Cloud as quickly as possible. The company also needs to minimize the complexity that is related to the management of AWS resources. Which AWS service should the company use to meet these requirements?

- [ ] AWS Config
- [x] AWS Elastic Beanstalk
- [ ] Amazon EC2
- [ ] Amazon Personalize

# A global media company stores high-resolution video files in an Amazon S3 bucket located in the us-east-1 (N. Virginia) Region. While users in the United States experience fast download speeds, users in Singapore and Tokyo report significant delays and "slow content delivery"when accessing the same files. Which architectural change would provide the best user experience and performance for the global audience while minimizing the load on the origin S3 bucket?

- [ ] Create a secondary S3 bucket in the ap-southeast-1 (Singapore) Region and manually
copy all video files to it.
- [x] Deploy Amazon CloudFront and configure the N. Virginia S3 bucket as the origin.
- [ ] Upgrade the S3 bucket to a Multi-AZ configuration to increase data replication speed.
- [ ] Instruct global users to use a VPN to connect directly to the N. Virginia network path.

# When a company moves from an on-premises data center to the AWS Cloud, which financial shift typically occurs in their accounting model?

- [ ] Moving from variable operational expense (OPEX) to upfront capital expense (CAPEX).
- [x] Moving from upfront capital expense (CAPEX) to variable operational expense (OPEX)
- [ ] Elimination of all capital and operational expenditures.
- [ ] Moving from fixed variable costs to fixed capital investments.

# A startup needs to get a new product to market quickly and requires the ability to provision compute and storage resources in just a few minutes. Which cloud characteristic best meets this need?

- [ ] Reliability.
- [ ] High Availability.
- [x] Agility.
- [ ] Elasticity.

# Adeveloper wants to deploy a web application without worrying about the underlying infrastructure, such as the operating system or server hardware. Which cloud computing model should they use?

- [ ] Infrastructure as a Service (IaaS).
- [ ] Software as a Service (SaaS).
- [ ] Networking as a Service (NaaS).
- [x] Platform as a Service (PaaS).

# Which AWS Cloud benefit allows an organization to automatically match the supply of resources with changing workload demands?

- [x] Elasticity.
- [ ] Security.
- [ ] Global Reach.
- [ ] Fault Tolerance.

# How do customers directly benefit from Amazon’s "Massive Economies of Scale"?

- [ ] They receive free hardware upgrades every three years.
- [x] They receive periodic price reductions as a result of Amazon’s operational efficiencies.
- [ ] They gain the ability to scale up and down as needed.
- [ ] They can use any third-party software license for free.

# Underthe Shared Responsibility Model, which task remains the customer’s responsibility when using Infrastructure as a Service (IaaS) like Amazon EC2, but becomes the responsibility of AWS when using a managed Platform as a Service (PaaS) or serverless service?

- [ ] Data encryption.
- [ ] Physical security of data centers.
- [ ] Configuration of security groups.
- [x] Patching the guest operating system.

# A company hosts a legacy application in its corporate data center but uses Amazon EC2 instances for its modern web servers. Which term correctly describes this infrastructure model?

- [ ] Cloud-native architecture.
- [ ] Partner network model.
- [x] Hybrid architecture.
- [ ] Monolithic architecture.

