---
title: Module 17: Extra Practice Questions (Part 6)
tags: []
domains: ["AWS"]
---

# In an Amazon VPC, which of the following conditions characterizes a subnet as a ’Public Subnet’?

- [ ] It contains EC2 instances with the most powerful configurations.
- [ ] It is configured to deny all inbound traffic from external sources.
- [ ] It is located within a default Availability Zone.
- [x] It has a route in its route table that points to an Internet Gateway.

# Which VPC component allows resources in a private subnet to connect outbound to the internet (for example, to download software updates,.... ) but prevents the internet from initiating a connection to those resources?

- [ ] Security Group
- [ ] Internet Gateway
- [x] NAT Gateway
- [ ] Virtual Private Gateway

# A subnet has route table with route to Internet Gateway, and its instances do NOT have public IPs Is this subnet considered public or private?

- [ ] Public subnet
- [x] Private subnet
- [ ] Hybrid subnet
- [ ] Depends on Security Group

# A web application is experiencing high latency due to read-heavy traffic on its primary Amazon RDS database. The development team wants to implement an in-memory caching layer to reduce the load on the database and improve response times. Which AWS service is the best choice for this use case?

- [ ] Amazon S3
- [ ] Amazon SQS
- [x] Amazon ElastiCache
- [ ] Amazon Aurora Serverless

# An architecture includes a front-end web application and a back-end processing application. Traffic spikes frequently cause the tightly coupled back-end to become overwhelmed and fail. Which AWS service can be used to decouple these applications and asynchronously store messages until the back-end is ready to process them?

- [ ] Amazon SNS
- [x] Amazon SQS
- [ ] Amazon ElastiCache
- [ ] Amazon API Gateway

# Which of the following is a characteristic of AWS Security Groups?

- [ ] They operate at the subnet level.
- [ ] They support both "Allow"and "Deny"rules.
- [ ] They are stateless and require explicit rules for both inbound and outbound return traffic.
- [x] They are stateful, meaning they automatically allow return traffic.

# A company needs to migrate its on-premises Oracle database to an Amazon Aurora PostgreSQL-compatible cluster. They require the source database to remain fully operational during the migration and need to convert the database schema before moving the data. Which combination of AWS tools should they use?

- [ ] AWS Snowball and Amazon S3
- [ ] AWS Backup and Amazon RDS Snapshot
- [x] AWS Schema Conversion Tool (SCT) and AWS Database Migration Service (DMS)
- [ ] Amazon RDS Proxy and AWS Lambda

# A media company wants to collect and store large-scale, real-time streaming data from IoT devices for advanced analytics. They need the ability to "replay"or reprocess the data for up to 365 days if necessary. Which service should they choose?

- [ ] Amazon Data Firehose
- [ ] Amazon SQS FIFO Queue
- [x] Amazon Kinesis Data Streams
- [ ] Amazon MQ

# Which of the following is NOT a supported database engine in Amazon RDS?

- [ ] PostgreSQL
- [ ] MySQL
- [x] MongoDB
- [ ] Oracle

# An EC2 instance is launched in a private subnet and needs to download updates from the internet, but must not be directly reachable from the internet. Which solution should be used?

- [ ] Attach an Internet Gateway to the subnet
- [x] Use a NAT Gateway in a public subnet and update the route table
- [ ] Assign a public IP address to the instance
- [ ] Use a VPC Peering connection

# Which statement correctly describes the difference between Security Groups and Network ACLs?

- [ ] Security Groups are stateless, while NACLs are stateful
- [ ] Security Groups and NACLs are both stateless
- [x] Security Groups are stateful, while NACLs are stateless
- [ ] Both Security Groups and NACLs are stateful

# A packet is allowed by a Security Group but denied by a Network ACL. What happens?

- [ ] Allowed (Security Group wins)
- [ ] Allowed (first match wins)
- [x] Denied
- [ ] Depends on subnet type

# According to the presentation, what is the primary purpose of an Amazon VPC (Virtual Private Cloud)?

- [ ] To deliver content to users with low latency.
- [x] To deliver content to users with low latency.
- [ ] To translate human-readable domain names into IP addresses.
- [ ] To automatically distribute incoming network traffic across multiple targets.

# How does Amazon Aurora Database Cloning differ from a traditional snapshot-and-restore approach?

- [ ] Cloning requires a full copy of all data at creation time, making it slower but more reliable
- [x] Cloning uses a copy-on-write protocol, sharing the same storage volume initially, making
it much faster and cost-efficient
- [ ] Cloning creates an independent storage volume immediately, which doubles the storage
cost
- [ ] Cloning is only available for cross-region duplication and cannot be used within the same
region

# What is the defining characteristic of a Public Subnet compared to a Private Subnet?

- [ ] It requires a NAT Gateway to allow outbound internet access.
- [ ] It does not have a route to the internet at all.
- [x] It has a direct route to the internet via an Internet Gateway.
- [ ] It is primarily designed to host backend databases and internal APIs.

