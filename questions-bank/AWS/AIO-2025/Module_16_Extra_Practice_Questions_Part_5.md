---
title: Module 16: Extra Practice Questions (Part 5)
tags: []
domains: ["AWS"]
---

# A developer needs to ensure that a single event, such as ‘New Order’, is delivered to multiple independent downstream applications, and that each application receives its own copy of the event for separate processing. Which AWS architecture is most appropriate?

- [ ] Use a single SQS queue that all processing applications poll from.
- [x] Use an SNS topic to publish the event, with multiple SQS queues subscribed to that topic.
- [ ] Use RDS Proxy to broadcast the event to multiple database tables.
- [ ] Use ElastiCache Redis to store the event and have applications check for updates.

# Which statement is correct about Amazon SQS Standard Queue?

- [ ] It guarantees strict message ordering
- [ ] It can send only one message at a time
- [x] A message may be delivered more than once
- [ ] It can only be used with EC2, not with Lambda

# A company needs to build an order processing system where, whenever a new order is placed, information needs to be sent simultaneously to three independent systems: Warehouse, Accounting, and Shipping. Which AWS service is best suited for implementing this model?

- [ ] Amazon ElastiCache
- [x] Amazon SNS
- [ ] AWS Database Migration Service (DMS)
- [ ] Amazon SQS

# What is the primary difference between a Public Subnet and a Private Subnet in an AWS VPC?

- [x] A Public Subnet has a route table connected directly to an Internet Gateway, while a
Private Subnet does not.
- [ ] A Private Subnet can be accessed directly from the Internet, while a Public Subnet cannot.
- [ ] Public Subnets only support IPv4, while Private Subnets only support IPv6.
- [ ] A Public Subnet is always located in the first Availability Zone (AZ), while Private Subnets
are in the others.

# In Amazon RDS, which feature is primarily designed for High Availability and Disaster Recovery rather than read scaling?

- [ ] Read Replicas
- [x] Multi-AZ Deployment
- [ ] RDS Proxy
- [ ] Vertical Scaling

# Which of the following engines are supported by Amazon ElastiCache?

- [ ] MySQL and PostgreSQL
- [ ] Oracle and MariaDB
- [x] Redis and Memcached
- [ ] DynamoDB and MongoDB

# Which component in the AWS network security model acts as a firewall for Subnets (Subnet-level) and supports both "Allow"and "Deny"rules?

- [ ] Security Groups
- [ ] Internet Gateway
- [ ] Route Table
- [x] Network ACLs (NACL)

# Which of the following is a key benefit of using Amazon SQS (Simple Queue Service) in system integration?

- [ ] It enables real-time, synchronous communication between services.
- [x] It allows for the "decoupling"of application components to improve scalability.
- [ ] It automatically sends email notifications to customers when a new message arrives.
- [ ] It stores data permanently until the user manually deletes it.

# In the CIDR notation 174.16.0.0/24, how many IP addresses are available in total?

- [ ] 65536
- [x] 256
- [ ] 16
- [ ] 16.7 million

# A company wants to host a backend database that should NOT be accessible from the internet. Which subnet type is most suitable?

- [ ] Internet Gateway Subnet
- [ ] Edge Location
- [x] Private Subnet
- [ ] Public Subnet

# Which component is required to allow resources in a public subnet to communicate with the internet?

- [ ] Customer Gateway
- [x] Internet Gateway
- [ ] Virtual Private Gateway
- [ ] NAT Gateway

# What is the primary difference between a Security Group and a Network ACL (NACL)?

- [x] Security Groups support "Allow"rule only; NACLs support both "Allow"and "Deny"rule
- [ ] Security Groups are stateless; NACLs are stateful
- [ ] Security Groups work at the subnet level; NACLs work at the instance level
- [ ] There is no functional difference; they are redundant service

# When configuring a Security Group for your Web Server in the Lab, what should you ’Allow’ to ensure the Application Load Balancer (ALB) can reach it?

- [ ] All outbound traffic to the VPC CIDR
- [ ] SSH traffic from the Internet
- [x] HTTP traffic from the Security Group ID of the ALB
- [ ] HTTP traffic from source 0.0.0.0/0

