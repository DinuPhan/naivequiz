---
title: Module 19: Extra Practice Questions (Part 8)
tags: []
domains: ["AWS"]
---

# What type of replication does Amazon RDS Multi-AZ use between the primary and standby instance?

- [ ] Asynchronous replication to minimize latency
- [x] Synchronous replication to ensure data consistency
- [ ] Eventual consistency replication
- [ ] Snapshot-based replication every 5 minutes

# A company is migrating a legacy banking application with complex JOIN queries and strict ACID transaction requirements. Which AWS database is the most appropriate?

- [ ] Amazon DynamoDB
- [ ] Amazon Redshift
- [x] Amazon RDS
- [ ] Amazon Neptune

# Which AWS service is a managed relational database service that supports engines like MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server?

- [ ] Amazon ElastiCache
- [ ] Amazon SQS
- [x] Amazon RDS
- [ ] Amazon S3

# What is the primary use case for RDS Read Replicas?

- [ ] To provide synchronous replication for disaster recovery.
- [x] To scale read operations by offloading traffic from the primary database.
- [ ] To improve the performance of database write operations.
- [ ] To automatically increase database storage when running low.

# When comparing ElastiCache engines, which feature is exclusive to Redis (not supported by Memcached)?

- [ ] Multi-threaded architecture for simple caching.
- [x] Multi-AZ with Auto-Failover and Backup/Restore capabilities.
- [ ] Data partitioning through sharding.
- [ ] Non-persistent storage where data is lost on restart.

# To implement a "Fan-out"architecture that preserves strict message ordering and deduplication across multiple worker services, which combination is required?

- [ ] SNS Standard Topic + SQS FIFO Queues.
- [x] SNS FIFO Topic + SQS FIFO Queues.
- [ ] SQS FIFO Queue + Multiple Lambda consumers.
- [ ] Kinesis Data Streams + Amazon MQ.

# Which Disaster Recovery (DR) strategy involves running a functional but scaled-down version of the full system in the cloud to achieve a lower RTO?

- [ ] Backup and Restore.
- [ ] Pilot Light.
- [x] Warm Standby.
- [ ] Multi-Site Active-Active.

# A company is building an e-commerce application using a relational database. They require: - Automatic read scaling - Fast failover (under 30 seconds) - Minimal operational overhead Which solution is the most appropriate?

- [ ] Amazon RDS Multi-AZ with Read Replica
- [x] Amazon Aurora with Aurora Replicas
- [ ] Amazon DynamoDB with DAX
- [ ] Amazon RDS Single-AZ with automated backup

# When migrating an on-premises Oracle database to Amazon Aurora MySQL, what is the primary role of the AWS Schema Conversion Tool (SCT)?

- [ ] It provides continuous data replication using Change Data Capture (CDC).
- [ ] It transports physical data volumes to AWS via Snowball devices.
- [x] It converts database objects (tables, indexes, views) to be compatible with a different
engine.
- [ ] It serves as the primary replication instance for AWS DMS.

# An order processing system needs to ensure: - Independent service processing (decoupling) -No message loss - Ability to retry on failure Which service is the most appropriate?

- [ ] Amazon SNS
- [ ] Amazon SQS Standard
- [x] Amazon SQS FIFO
- [ ] Amazon Kinesis Data Streams

# A company wants to implement a disaster recovery (DR) strategy with the following requirements: - Lowest possible cost - Recovery can take a few hours Which strategy is the most appropriate?

- [x] Backup Restore
- [ ] Pilot Light
- [ ] Warm Standby
- [ ] Multi-site Active-Active

# An application is using Amazon RDS but is experiencing a bottleneck with a read-heavy workload. Which is the most optimal solution?

- [ ] Increase instance size
- [x] Add Read Replica
- [ ] Switch to Multi-AZ
- [ ] Enable backup

# A video processing pipeline requires: - Very high throughput - Processing in small batches -No need for strict global ordering Which service should be chosen?

- [ ] Amazon SQS FIFO
- [x] Amazon SQS Standard
- [ ] Amazon Kinesis Data Streams
- [ ] Amazon SNS

# A public-facing web server must be accessible from the internet. Which condition makes a subnet a public subnet?

- [ ] It contains an EC2 instance with a public IP only
- [x] It has a route to an Internet Gateway
- [ ] It has a Security Group that allows HTTP
- [ ] It is placed in Availability Zone A

