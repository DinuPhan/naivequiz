---
title: Module 21: Extra Practice Questions (Part 10)
tags: []
domains: ["AWS"]
---

# A company has a dataset with unpredictable access patterns. Sometimes the data is used daily, and other times it is not touched for months. They want to minimize costs without manually moving data. Which S3 feature helps?

- [x] S3 Intelligent-Tiering
- [ ] S3 Lifecycle Policies
- [ ] S3 One Zone-IA
- [ ] S3 Standard

# You are creating a new EC2 instance and need to choose a volume to store the operating system (the root volume). Which storage type is used for this purpose?

- [ ] Amazon EFS
- [ ] AWS Storage Gateway
- [x] Amazon EBS
- [ ] Amazon S3

# An analytics application generates reports every month. These reports are rarely looked at after the first week, but when they are needed, they must be accessible immediately. Which S3 class is best?

- [ ] S3 Glacier Flexible Retrieval
- [ ] S3 Standard
- [ ] Amazon EFS
- [x] S3 Standard-IA

# What happens to the data stored on an ’Instance Store’ volume if the associated EC2 instance is stopped or terminated?

- [ ] The data is moved to a new EBS volume.
- [ ] The data is automatically backed up to S3.
- [x] The data is lost (Ephemeral).
- [ ] The data is preserved and can be re-attached.

# A data processing firm runs batch jobs that are stateless and can be interrupted at any time. They are looking for the absolute lowest cost for compute. Which option is best?

- [ ] Saving Plans
- [ ] On-Demand Instances
- [x] Spot Instances
- [ ] Capacity Reservation

# Which EC2 pricing model allows you to bid for unused AWS capacity?

- [ ] On-Demand
- [ ] Dedicated Hosts
- [ ] Reserved Instances
- [x] Spot Instances

# A company needs to run a specialized compliance-heavy workload that requires software licenses bound to a specific physical server’s sockets and cores. Which EC2 tenancy model is the only one that supports this requirement?

- [ ] Dedicated Instances
- [x] Dedicated Hosts
- [ ] On-Demand Capacity Reservations
- [ ] Reserved Instances

# An organization is looking to migrate to AWS and wants to commit to a 3-year term. They need a discount that applies to EC2 instances regardless of the instance family, AWS Region, or even if they switch to AWS Fargate or Lambda. Which Savings Plan fits this best?

- [ ] EC2 Instance Savings Plans
- [ ] SageMaker Savings Plans
- [x] Compute Savings Plans
- [ ] Standard Reserved Instaces

# A developer is using Spot Instances for a non-critical test environment. If AWS needs the capacity back, how much notice does the developer receive before the instance is terminated?

- [ ] 5 minutes
- [ ] No notice is provided
- [ ] 30 seconds
- [x] 2 minutes

# A company wants to receive the maximum possible discount on their EC2 usage. They have a predictable workload for the next 3 years and are willing to pay for the entire term upfront. Which payment option provides the highest savings?

- [ ] Monthly Billing
- [x] All Upfront
- [ ] No Upfront
- [ ] Partial Upfront

# If an On-Demand Capacity Reservation is not being used (no instances are running in it), how is the customer billed?