# A web application is hosted on EC2 instances in a Private Subnet. You have successfully created a NAT Gateway in a Public Subnet. However, the instances still cannot access the internet to download updates. What is the most likely missing step?

- [ ] The EC2 instances do not have a Public IP address assigned.
- [x] The Route Table associated with the Private Subnet does not have a route pointing
0.0.0.0/0 to the NAT Gateway.
- [ ] The Security Group of the NAT Gateway is blocking inbound traffic from the Private
Subnet
- [ ] The NAT Gateway needs to be attached to an Internet Gateway directly.

# You have two VPCs (VPC A and VPC B) in the same region. You want instances in VPC A to communicate with instances in VPC B using private IP addresses. Which AWS feature should you implement?

- [ ] NAT Gateway
- [x] VPC Peering
- [ ] Internet Gateway
- [ ] AWS CloudFront

# You want to perform a "Blue/Green"deployment where you shift 10

- [ ] Simple Routing Policy.
- [x] Weighted Routing Policy
- [ ] Failover Routing Policy.
- [ ] Latency Routing Policy.

# A security admin wants to prevent a specific range of malicious IP addresses from even reaching the subnets in a VPC. Which tool provides this ’Deny’ capability at the network boundary?

- [x] Network ACLs
- [ ] Security Groups
- [ ] Application Load Balancer
- [ ] NAT Gateway

# A solutions architect is troubleshooting a connectivity issue. An EC2 instance in a public subnet can reach the internet, but an instance in the private subnet cannot, even though a NAT Gateway is present. What is the most likely cause?

- [ ] The instance is missing an Elastic IP address
- [x] The NAT Gateway is located in the private subnet
- [ ] The Route Table for the private subnet points 0.0.0.0/0 to the NAT Gateway
- [ ] The private Instance does not have a public IP address

# A company wants to implement a ’Defense in Depth’ strategy. They need to block a specific list of known malicious IP addresses at the subnet level. Which feature should they use?

- [ ] Route 53
- [ ] Internet Gateway
- [ ] Security Groups
- [x] Network ACLs

# An Application Load Balancer (ALB) is configured to sit in front of several EC2 instances. To ensure maximum security, what should be the source of the inbound HTTP rule on the EC2 instances?

- [x] The Security Group ID of the ALB
- [ ] The public IP of the ALB
- [ ] The ID of the Internet Gateway
- [ ] 0.0.0.0/0

# You are hosting a static website on Amazon S3. You want to use a custom domain name (e.g., www.myapp.com). Which AWS service is required to map your domain name to the S3 bucket?

- [ ] AWS CloudMap
- [ ] Amazon VPC
- [ ] AWS Direct Connect
- [x] Amazon Route 53

# A company needs a dedicated, private connection between their on-premises data center and AWS that does not go over the public internet. Which service should they choose?

- [ ] Amazon CloudFront
- [x] AWS Direct Connect
- [ ] AWS VPN
- [ ] VPC Peering

# Which component is necessary to allow a VPC to communicate with an S3 bucket without using a NAT Gateway or an Internet Gateway?

- [ ] Customer Gateway
- [ ] VPC Peering
- [x] VPC Endpoint
- [ ] AWS Transit Gateway

# A company runs a read-heavy analytics workload that is overloading its Amazon RDS production database. Which solution should a cloud architect recommend to offload the read traffic while keeping the production database unaffected?

- [ ] Enable Multi-AZ deployment on the RDS instance
- [x] Create an RDS Read Replica and direct analytics queries to it
- [ ] Increase the RDS instance size to handle more connections
- [ ] Enable RDS Storage Auto Scaling to expand capacity

# Which Amazon S3 storage class replicates data within a single Availability Zone and is NOT resilient to the physical loss of an entire AZ?

- [ ] Glacier Deep Archive
- [x] One Zone-IA
- [ ] Intelligent-Tiering
- [ ] Standard-IA

# Which AWS service allows you to create a private, logically isolated virtual network in the cloud?

- [ ] AWS Direct Connect
- [x] Amazon VPC (Virtual Private Cloud)
- [ ] Amazon Route 53
- [ ] Amazon CloudFront