# A cloud engineer has deployed several backend database instances in a private subnet within a VPC. These instances need to securely download software patches from the internet, but they must not be directly accessible from the public internet. Which AWS component is required to allow this outbound traffic?

- [ ] Internet Gateway
- [x] NAT Gateway
- [ ] Network ACL
- [ ] Route 53

# According to the presentation, what is the relationship between an AWS Subnet and an Availability Zone (AZ)?

- [ ] A single subnet can span across multiple Availability Zones.
- [ ] An Availability Zone is a small slice of a subnet’s IP range.
- [x] A subnet is a slice of your VPC’s IP range that lives in a specific Availability Zone.
- [ ] A subnet automatically creates new Availability Zones for disaster recovery.

# A company runs a production MySQL database on Amazon RDS that handles heavy read/write traffic. They now need to run complex analytics and reporting queries without impacting production performance. Additionally, they want to ensure the database remains available even if an entire Availability Zone fails. Which combination of RDS features should they implement?

- [ ] Enable Multi-AZ deployment for read scaling, and use RDS Proxy for analytics queries
- [x] Create a Read Replica for the analytics workload, and enable Multi-AZ deployment for
high availability
- [ ] Enable Aurora Serverless for analytics, and use ElastiCache for high availability
- [ ] Create multiple Read Replicas in the same AZ for both analytics and disaster recovery

# Which of the following statements is true regarding Security Groups in AWS?

- [ ] They operate at the subnet level to control inbound and outbound traffic.
- [ ] They are stateless and require explicit rules for return traffic.
- [x] They operate at the instance level and are stateful.
- [ ] They evaluate network traffic rules strictly in numbered order.

# A company wants to improve the read performance of their Amazon RDS database because a new reporting application is causing high load. Which feature should they use to offload this traffic without affecting the primary database?

- [ ] Multi-AZ deployment
- [x] Amazon RDS Read Replicas
- [ ] Amazon SQS
- [ ] Automated Backups

# Which disaster recovery strategy has the lowest RTO (Recovery Time Objective) and RPO (Recovery Point Objective) by keeping a fully functional copy of the environment running in another region?

- [ ] Pilot Flight
- [ ] Warm Standby
- [x] Active-Active (Multi-site)
- [ ] ackup and Restore

# A startup is developing a new application with infrequent and unpredictable workloads. They want a database that can automatically start, stop, and scale capacity up or down based on the application’s needs to optimize costs. Which AWS database solution is the best fit?

- [ ] Amazon RDS Multi-AZ
- [x] Amazon Aurora Serverless
- [ ] Amazon Aurora Global Database
- [ ] Amazon RDS Read Replicas

# Which network security feature allows you to create explicit "Deny"rules?

- [ ] Security Groups
- [x] Network ACLs
- [ ] Route Tables
- [ ] Internet Gateways

# How many copies of your data does Aurora automatically replicate across Availability Zones?

- [x] 6 copies across 3 AZs
- [ ] 1 copy per AZ in every region
- [ ] 3 copies in a single AZ
- [ ] 2 copies across 2 AZs

# Which component is required for resources in a Private Subnet to initiate outbound internet traffic?

- [ ] Internet Gateway
- [ ] Route 53
- [x] NAT Gateway
- [ ] Bastion Host

# When migrating an on-premises database to AWS, which service helps you migrate data quickly and securely while the source database remains operational?

- [ ] AWS Snowball
- [x] AWS Database Migration Service (AWS DMS)
- [ ] AWS DataSync
- [ ] AWS Elastic File System (EFS)

# Which AWS service is best suited for running a managed relational database such as MySQL or PostgreSQL without managing the underlying infrastructure?

- [ ] Amazon DynamoDB
- [x] Amazon RDS
- [ ] Amazon SQS
- [ ] Amazon SNS

# Which RDS feature provides high availability and automatic failover by maintaining a synchronous secondary copy of the database in a different Availability Zone?

- [ ] Database Snapshots
- [x] Multi-AZ Deployment
- [ ] Read Replicas
- [ ] RDS Proxy

# In the ’Pilot Light’ disaster recovery strategy, what is typically kept running in the recovery region?

- [ ] The web server, but not the database
- [ ] Nothing; everything is turned off
- [x] Only the database/stores with live replication
- [ ] A full-sized clone of the application stack

# What is a key difference between Amazon Aurora and standard Amazon RDS database engines?

- [ ] Aurora is a messaging service for event-driven systems
- [x] Aurora is AWS’s proprietary high-performance relational database compatible with MySQL
and PostgreSQL
- [ ] Aurora is a NoSQL database designed for millisecond latency at any scale
- [ ] Aurora is used only for data warehousing

# A company wants to block a specific malicious IP address from accessing their application. Which option is the MOST effective?

- [ ] Modify the Security Group to deny the IP
- [x] Modify the Network ACL to deny the IP
- [ ] Remove inbound rules from Security Group
- [ ] Add a route table rule to block the IP

