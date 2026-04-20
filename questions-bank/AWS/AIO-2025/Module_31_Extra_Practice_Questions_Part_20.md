---
title: Module 31: Extra Practice Questions (Part 20)
tags: []
domains: ["AWS"]
---

# Which of the following is NOT one of the Five Characteristics of Cloud Computing?

- [ ] Rapid elasticity and scalability
- [ ] Multi-tenancy and resource pooling
- [x] Dedicated Support Agent to help you deploy applications
- [ ] On-demand self service

# Which deployment model combines cloud resources with existing on-premises infrastructure?

- [ ] Public Cloud
- [ ] Private Cloud
- [x] Hybrid Cloud
- [ ] SaaS

# Which cloud characteristic allows resources to automatically scale up or down quickly when demand changes?

- [ ] Resource Pooling
- [ ] Measured Service
- [x] Rapid Elasticity
- [ ] Broad Network Access

# AWS are able to continue to reduce their pricing due to:

- [ ] Pay-as-you go pricing
- [ ] The AWS global infrastructure
- [x] Economies of scale
- [ ] Reserved instance pricing

# When performing a Total Cost of Ownership (TCO) analysis, which of the following expenses is typically associated with on-premises environments but is reduced or eliminated in the AWS Cloud?

- [ ] Software development.
- [x] Power consumption and cooling for physical servers.
- [ ] Project management.
- [ ] Market research.

# In Disaster Recovery (DR) strategies, which of the following characteristics distinguishes the "Pilot Light"model from the "Warm Standby"model?

- [x] Core resources (such as databases) are always running, but other components are only created after a disaster occurs.
- [ ] Data is only periodically saved as backups, and no resources are running.
- [ ] The entire system is fully replicated and runs in parallel in an Active-Active state.
- [ ] A reduced version of the entire system is always running and ready to handle low traffic.

# A financial organization wants to keep part of its system in an internal data center while using the cloud to expand resources when needed. Which deployment model best fits this requirement?

- [ ] Public Cloud
- [ ] Private Cloud
- [x] Hybrid Cloud
- [ ] Multi-Cloud

# Which factor is most critical when a customer must choose an AWS Region to ensure compliance with data sovereignty and legal requirements?(such as GDPR in Europe)

- [ ] Proximity to the customer’s corporate office for on-site audits.
- [x] The specific geographic location where data will be stored and processed.
- [ ] The number of Edge Locations available in that specific country.
- [ ] Whether the application is presented in the local language.

# If your business has a highly stable workload, runs continuously for 5 years with high server utilization, and already has an infrastructure operations team, what is the most cost-effective strategy?

- [ ] Migrate everything to the Public Cloud immediately.
- [x] Continue using or investing in On-premises because CAPEX will be lower than OPEX in
this long-term scenario.
- [ ] Use the SaaS model for the entire system.
- [ ] Hire more engineers to build a complex internal Cloud.

# A company wants to achieve Disaster Recovery (DR) with "Zero Downtime". Based on the DR Strategy Ladder, which deployment pattern is this?

- [ ] Backup and Restore
- [ ] Pilot Light
- [ ] Warm Standby
- [x] Multi-Site (Active-Active)

# A company deploys a web application in a single region but uses two Availability Zones. What is the main purpose of this architecture?

- [ ] Reduce data storage costs
- [x] Increase system fault tolerance if a data center fails
- [ ] Serve users across multiple continents faster
- [ ] Ensure data complies with national regulations

# In the physical infrastructure of AWS, how is each Availability Zone (AZ) designed to ensure fault isolation?

- [x] It has independent power supplies, cooling systems, and networking infrastructure.
- [ ] They share one large data center, but it is divided into different rooms.
- [ ] Each AZ is located in a different country to ensure legal safety.
- [ ] They are connected to other AZs through the public internet to ensure independence.

# Which improves HA in microservices architecture?

- [ ] Monolithic app
- [x] Loose coupling with ELB and independent AZ deployments
- [ ] Tight dependencies
- [ ] Single DB

# A fintech company must ensure that customer data is stored and processed within the territory of Europe to comply with legal regulations. Which of the following is the most important consideration when designing the AWS architecture?

- [ ] Use multiple Availability Zones
- [x] Choose a region that meets legal requirements
- [ ] Use Edge Locations close to customers
- [ ] Increase the number of EC2 instances

# A university needs to build a course registration portal. The system has very low traffic most months but experiences massive spikes during the enrollment season. Which solution is most appropriate?

- [ ] Buy many physical servers and place them at the university just to handle the enrollment season.
- [x] Deploy the system on the Cloud to easily scale resources according to the seasonal campaign and launch quickly.
- [ ] Do nothing and accept that the system will crash when many students access it.
- [ ] Buy pre-packaged software (SaaS) that does not support expansion.

# A global website wants to reduce latency when users around the world load images and JavaScript files. Which AWS infrastructure component best supports this goal?

- [ ] Availability Zones
- [x] Edge Locations
- [ ] Virtual Private Cloud (VPC)
- [ ] Amazon EC2