# In a VPC, what is the core difference between a ’Public Subnet’ and a ’Private Subnet’?

- [ ] A Public Subnet has "Allow All"rules in its Security Group
- [x] A Public Subnet has a Route Table that points to an Internet Gateway (IGW)
- [ ] A Private Subnet does not support internal IP addresses
- [ ] A Public Subnet is always in a different Availability Zone than a Private Subnet.

# What is the name of AWS’s DNS service, and what is the default port for DNS services?

- [x] Amazon Route 53, Port 53
- [ ] Amazon CloudFront, Port 80
- [ ] AWS Direct Connect, Port 53
- [ ] Amazon VPC, Port 22

# Which service is best for storing common database query results, which helps to alleviate database access load?

- [ ] Amazon Machine Learning.
- [ ] Amazon SQS.
- [x] Amazon ElastiCache.
- [ ] Amazon EC2 Instance Store.

# A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?

- [ ] Amazon Redshift.
- [ ] Amazon DynamoDB.
- [ ] Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store.
- [x] Amazon EC2 with Amazon Elastic Block Store (Amazon EBS).

# Which of the following scenarios CAN’T trigger an automatic failover in Amazon RDS Multi-AZ deployment?

- [ ] Availability Zone (AZ) failure
- [ ] Network failure
- [ ] Instance or storage failure
- [x] High read traffic on the primary database

# A company is upgrading its Amazon RDS database from Single-AZ to Multi-AZ deployment to improve high availability. Which of the following correctly describes the process AWS performs during this upgrade?

- [ ] A snapshot of the primary DB is created →A standby DB is restored in the same AZ →
Asynchronous replication is established
- [ ] A snapshot of the primary DB is created →A standby DB is restored in another AZ →
Asynchronous replication is established
- [ ] A backup of the primary DB is created →A standby DB is restored in another AZ →
Synchronous replication is established
- [x] A snapshot of the primary DB is created →A standby DB is restored in another AZ →
Synchronous replication is established

# A company is planning to enable Amazon RDS Multi-AZ deployment for its production database. Which of the following is a primary advantage of using Multi-AZ?

- [ ] It improves read performance by distributing read traffic across multiple instances
- [x] It provides automatic failover and high availability in case of infrastructure failure
- [ ] It reduces storage costs by compressing data across Availability Zones
- [ ] It allows manual promotion of standby instances for scaling purposes

# We have an RDS database that struggles to keep up with the demand of requests from our website. Our million users mostly read news, and we don’t post news very often. Which solution is NOT adapted to this problem?

- [ ] An ElastiCache Cluster
- [x] RDS Multi-AZ
- [ ] RDS Read Replicas
- [ ] Use Amazon CloudFront

# Which statement best describes the difference between Aurora replicas and RDS read replicas?

- [ ] Aurora replicas are synchronous, while RDS read replicas are always asynchronous
- [ ] Aurora replicas can only be used for failover, while RDS read replicas can only be used
for read scaling
- [x] Aurora replicas share the same underlying storage as the writer, while RDS read replicas
maintain independent storage
- [ ] Aurora replicas are available for all RDS engines, while RDS read replicas are Aurora-only

# A company wants to run a relational database in AWS without managing most of the underlying operational work. Which service best fits this need?

- [ ] Amazon EC2
- [x] Amazon RDS
- [ ] AWS Lambda
- [ ] Amazon VPC

# A team wants a relational database service in AWS that is designed for high availability and runs in a VPC with multiple subnets across Availability Zones. Which service is the best fit?

- [x] Amazon Aurora
- [ ] Amazon SQS
- [ ] Amazon Route 53
- [ ] Amazon CloudFront

# You are designing a new OLTP application that requires high availability across two Availability Zones with automatic failover. You want minimal application changes and support for MySQL. Which managed database option best fits these requirements?

- [x] Amazon RDS for MySQL with Multi-AZ deployment
- [ ] Single-AZ Amazon RDS for MySQL instance
- [ ] Self-managed MySQL on EC2 instances in each Availability Zone
- [ ] Amazon Aurora Serverless v2 (MySQL-compatible) in a single Region