- [ ] They are billed a small "holding fee"(10
- [x] They are billed at the full On-Demand rate for the reserved capacity
- [ ] They receive a credit for future use
- [ ] They are not billed at all

# Which AWS tool can provide recommendations on which Reserved Instances or Savings Plans to buy based on your historical usage?

- [ ] AWS Budgets
- [x] AWS Cost Explorer
- [ ] AWS Trusted Advisor
- [ ] Amazon Inspector

# A retail company expects unpredictable traffic spikes during a flash sale. They need to automatically add servers to handle demand and remove them afterward to save costs

- [ ] Spot Instances and Placement Groups
- [x] Auto Scaling Group (ASG) and Elastic Load Balancing (ELB)
- [ ] Reserved Instances and CloudWatch
- [ ] Dedicated Hosts

# A biotech startup needs high parallel processing power for complex genomic analysis that standard CPUs process too slowly. They require specialized hardware accelerator

- [ ] Compute Optimized
- [ ] Memory Optimized
- [x] Accelerated Computing
- [ ] Storage Optimized

# A financial company must retain data for 10 years for compliance at the lowest possible cost. Data is rarely accessed, and a retrieval time of 12–48 hours is acceptable. Which Amazon S3 storage class is the best fit for this use case?

- [ ] Amazon S3 Standard-IA
- [x] Amazon S3 Glacier Deep Archive
- [ ] Amazon S3 Glacier Flexible Retrieval
- [ ] Amazon S3 Intelligent-Tiering

# In Amazon EC2, what acts as a virtual firewall at the instance level to control inbound and outbound traffic?

- [x] Security Group
- [ ] Network Access Control List (NACL)
- [ ] AWS WAF
- [ ] Route Table

# Which EC2 purchasing option is the most cost-effective for fault-tolerant, flexible workloads (such as batch processing) and can offer discounts up to 90

- [ ] On-Demand Instances
- [x] Spot Instances
- [ ] Reserved Instances
- [ ] Dedicated Hosts

# To optimize applications that require extremely low network latency and high network bandwidth between instances within the same Availability Zone (AZ), which type of Placement Group should you use?

- [x] Cluster Placement Group
- [ ] Spread Placement Group
- [ ] Partition Placement Group
- [ ] Auto Scaling Group

# A company needs to store data for a Big Data system that requires high throughput but does not require a high number of Input/Output Operations Per Second (IOPS). Which of the following Amazon EBS volume types is the most cost-effective choice?

- [ ] Cold HDD (sc1)
- [x] Throughput Optimized HDD (st1)
- [ ] Provisioned IOPS SSD (io2)
- [ ] General Purpose SSD (gp3)

# You have a large amount of old image data that is infrequently accessed (about once every few months). However, when needed, the data must be immediately available in milliseconds. Which Amazon S3 storage class is the most cost-optimized choice?

- [x] S3 Standard-IA
- [ ] S3 Glacier Flexible Retrieval
- [ ] S3 One Zone-IA
- [ ] S3 Standard

# A financial institution is migrating its core banking database to AWS. Due to strict regulatory compliance, the database must run on isolated physical hardware. The database runs 24/7, requires a consistent sub-millisecond latency, and needs up to 100,000 IOPS. The institution wants the most cost-effective purchasing option for a 3-year architecture plan. Which combination of compute and storage should the solutions architect choose?

- [ ] EC2 Dedicated Instances with a 3-year Compute Savings Plan + Amazon EBS gp3.
- [ ] EC2 Default Tenancy with a 3-year All Upfront Reserved Instance + Amazon EBS io1.
- [x] EC2 Dedicated Hosts with a 3-year Reserved Instance + Amazon EBS io2 Block Express.
- [ ] EC2 Capacity Reservations with On-Demand pricing + Amazon EBS st1.

# You are designing a global leaderboard for a popular mobile game using AWS API Gateway, AWS Lambda, and Amazon DynamoDB. During special events, read traffic becomes highly unpredictable, spiking to millions of requests per second as users constantly refresh to see the "Top 10 Players". This causes DynamoDB to return ProvisionedThroughputExceededException errors despite Auto Scaling being enabled. Which serverless-friendly solution will resolve the throttling issue and provide microsecond latency for the read-heavy workload?

- [ ] Switch DynamoDB to On-Demand capacity mode to instantly handle the millions of read
requests.
- [x] Implement Amazon DynamoDB Accelerator (DAX) to cache the frequently accessed
leaderboard data.
- [ ] Use Amazon Kinesis Data Streams to buffer the read requests before they hit DynamoDB.
- [ ] Enable DynamoDB Global Tables to distribute the read requests across multiple AWS

# A development team is modernizing a monolithic application by containerizing it into microservices. The containers will be deployed using Amazon ECS. The team demands a fully serverless compute environment where they do not have to manage the underlying OS or instances. However, the microservices must share a common, persistent storage volume that can be mounted simultaneously by multiple containers running across different Availability Zones. Which architecture satisfies all these requirements?

- [ ] ECS EC2 Launch Type with Amazon EBS Multi-Attach.
- [ ] ECS Fargate Launch Type with Amazon EBS gp3.
- [ ] ECS EC2 Launch Type with Amazon S3 mounted via a gateway.
- [x] ECS Fargate Launch Type with Amazon EFS.

# A company wants to distribute traffic across multiple servers. What service should they use?

- [ ] EBS for storage expansion
- [ ] Auto Scaling Group for scaling capacity
- [ ] AMI for launching instances
- [x] Elastic Load Balancer for traffic distribution

# Among Amazon EC2’s payment options, which entity type allows users to leverage AWS’s excess capacity at a cost up to 90

- [ ] Dedicated Hosts
- [x] Spot Instances
- [ ] Capacity Reservations
- [ ] On-Demand Instances

# A startup is building an event-driven image-processing pipeline. Every time a user uploads a file, the application must resize the image, add a watermark, and store metadata. Traffic is highly unpredictable, ranging from almost zero to sudden spikes of thousands of requests per minute. The team does not want to provision or manage servers, and they are comfortable packaging any required libraries with the application. Which statement best identifies the customer’s remaining responsibility if AWS Lambda is selected?

- [ ] Managing the physical servers that execute the function
- [ ] Updating the operating system and Lambda runtime
- [x] Writing and maintaining the function code and its dependencies
- [ ] Configuring the underlying AWS networking infrastructure for the Lambda service

# What are the core differences in operating models between AWS Lambda and Amazon EC2?

- [x] Lambda executes event-driven code and automatically manages the infrastructure, while
EC2 requires users to manage and maintain virtual machines.
- [ ] Lambda is designed to run tasks continuously for extended periods, while EC2 can only
run for short durations.
- [ ] Lambda only supports Python, while EC2 supports a variety of different operating systems.
- [ ] EC2 scales automatically without configuration, while Lambda requires setting up an
Auto Scaling Group.

# How does Horizontal Scalability (Scaling Out) differ fundamentally from Vertical Scalability (Scaling Up)?

- [ ] Horizontal scaling involves adding more RAM to an existing instance, while vertical scaling
adds more instances.
- [x] Vertical scaling is restricted by hardware limits of a single machine, while horizontal
scaling is theoretically limitless by adding more nodes.
- [ ] Horizontal scaling is preferred for non-distributed systems like traditional databases.
- [ ] Vertical scaling requires a Load Balancer, whereas horizontal scaling does not.

# What is the benefit of using a Cluster Placement Group?

- [ ] It spreads instances across different physical hardware to minimize correlated failures
- [ ] It partitions instances across different racks to support distributed data systems.
- [x] It packs instances close together in a single Availability Zone to achieve low-latency, high-
throughput networking.
- [ ] It automatically distributes traffic across multiple Availability Zones.

# A student is reviewing core AWS services related to EC2, scaling, networking, and availability. They want to verify which statements are correct.How many of the following statements are correct? (1) Elastic Load Balancer distributes incoming traffic across multiple EC2 instances; (2) Auto Scaling Group automatically increases or decreases the number of EC2 instances based on demand; (3) An AMI is used to route traffic between multiple servers; (4) Private IP addresses allow EC2 instances to communicate within a VPC; (5) Deploying resources in multiple Availability Zones improves high availability.

- [ ] 2
- [ ] 3
- [x] 4
- [ ] 5

# A company is planning to run a batch data processing job that is fault-tolerant and can be interrupted without affecting the final output. Which Amazon EC2 purchasing option provides the most cost-effective solution for this workload?

- [ ] On-Demand Instances
- [ ] Reserved Instances
- [ ] Dedicated Hosts
- [x] Spot Instances

# Which AWS service allows developers to run code in response to events without provisioning or managing the underlying servers?

- [ ] Amazon EC2
- [x] AWS Lambda
- [ ] Amazon Elastic Kubernetes Service (EKS)
- [ ] Amazon Cognito

# A cloud architect needs to distribute incoming HTTP and HTTPS web traffic across multiple Amazon EC2 instances. The architecture requires advanced routing capabilities, such as routing traffic based on the URL path. Which AWS service should be used?

- [ ] Network Load Balancer (NLB)
- [ ] Amazon API Gateway
- [x] Application Load Balancer (ALB)
- [ ] Auto Scaling Group (ASG)

# Which statement is FALSE?

- [ ] Amazon S3 objects can be transitioned between storage classes using Lifecycle Rules.
- [ ] Amazon EFS is designed as a shared file system for multiple instances.
- [ ] Amazon EBS is mainly used for EC2 volumes, database storage, and low-latency workloads.
- [x] Amazon S3 is the best option for high-transaction relational databases because it has
lower latency than block storage.

# A team stores huge backup archives and AI training datasets. They want very high durability, very large scale, and low cost. However, developers also complain that they cannot make small in-place edits to stored items. Which service is most likely being used?

- [ ] Amazon EBS
- [ ] Amazon EFS
- [x] Amazon S3
- [ ] Amazon RDS

# A company wants to back up an EBS volume today and later restore that backup in another Availability Zone or even another Region. Which option should they use?

- [ ] Amazon EFS lifecycle policy
- [ ] Amazon S3 lifecycle rule
- [x] Amazon EBS Snapshot
- [ ] Amazon S3 replication only

# An application runs on a single EC2 instance and uses a relational database that must support high transaction volume and low latency. Which option is the most appropriate?

- [ ] Amazon S3, because it has high durability
- [ ] Amazon EFS, because it can be mounted like a filesystem
- [x] Amazon EBS, because block storage is efficient for databases
- [ ] Amazon Glacier, because archival tiers reduce cost

# Which of the following is an example of horizontal scaling in the AWS Cloud?

- [ ] Replacing an existing EC2 instance with a larger, more powerful one.
- [ ] Increasing the compute capacity of a single EC2 instance to address the growing demands
of an application.
- [ ] Adding more RAM capacity to an EC2 instance.
- [x] Adding more EC2 instances of the same size to handle an increase in traffic.

# You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?

- [ ] AWS Lambda
- [ ] AWS Config
- [x] Amazon CloudWatch
- [ ] AWS CloudTrail

# Which service provides object-level storage in AWS?

- [ ] Amazon EBS
- [ ] Amazon Instance Store
- [ ] Amazon EFS
- [x] Amazon S3

# Which type of Load Balancer of Amazon ELB service can be reached via Route Table Entry?

- [ ] Application Load Balancer
- [ ] Network Load Balancer
- [x] Gateway Load Balancer
- [ ] Classic Load Balancer

# Which statement best describes Elastic Load Balancing?

- [ ] It translates a domain name into an IP address using DNS
- [x] It distributes incoming application traffic across one or more Amazon EC2 instances
- [ ] It collects metrics on connected Amazon EC2 instances
- [ ] It automatically adjusts the number of Amazon EC2 instances to support incoming traffic

# Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?

- [ ] Amazon S3
- [ ] Amazon Glacier
- [ ] Amazon EBS
- [x] Amazon EFS

# A company wants to host a web application on Amazon EC2 and ensure it remains operational even if an entire data center fails. Which of the following is the BEST architectural choice?

- [ ] Deploy all EC2 instances into a Cluster Placement Group within one Region
- [x] Use an Auto Scaling Group to distribute instances across multiple Availability Zones
(AZs)
- [ ] Assign an Elastic IP address to a single high-capacity EC2 instance
- [ ] Deploy the instances on a Dedicated Host within a single private subnet

# A media company’s video streaming platform is hosted in the AWS ap-southeast-1 Region. Users in Europe report slow load times for static content such as thumbnails and video previews. Which AWS infrastructure concept would BEST reduce this latency?

- [ ] Deploy additional EC2 instances in a second AZ
- [x] Use Edge Locations to cache and serve static content closer to users
- [ ] Migrate the application to a Region closer to Europe
- [ ] Enable Multi-Region replication for the primary database

# Which EC2 purchasing option is best suited for batch processing jobs that are fault-tolerant, can be interrupted without losing progress, and offers the HIGHEST cost savings?

- [ ] Reserved Instances
- [ ] On-Demand Instances
- [x] Spot Instances
- [ ] Dedicated Hosts

# A company needs shared file storage accessible concurrently by multiple Linux EC2 instances across 3 Availability Zones. Which storage service is the most appropriate?

- [ ] Amazon EBS
- [ ] EC2 Instance Store
- [x] Amazon EFS
- [ ] Amazon S3

# A startup uploads log files to Amazon S3 Standard. They are accessed frequently in the first month, but rarely used after that. Which S3 feature helps automatically minimize storage costs without manual intervention?

- [x] S3 Lifecycle Rules
- [ ] EBS Snapshots
- [ ] Amazon EFS replication
- [ ] EBS Multi-Attach

# A machine learning platform needs temporary, extremely high-speed storage for caching intermediate computation results during model training on an EC2 instance. The data does not need to be retained after the instance stops. Which storage option is BEST?

- [ ] Amazon EBS gp3
- [ ] Amazon EFS Standard
- [x] EC2 Instance Store
- [ ] Amazon S3 Standard

# A company needs to store compliance audit logs for 7 years to meet regulatory requirements. They are almost never accessed. The PRIMARY requirement is to optimize for the lowest cost. Which S3 storage class is most appropriate?

- [ ] Amazon S3 Standard-IA
- [ ] Amazon S3 Glacier Instant Retrieval
- [x] Amazon S3 Glacier Deep Archive
- [ ] Amazon S3 One Zone-IA