# A private application server in a private subnet needs outbound internet access to download updates, but it must not be directly reachable from the internet. Which solution is most appropriate?

- [ ] Internet Gateway
- [x] NAT Gateway
- [ ] Security Group
- [ ] Route 53

# A global website needs lower latency and faster delivery of static assets such as images, videos, and HTML by caching content closer to users. Which service is the best choice?

- [ ] Amazon Route 53
- [x] Amazon CloudFront
- [ ] Amazon RDS
- [ ] Amazon EC2 Auto Scaling

# A company wants to create an isolated network in AWS that behaves like its own private data center. Which AWS service should be used?

- [ ] Amazon Route 53
- [x] Amazon VPC
- [ ] Amazon CloudFront
- [ ] Amazon S3

# A company deploys an Application Load Balancer across two public subnets in different Availability Zones and routes traffic to web servers in private subnets. What is the main benefit of this design?

- [ ] It eliminates the need for Security Groups
- [ ] It provides direct internet access to private instances
- [x] It improves availability and distributes traffic across targets
- [ ] It replaces Route 53 completely

# A web application experiences heavy read traffic, causing the primary Amazon RDS for MySQL database to become a performance bottleneck. The architecture also requires automated failover in case of an Availability Zone outage. Which combination of features should a Solutions Architect implement?

- [ ] Create a Read Replica in the same AZ and enable Multi-AZ on the Read Replica.
- [ ] Enable Multi-AZ on the primary instance and offload read queries to the standby instance.
- [ ] Migrate the database to Amazon DynamoDB for infinite read scaling.
- [x] Enable Multi-AZ on the primary instance and create one or more Read Replicas to handle
the read traffic

# A financial company requires a database solution with a Recovery Point Objective (RPO) of less than 1 second and a Recovery Time Objective (RTO) of less than 1 minute in the event of a full AWS Region outage. Which service is best suited for this requirement?

- [ ] Amazon Redshift cross-region snapshots
- [x] Amazon Aurora Global Database
- [ ] Amazon RDS with Cross-Region Read Replicas
- [ ] Amazon DynamoDB Global Tables

# A gaming company is launching a new multiplayer game that expects highly unpredictable traffic spikes during launch week, followed by a steady but unknown baseline of users. Which Amazon DynamoDB capacity mode is the most cost-effective and operationally efficient for this launch?

- [ ] Provisioned capacity with maximum read/write capacity units allocated upfront.
- [ ] DynamoDB Accelerator (DAX) with minimum provisioned capacity.
- [x] On-Demand capacity mode.
- [ ] Provisioned capacity with Auto Scaling configured to target 50

# A data analytics team needs to run complex, long-running SQL queries combining historical sales data stored in an Amazon S3 data lake with recent transactional data. They want to avoid loading all the S3 data into the database compute nodes. Which AWS service and feature should they use?

- [ ] Amazon DynamoDB with Amazon EMR
- [ ] Amazon RDS with S3 Select
- [x] Amazon Redshift Spectrum
- [ ] Amazon Aurora with Federated Query

# A company is migrating its legacy on-premises Oracle database to Amazon Aurora PostgreSQL. The schema structures and stored procedures differ significantly between the two database engines. Which approach should the migration team take?

- [ ] Take an Oracle RMAN backup and restore it directly to Amazon Aurora.
- [x] Use the AWS Schema Conversion Tool (AWS SCT) to convert the schema and code
objects, then use AWS DMS to migrate the data.
- [ ] Use AWS Database Migration Service (AWS DMS) to automatically convert the schema
and migrate the data.
- [ ] Export data to CSV files and use the Aurora command to import data and schemas.

# An application reads messages from an Amazon SQS Standard queue and processes video files. Processing a video usually takes 3 minutes. However, developers notice that the same video is occasionally being processed multiple times by different worker instances. What is the most likely cause of this issue?

- [x] The Visibility Timeout of the SQS queue is set lower than the time required to process
the message.
- [ ] The SQS queue is configured as a Standard queue instead of a FIFO queue.
- [ ] The worker instances are failing to send a ReceiveMessage API call.
- [ ] The message retention period is shorter than the processing time.