# Which of the following is a benefit of choosing Amazon Aurora over standard RDS MySQL?

- [ ] it allows manual management of the underlying OS
- [x] It features is a distributed, fail-tolerant, self-healing storage system
- [ ] It cheaper than RDS in every small workloads
- [ ] It served SQL Server

# Which AWS database service is fully managed, NoSQL, and designed for single-digit millisecond performance at scale?

- [ ] Amazon Redshift
- [ ] Amazon Aurora
- [x] Amazon DynamoDB
- [ ] Amazon RDS for SQL Server

# Which service is the best choice for large-scale analytical queries across massive structured datasets?

- [x] Amazon Redshift
- [ ] Amazon SQS
- [ ] Amazon SNS
- [ ] Amazon DMS

# A security architect is configuring a virtual firewall for an Amazon EC2 instance to control inbound and outbound traffic. The firewall must be stateful, meaning that if an inbound request is allowed, the return traffic is automatically permitted. Which AWS feature provides this instance-level security?

- [x] Security Groups
- [ ] Network ACLs
- [ ] Route Tables
- [ ] Internet Gateway

# What type of replication does Amazon RDS Multi-AZ use, and what is its primary purpose?

- [ ] Asynchronous replication, used for scaling read traffic
- [x] Synchronous replication, used for disaster recovery and high availability
- [ ] Asynchronous replication, used for disaster recovery and high availability
- [ ] Synchronous replication, used for scaling read traffic

# What is the main purpose of AWS Database Migration Service (DMS)?

- [ ] Sending notifications to subscribers
- [x] Migrating and replicating databases with minimal downtime
- [ ] Storing relational data for online transaction processing
- [ ] Running large-scale data warehouse queries

# Which AWS service follows a publish/subscribe model and can push messages to multiple subscribers?

- [ ] Amazon SQS
- [x] Amazon SNS
- [ ] Amazon RDS
- [ ] Amazon DynamoDB

# How does Amazon Aurora Database Cloning differ from a traditional snapshot-and-restore approach?

- [ ] Cloning requires a full copy of all data at creation time, making it slower but more reliable
- [x] Cloning uses a copy-on-write protocol, sharing the same storage volume initially, making
it much faster and cost-efficient
- [ ] Cloning creates an independent storage volume immediately, which doubles the storage
cost
- [ ] Cloning is only available for cross-region duplication and cannot be used within the same
region

# Which AWS service is primarily used to decouple application components by storing messages in a queue until they are processed?

- [ ] Amazon Aurora
- [x] Amazon SQS
- [ ] Amazon Redshift
- [ ] Amazon SNS

# Which statement best describes the difference between Amazon SNS and Amazon SQS?

- [ ] SNS stores messages for long-term analytics, while SQS runs SQL queries
- [x] SNS pushes messages to subscribers, while SQS queues messages for consumers to pull
- [ ] SNS is relational, while SQS is NoSQL
- [ ] SNS and SQS are both database migration tools

# Which type of replication does an Amazon RDS Read Replica use?

- [ ] Synchronous replication
- [ ] Multi-region synchronous replication
- [ ] Snapshot-based replication
- [x] Asynchronous replication

# Between the two engines supported by Amazon ElastiCache, which one supports Multi-AZ with Auto-Failover and data persistence?

- [x] Redis
- [ ] Neither
- [ ] Both Memcached and Redis
- [ ] Memcached

# Which of the following can be described as a global content delivery network (CDN) service?

- [ ] AWS VPN
- [ ] AWS Direct Connect
- [ ] AWS Regions
- [x] Amazon CloudFront

# You need a message queue that guarantees messages are processed in the exact order they were sent and prevents duplicates. Which queue type should you use?

- [ ] Priority Queue
- [ ] Standard Queue
- [ ] Dead-Letter Queue
- [x] FIFO Queue

# What is the AWS service that provides a virtual network dedicated to your AWS account?

- [ ] AWS VPN
- [ ] AWS Subnets
- [ ] AWS Dedicated Hosts
- [x] Amazon VPC

# You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?

- [ ] Internet Gateways
- [x] Virtual Private Cloud (VPC)
- [ ] Security Groups
- [ ] Amazon CloudFront

# A company needs to offload read traffic from their primary database to improve performance for a reporting application. Which RDS feature should they use?

- [ ] Multi-AZ Deployment
- [x] Read Replicas
- [ ] RDS Proxy
- [ ] Storage Autoscaling

# Which term below has the role of simplifying routing by auto-adding VPN routes?

- [x] Propagation
- [ ] Edge Association
- [ ] Local Route
- [ ] Destination

# Which of the below options is true of Amazon VPC?

- [ ] Amazon VPC allows customers to control user interactions with all other AWS resources
- [x] AWS Customers have complete control over their Amazon VPC virtual networking environment
- [ ] AWS is responsible for all the management and configuration details of Amazon VPC
- [ ] Amazon VPC helps customers to review their AWS architecture and adopt best practices