# What is the main difference between Multi-AZ and Multi-Region deployments?

- [ ] Multi-AZ is for caching global content, while Multi-Region is for compute workloads
- [x] Multi-AZ prevents data center failure impact (High Availability), while Multi-Region
provides disaster recovery against regional failures
- [ ] Multi-AZ uses asynchronous replication, while Multi-Region uses synchronous replication
- [ ] Multi-AZ requires user traffic routing via DNS, while Multi-Region relies on simple Load
Balancers

# A company wants to keep sensitive customer data in its own infrastructure while using cloud resources for scalable computing workloads. Which deployment model is the best fit?

- [ ] Public Cloud
- [ ] Private Cloud
- [x] Hybrid Cloud
- [ ] Multi-tenant Cloud

# An e-commerce business experiences a massive spike in traffic during a holiday sale. The AWS Cloud automatically adds more servers to handle the traffic, and then removes them when the sale ends. Which cloud characteristic is this?

- [ ] Agility
- [ ] Global Reach
- [x] Elasticity
- [ ] Reliability

# An organization is moving from Infrastructure as a Service (IaaS) to Platform as a Service (PaaS) to host their web application. Which of the following tasks will the organization NO LONGER be responsible for after this migration?

- [ ] A. Managing user access and identity (IAM).
- [ ] B. Configuring the application code and business logic.
- [x] C. Patching and maintaining the underlying Operating System (OS).
- [ ] D. Ensuring the security of the data stored within the application.

# Your media company does not have a software engineering team but needs an online document collaboration tool and an email system for employees. Which model should you choose?

- [ ] Buy On-premises servers and configure the email system manually.
- [ ] Rent IaaS (like Amazon EC2) and configure the web server yourself.
- [x] Use the SaaS model (like Amazon WorkDocs, Amazon WorkMail) because you only
subscribe to the software without needing an engineering team.
- [ ] Rent PaaS to write your own source code for the email application.

# Which of the following is NOT one of the six main advantages of cloud computing described by AWS?

- [ ] Go global in minutes
- [x] Trade variable expense for fixed expense
- [ ] Stop spending money running and maintaining data centers
- [ ] Benefit from massive economies of scale

# Under the Shared Responsibility Model, when an organization migrates to a Software as a Service (SaaS) solution, which of the following remains a primary responsibility of the customer?

- [ ] A. Physical security of the data center.
- [ ] B. Updating and patching the operating system.
- [x] C. Managing data access permissions and user identities.
- [ ] D. Maintaining the underlying network infrastructure.

# A company wants to ensure its database remains available even if a primary data center suffers a total power failure. Which AWS feature or service configuration best addresses this requirement with minimal manual intervention?

- [ ] Creating a Read Replica in the same Availability Zone.
- [x] Configuring an Amazon RDS Multi-AZ deployment.
- [ ] Manually taking snapshots every hour and storing them in S3.
- [ ] Using an Application Load Balancer to distribute traffic to a single EC2 instance.

# Which of the following does NOT belong to the AWS Cloud Computing models?

- [ ] Platform as a Service (PaaS)
- [ ] Infrastructure as a Service (IaaS)
- [ ] Software as a Service (SaaS)
- [x] Networking as a Service (NaaS)

# A global media company wants to reduce "latency"for its users in South America who are accessing video content stored in a "Region"located in Northern Virginia, USA. Which component of the Cloud Global Infrastructure should they use to cache content closer to their users?

- [ ] A. Availability Zones (AZs)
- [x] B. Edge Locations
- [ ] C. Regional Edge Caches
- [ ] D. Local Zones

# Which design principle improves High Availability (HA) in cloud architecture?

- [ ] Deploy all resources in a single Availability Zone
- [ ] Remove redundancy to reduce cost
- [x] Use redundancy across multiple Availability Zones
- [ ] Store all data locally on a single server

# A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?

- [ ] Amazon Elastic Compute Cloud (Amazon EC2)
- [x] AWS Lambda
- [ ] Amazon DynamoDB
- [ ] AWS CodeCommit

# Which of the following AWS services is classified as a Global Service rather than a Regional Service?

- [ ] Amazon EC2 (Virtual Servers)
- [ ] Amazon S3 (Object Storage)
- [ ] Amazon RDS (Relational Database Service)
- [x] AWS IAM (Identity and Access Management)

# Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?

- [ ] Fault tolerance
- [x] Global reach
- [ ] Pay-as-you-go pricing
- [ ] High availability

# Which statement best describes Global cloud services?

- [ ] They operate within a single Availability Zone
- [ ] They operate within a single Region only
- [x] They are available and managed across multiple regions globally
- [ ] They only work with edge locations

# A company is designing a globally distributed application and needs to identify which AWS services are considered Global Services rather than Regional Services. Which of the following are Global Services?

- [ ] Amazon EC2
- [ ] Amazon RDS
- [x] Amazon Route 53
- [ ] Amazon S3

# What is cloud computing?

- [ ] Storing files only on a USB
- [x] Delivering IT resources over the internet with pay-as-you-go pricing
- [ ] Installing software only on a local computer
- [ ] Building your own physical server room