# A startup wants to build a serverless REST API that automatically scales based on traffic and requires minimal operational overhead. Which AWS services should be used?

- [ ] Amazon EC2 + Auto Scaling
- [x] Amazon API Gateway + AWS Lambda
- [ ] Amazon RDS
- [ ] AWS Elastic Beanstalk

# A company wants to store frequently accessed data in memory to reduce database load and improve application performance. Which AWS service is the best fit?

- [ ] Amazon DynamoDB
- [x] Amazon ElastiCache
- [ ] Amazon S3
- [ ] Amazon Redshift

# A company wants to analyze log data stored in Amazon S3 using standard SQL queries without managing infrastructure. Which AWS service should they use?

- [x] Amazon Athena
- [ ] Amazon RDS
- [ ] Amazon EC2
- [ ] AWS Glue

# A company has two applications running in separate Amazon VPCs in the same region. They need private communication between the VPCs with: low latency, no internet exposure, simple setup. Which solution is the best fit?

- [x] Use VPC Peering
- [ ] Use AWS Transit Gateway
- [ ] Use Internet Gateway
- [ ] Use AWS Site-to-Site VPN

# A company hosts its application in two regions for high availability. They want: automatic failover if one region becomes unhealthy, minimal downtime. Which Amazon Route 53 routing policy should they use?

- [ ] Simple routing
- [ ] Weighted routing
- [ ] Latency-based routing
- [x] Failover routing

# An application runs on EC2 instances in a private subnet and needs to access data in Amazon S3. The company wants: no internet exposure, secure and private access. Which solution is the best choice?

- [ ] Attach an Internet Gateway and use public S3 endpoint
- [ ] Use a NAT Gateway
- [x] Configure an VPC Endpoint for S3
- [ ] Assign public IP to EC2 instances

# A company runs a production MySQL database on Amazon RDS. The database must remain available with automatic failover if the primary database instance or its Availability Zone experiences an outage. The company does not want to perform any manual intervention during a failure event. Which solution meets these requirements?

- [ ] Create an Amazon RDS read replica in a different Availability Zone and manually promote
it if the primary fails.
- [x] Enable Amazon RDS Multi-AZ deployment
- [ ] Create an Amazon RDS read replica in a different AWS Region
- [ ] Take automated snapshots and restore to a new instance when failure occurs

# A company needs a relational database solution on AWS that is compatible with PostgreSQL. The solution must provide automatic storage scaling, support up to 15 read replicas with sub-10-millisecond replica lag, and offer failover that completes in less than 30 seconds. Which AWS service meets ALL of these requirements?

- [ ] Amazon RDS for PostgreSQL with Multi-AZ enabled
- [x] Amazon Aurora PostgreSQL-Compatible Edition
- [ ] Amazon DynamoDB
- [ ] Amazon Redshift

# A company operates an e-commerce application where a front-end web tier receives customer orders and a back-end processing tier fulfills them. During peak traffic events, the back-end tier becomes overwhelmed, causing orders to be lost. The company wants to ensure that no orders are lost and that each component can scale independently. Which architecture meets these requirements?

- [ ] Increase the instance size of the back-end processing tier.
- [x] Place an Amazon Simple Queue Service (Amazon SQS) queue between the front-end and
back-end tiers, and use an Auto Scaling group for the back-end consumers.
- [ ] Use Amazon Simple Notification Service (Amazon SNS) to send orders directly to the
back-end tier.
- [ ] Deploy Amazon ElastiCache between the two tiers to temporarily store orders.

# Which AWS service is a fully managed relational database service that supports engines such as MySQL, PostgreSQL, Oracle, and SQL Server?

- [ ] Amazon DynamoDB
- [x] Amazon RDS
- [ ] Amazon ElastiCache
- [ ] Amazon Redshift

# What type of replication do RDS Read Replicas use?

- [ ] Synchronous (SYNC)
- [x] Asynchronous (ASYNC)
- [ ] Semi-synchronous
- [ ] Real-time streaming

# What is the primary purpose of RDS Multi-AZ deployment?

- [ ] Improve read performance by distributing queries
- [x] Provide disaster recovery and high availability
- [ ] Reduce storage costs
- [ ] Enable cross-region data access

# How many copies of data does Amazon Aurora store, and across how many Availability Zones?