# A company is migrating a critical OLTP workload to AWS and requires a relational database that provides high availability across multiple Availability Zones, automatic failover, and minimal replication lag for read scalability. Which solution best meets these requirements?

- [ ] Deploy Amazon RDS with Multi-AZ enabled and create Read Replicas
- [x] Deploy Amazon Aurora with Aurora Replicas across multiple AZs
- [ ] Deploy Amazon DynamoDB with Global Tables enabled
- [ ] Deploy Amazon Redshift with cross-region snapshot replication

# An application processes incoming orders and must ensure that each order is processed exactly once, even in the presence of retries. The system should also support decoupling between services. Which AWS service and configuration best meet these requirements?

- [ ] Use Amazon SNS with multiple subscribers
- [ ] Use Amazon SQS Standard Queue with visibility timeout
- [x] Use Amazon SQS FIFO Queue with content-based deduplication
- [ ] Use AWS DMS with ongoing replication enabled

# Which statement about subnets is correct?

- [ ] A subnet can span multiple AWS Regions
- [ ] A subnet can span multiple Availability Zones
- [x] A subnet must reside in one Availability Zone
- [ ] A subnet is used only for databases

# A company is designing a highly secure VPC architecture. They want to ensure that only specific inbound traffic is allowed at the subnet level, while also maintaining instance-level security controls. Additionally, they need a solution that can explicitly deny certain IP ranges. Which combination of AWS features should be used?

- [ ] Use Security Groups only
- [ ] Use Network ACLs only
- [x] Use both Security Groups and Network ACLs
- [ ] Use Route 53 with health checks

# Which option describes a customer responsibility when designing a VPC for databases?

- [x] Choosing IP address ranges and subnets
- [ ] Maintaining AWS data centers
- [ ] Replacing failed physical servers
- [ ] Managing the AWS global backbone network

# A learner is studying DNS and wants to understand its main job in web access. What is the main purpose of DNS?

- [ ] It translates private keys into IAM policies
- [x] It translates domain names into IP addresses
- [ ] It translates packets into cached objects
- [ ] It translates routes into subnet addresses

# When configuring a Network Access Control List (NACL) for a subnet, which of the following characteristics distinguishes it from a Security Group?

- [ ] It is stateful, meaning return traffic is automatically allowed.
- [ ] It operates at the instance level rather than the subnet level.
- [x] It supports both "Allow"and "Deny"rules.
- [ ] It only filters inbound traffic, while outbound traffic is always permitted.

# Which AWS service acts as a virtual firewall at the instance level?

- [ ] Route Table
- [x] Security Group
- [ ] Network ACL
- [ ] Internet Gateway

# A global website has users in many countries, and pages load slowly because all content comes from one origin server.

- [ ] Use one deeper route table association
- [ ] Use one larger subnet with wider CIDR
- [x] Use a CDN with nearby edge caching
- [ ] Use one stricter NACL with deny rules

# You have a web server in a public subnet. You have opened port 80 in the Security Group’s inbound rules. However, users still cannot reach the website. If the issue lies within the Network ACL, what is the most likely reason?

- [x] The NACL does not have an outbound rule allowing traffic back to the users.
- [ ] The NACL automatically trusts the Security Group’s "Allow"rule.
- [ ] NACLs do not support HTTP traffic.
- [ ] The Internet Gateway is not attached to the NACL.

# Which type of subnet has a direct route to the internet through an Internet Gateway?

- [ ] Private subnet
- [ ] Isolated subnet
- [x] Public subnet
- [ ] Internal subnet

# A company is deploying a web application that uses Amazon RDS as its database. To ensure optimal security and the ability to perform software patching, which architecture is the MOST suitable?

- [ ] Deploy the RDS instance in a public subnet so that the AWS technical team can access
and patch the database directly via the internet.
- [x] Deploy the RDS instance in a private subnet, use a NAT gateway to allow outbound
connections for software updates, and configure a security group to allow traffic only from the web server.
- [ ] Use an internet gateway to provide a direct connection between end-users and the RDS instance to reduce query latency.
- [ ] Deploy both the RDS instance and the web server in the same public subnet and use a Network ACL to block all inbound traffic from external sources.