# Which of the following is an AWS Cloud architecture design principle?

- [ ] Implement single points of failure
- [x] Implement loose coupling
- [ ] Implement monolithic design
- [ ] Implement vertical scaling

# Which of the following is a characteristic of cloud computing?

- [ ] Fixed hardware capacity
- [x] Rapid elasticity (resources can scale quickly)
- [ ] Only works without internet
- [ ] Requires buying physical servers

# In the Disaster Recovery Strategy Ladder, which pattern has the highest cost but achieves zero/near-zero downtime and high readiness?

- [ ] Backup Restore
- [ ] Warm Standby
- [x] Active-Active
- [ ] Pilot Light

# A user is planning to launch three EC2 instances behind a single Elastic Load Balancer. The deployment should be highly available

- [x] Launch the instances across multiple Availability Zones in a single AWS Region
- [ ] Launch the instances as EC2 Spot Instances in the same AWS Region and the same
Availability Zone
- [ ] Launch the instances in multiple AWS Regions, and use Elastic IP addresses.
- [ ] Launch the instances as EC2 Reserved Instances in the same AWS Region, but in different
Availability Zones

# Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?

- [x] Elimination of expenses for running and maintaining data centers
- [ ] Price discounts that are identical to discounts from hardware providers
- [ ] Distribution of all operational controls to AWS
- [ ] Elimination of operational expenses

# Which of the following is a core characteristic of AWS Cloud Computing?

- [x] A. On-Demand Self-Service
- [ ] B. Full Physical Hardware Control
- [ ] C. Fixed Monthly Pricing
- [ ] D. Static Infrastructure Capacity

# AWS Managed Data Analytics services (like Amazon EMR or Athena) are generally categorized under which cloud delivery model?

- [ ] A. IaaS
- [x] B. PaaS
- [ ] C. SaaS
- [ ] D. On - premises

# A company wants to set up a highly available workload in AWS with a disaster recovery plan that will allow the company to recover in case of a regional service interruption. Which configuration will meet these requirements?

- [ ] Run on two Availability Zones in one AWS Region, using the additional Availability Zones in the AWS Region for the disaster recovery site.
- [x] Run on two Availability Zones in one AWS Region, using another AWS Region for the disaster recovery site.
- [ ] Run on two Availability Zones in one AWS Region, using a local AWS Region for the disaster recovery site.
- [ ] Run across two AWS Regions, using a third AWS Region for the disaster recovery site.

# A startup needs to keep sensitive data on-site due to strict local regulations but wants to use AWS for its web applications. Which deployment model should they use?

- [x] A. Hybrid Cloud
- [ ] B. Public Cloud
- [ ] C. Private Cloud
- [ ] D. None of the above

# Centralized identity management for admins across all regions. Which architecture correctly meets all requirements?

- [x] Multi-AZ database; Edge Locations to cache static content; Global service (like IAM) for identity management.
- [ ] Multi-Region database; Availability Zones (AZ) to distribute static content; Regional service for identity management.
- [ ] Single-AZ database; Edge Locations for backend logic; Global service for the database.
- [ ] Multi-AZ database; Edge Locations to cache static content; Regional service (like IAM)
for identity management.

# A company no longer needs to purchase and maintain physical servers after migrating its workloads to AWS. Which cloud benefit does this demonstrate?

- [x] Stop spending money running and maintaining data centers
- [ ] Increase speed and agility
- [ ] Global reach
- [ ] Elasticity

# A company expands its application to customers in Europe and Asia by deploying resources in multiple AWS Regions. Which cloud benefit does this demonstrate?

- [ ] Elasticity
- [x] Global reach
- [ ] Massive economies of scale
- [ ] Pay-as-you-go pricing

# Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?

- [ ] A distinct data center with redundant power and networking within an AWS Region.
- [ ] An independent data center located on a different continent than the Region.
- [x] A fault-isolated location within an AWS Region that has independent power, cooling, and
physical security.
- [ ] A logical grouping of compute resources that can be accessed globally.

# Which AWS Cloud benefit allows organizations to convert upfront infrastructure costs into variable expenses?

- [x] Trade CAPEX for OPEX
- [ ] High availability
- [ ] Elasticity
- [ ] Global reach

# AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple
.

- [ ] Availability Zones
- [x] Regions
- [ ] Edge Locations
- [ ] VPCs

# A company needs to deploy an application with minimal latency for users across Europe, Asia, and North America. Which AWS feature should be used?

- [ ] Multi-AZ deployment across all Regions
- [x] Multiple AWS Regions with CloudFront distribution
- [ ] Edge Locations only
- [ ] A single Region with Elastic IP addresses

# A company has deployed an application in the Northern California (us-west-1) region. After examining traffic, management notices that about 30

- [ ] Increase the compute capacity in us-west-1
- [x] Deploy application resources to an AWS Region closer to Asia and use Route 53 for
geolocation routing
- [ ] Use CloudFront to cache all content in Edge Locations
- [ ] Replicate data across multiple Availability Zones in us-west-1