- [ ] 3 copies across 2 AZs
- [ ] 4 copies across 2 AZs
- [x] 6 copies across 3 AZs
- [ ] 9 copies across 3 AZs

# Which workload type is Aurora Serverless best suited for?

- [ ] Stable, predictable workloads
- [x] Infrequent or unpredictable workloads
- [ ] Workloads requiring sustained high performance
- [ ] Write-heavy OLTP workloads only

# Which caching engines does Amazon ElastiCache support?

- [ ] MySQL and PostgreSQL
- [x] Redis and Memcached
- [ ] MongoDB and Cassandra
- [ ] DynamoDB and DocumentDB

# Which ElastiCache engine supports Multi-AZ with Auto-Failover and data persistence?

- [ ] Memcached only
- [x] Redis only
- [ ] Both Redis and Memcached
- [ ] Neither

# What delivery behavior does an Amazon SQS Standard Queue provide?

- [ ] Exactly-once delivery with strict ordering
- [x] At-least-once delivery with best-effort ordering
- [ ] At-most-once delivery with FIFO ordering
- [ ] Exactly-once delivery with no ordering guarantee

# What communication model does Amazon SNS use?

- [ ] Point-to-point queue model
- [ ] Streaming model
- [x] Publish/Subscribe (Pub/Sub) model
- [ ] Request/Response model

# Which disaster recovery strategy provides the fastest RTO but at the highest cost?

- [ ] Backup and Restore
- [ ] Pilot Light
- [ ] Warm Standby
- [x] Multi Site / Hot Site

# What does RPO (Recovery Point Objective) measure?

- [ ] The maximum acceptable downtime after a disaster
- [x] The maximum acceptable amount of data loss measured in time
- [ ] The number of servers needed for disaster recovery
- [ ] The total cost of the recovery solution

# What is the primary benefit of Amazon RDS Proxy

- [ ] Automatically increases database storage capacity
- [x] Provides connection pooling and reduces failover time by up to 66
- [ ] Encrypts all data at rest automatically
- [ ] Creates read replicas on demand

# A developer notices that some messages in an SQS Standard Queue are being processed twice by different EC2 instances, even though the instances are not failing. The average task processing time is 50 seconds, and the queue’s visibility timeout is set to 30 seconds. What is the most likely cause?

- [ ] The producer/user is sending the same message twice due to networking latency (lagging).
- [ ] The EC2 instances are not using Long Pooling
- [ ] The message was not moved to the Dead Letter Queue
- [x] The visibility timeout is too short for the task duration.

# A global healthcare provider must comply with regulations stating they cannot lose more than 15 minutes of patient data (RPO) and must be back online within 4 hours (RTO) if a primary AWS Region fails. They want to minimize costs while ensuring the database is always synchronized. Which strategy is best ?

- [x] Pilot Light
- [ ] Multi-site Active Active
- [ ] Backup and Restore
- [ ] Multi-AZ Deployment

# A global financial application requires a relational database that can handle massive read traffic across three continents. Additionally, the company needs a Disaster Recovery (DR) plan that allows them to promote a secondary database in a different geographic region if the primary region fails. Which configuration meets both needs?

- [ ] Amazon DynamoDB with a flexible schema.
- [ ] Amazon Redshift with columnar storage.
- [ ] RDS Multi-AZ deployment with a single Standby instance.
- [x] RDS with Cross-Region Read Replicas.

# An application needs to perform three independent tasks whenever an ’Order Placed’ event occurs: 1) Send a confirmation email, 2) Update the Inventory database, 3) Send data to a Machine Learning model for fraud detection. Each task has different processing speeds and failure rates. What is the most ’Simple , Resilient and Scalable’ architecture?

- [ ] RDS Read Replicas for each device
- [ ] A single SQS Queue that al 3 services poll from
- [x] SNS Topic fanning out to three separate SQS Queues
- [ ] Amazone Kinesis Data Streams

# A banking application must process financial transactions. Two strict requirements exist: 1) The transactions must be processed in the exact order they were received, 2) No transaction should ever be processed twice (Exactly-Once). Which combination provides this ’Strict Consistency’?

- [ ] Kinesis Data Streams with Partition Keys
- [x] SNS FIFO Topic + SQS FIFO Queue
- [ ] SNS Standard + SQS Standard
- [ ] Amazon Aurora Serverless

