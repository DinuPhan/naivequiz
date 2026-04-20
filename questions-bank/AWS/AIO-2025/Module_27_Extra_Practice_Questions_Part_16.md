---
title: Module 27: Extra Practice Questions (Part 16)
tags: []
domains: ["AWS"]
---

# To prevent a "Single Point of Failure"in a monolithic application, a Cloud Practitioner is advised to re-architect the application into components that run independently. This is an example of which design principle?

- [ ] Vertical scaling.
- [ ] Tightly coupled design.
- [ ] Manual monitoring.
- [x] Loose coupling.

# Which specific advantage of cloud computing addresses the traditional IT challenge of over provisioning or under-provisioning infrastructure based on "peak load"estimates?

- [x] Stop guessing about capacity.
- [ ] High availability.
- [ ] Increased speed and agility.
- [ ] Physical isolation of workloads.

# Which statement best describes a Multi-AZ architecture?

- [x] Deploying resources across multiple Availability Zones within a single cloud region
- [ ] Deploying application services across multiple cloud regions around the world
- [ ] Deploying multiple servers inside one data center to increase computing capacity
- [ ] Deploying resources at edge locations to reduce latency for global users

# How are Availability Zones (AZs) connected to each other within a Region?

- [ ] Via public internet connections.
- [ ] Through physical transport of storage media.
- [x] Using high-bandwidth, low-latency private networking.
- [ ] They are not connected to ensure isolation.

# A web application runs on multiple servers inside a cloud environment. The company wants to distribute incoming HTTP and HTTPS requests across several backend servers to improve reliability and scalability. This is supported by Application Load Balancer. What is the main function of ALB?

- [ ] Providing virtual machine instances for running backend application code.
- [ ] Resolving domain names into IP addresses for client network connections.
- [ ] Storing and caching static website files for faster delivery to global users.
- [x] Distributing incoming web requests across multiple application servers.

# A fintech platform has three requirements: (1) It must tolerate the failure of a single data center facility with synchronous database protection. (2) It must remain recoverable if an entire geographic Region becomes unavailable. (3) It must deliver static web content with low latency to users worldwide. Which architecture best aligns with AWS Global Infrastructure best practices?

- [ ] Deploy the application and database across multiple Availability Zones in one Region,
and use CloudFront for static content.
- [ ] Deploy the application in one Region, place backups in Edge Locations, and use Local
Zones for disaster recovery.
- [x] Deploy the application across multiple Availability Zones in a primary Region, replicate
to a secondary AWS Region for disaster recovery, and use CloudFront for global static content delivery.
- [ ] Deploy the database in two Local Zones and use Direct Connect for synchronous cross-city replication.

# Which statement best defines cloud computing?

- [ ] Running applications only on personal computers without connecting to the internet.
- [ ] Installing physical servers locally and maintaining hardware inside an organization building.
- [ ] Storing data permanently on removable storage devices such as USB drives.
- [x] Delivering computing resources through the internet with on-demand access and pay-as-
you-go pricing.

# Which AWS service provides resizable compute capacity in the cloud and gives you full administrative control over the operating system?

- [ ] AWS Lambda
- [x] Amazon EC2
- [ ] AWS Fargate
- [ ] Amazon S3

# What is the primary characteristic of an Availability Zone (AZ) regarding fault isolation?

- [ ] It is a geographic area isolated by international boundaries for data sovereignty.
- [ ] It consists of multiple Regions connected by low-latency networks.
- [x] It has independent power, cooling, and networking to ensure full fault isolation.
- [ ] It provides edge caching to reduce latency for global users.

# A global e-commerce website receives visitors from many countries. The company wants to direct users to the correct application endpoint using their domain name and also speed up delivery of images, videos, and static content for users around the world. Which combination of services should the company use to achieve these goals?

- [x] Use Amazon Route 53 for domain name resolution and Amazon CloudFront for global
content delivery.
- [ ] Use Amazon CloudFront for domain name resolution and Amazon Route 53 for content
caching.
- [ ] Use Amazon Route 53 for caching static files and Amazon CloudFront for managing
domain records
- [ ] Use Amazon CloudFront for routing DNS traffic and Amazon Route 53 for video streaming
services

# A company runs a reduced-capacity but fully functional copy of its application stack in a secondary Region. During a disaster, it plans to scale out that environment to handle production traffic. Which strategy is this?

- [ ] Backup and Restore
- [ ] Pilot Light
- [x] Warm Standby
- [ ] Active/Active

# Which cloud computing model provides virtualized computing resources such as virtual machines, storage, and networking over the internet?

- [ ] Software as a Service (SaaS)
- [ ] Platform as a Service (PaaS)
- [x] Infrastructure as a Service (IaaS)
- [ ] Function as a Service (FaaS)

# A small e-commerce company hosts its website on one physical server located in its office. One day, the server suddenly stops working because of a hardware problem. As a result, the entire website becomes unavailable and customers cannot access the online store. The IT team realizes that the system design caused the entire service to stop when a single component failed. Which concept best describes the problem in this situation?

- [x] Single Point of Failure where one component failure stops the entire system
- [ ] Resource Pooling where multiple users share the same infrastructure resources
- [ ] Rapid Elasticity where computing resources scale automatically with demand
- [ ] Broad Network Access where services are available through internet networks

# A company wants to deploy its application in multiple geographic regions so users around the world can access it with lower latency. Which AWS Cloud benefit supports this requirement?

- [ ] High availability
- [x] Global reach
- [ ] Elasticity
- [ ] Pay-as-you-go pricing

# A startup has continuously changing workloads, needs rapid deployment, does not want to invest in a data center upfront, and wants to pay only for the resources it actually uses. According to the slide content, which of the following best explains why cloud is more suitable than on-premises?

- [ ] Cloud provides full control over physical infrastructure and completely eliminates internet
dependency
- [x] Cloud changes upfront fixed capital costs into variable costs based on usage and supports
flexible resource scaling
- [ ] Cloud requires the company to manage all networking, storage, and virtualization by itself
- [ ] Cloud is only suitable for large enterprises with stable workloads over many years

# A small startup wants to build a web application for online food delivery. The team wants to focus mainly on developing application features rather than managing servers, operating systems, or runtime environments. They still want to write and deploy their own code, but they prefer the cloud provider to handle most of the infrastructure and platform maintenance. Which service model is the most appropriate solution for this situation?

- [ ] On-Premises infrastructure where the company manages servers, software, and networks
- [ ] Infrastructure as a Service (IaaS) providing virtual servers while users manage operating
systems
- [x] Platform as a Service (PaaS) providing runtime environments while users deploy applications
- [ ] Software as a Service (SaaS) providing complete applications managed entirely by providers

# A startup is launching a video streaming app and wants to ensure that users in Tokyo and New York experience the same fast loading times for thumbnail images. Which service should they implement?

- [ ] Amazon EC2 Auto Scaling
- [x] Amazon CloudFront using Edge Locations
- [ ] Multi-AZ deployment in the Singapore Region
- [ ] AWS Direct Connect

# Which component of the AWS Global Infrastructure consists of one or more discrete data centers, each with redundant power, networking, and connectivity, housed in separate facilities?

- [ ] AWS Regions.
- [ ] Edge Locations.
- [x] Availability Zones.
- [ ] Private Networking.

# To achieve high availability for a web application, compute resources should be provisioned across a minimum of how many Availability Zones?

- [ ] One.
- [x] Two.
- [ ] Three.
- [ ] Four.

# Which statement accurately describes the relationship between Regions and Availability Zones?

- [x] Regions contain multiple Availability Zones.
- [ ] Data centers contain multiple Regions.
- [ ] Availability Zones contain multiple Edge Locations.
- [ ] Edge Locations are housed within a single Availability Zone.

# A company currently operates in one AWS Region and wants to start supporting a second Region. What is the correct procedure to begin using this new Region?

- [ ] Contact an AWS Account Manager to sign a separate regional contract.
- [ ] Move an existing Availability Zone from the current Region to the new one.
- [ ] Download a Region-specific version of the Management Console.
- [x] Begin deploying resources in the second Region directly via the Management Console.

# A company requires synchronous replication of its database to ensure zero data loss if a single data center facility fails. Which feature of the Global Infrastructure makes this possible?

- [ ] High-speed fiber connections between different AWS Regions.
- [x] Low-latency, redundant networking links between Availability Zones within a Region.
- [ ] Automated caching of database writes at global Edge Locations.
- [ ] The use of AWS Direct Connect to link multiple data centers.

# An organization needs to protect its application against a service disruption that could affect an entire geographic area, such as a major natural disaster. What is the recommended architectural action?

- [ ] Deploy the application across all Availability Zones within one Region.
- [ ] Use a hybrid cloud model with on-premises resources in the same city.
- [x] Deploy the application across multiple AWS Regions.
- [ ] Replicate the data across multiple Edge Locations globally.

# Which factor is most critical when a customer must choose an AWS Region to ensure compliance with data sovereignty and legal requirements?

- [ ] Proximity to the customer’s corporate office for on-site audits.
- [x] The specific geographic location where data will be stored and processed.
- [ ] The number of Edge Locations available in that specific country.
- [ ] Whether the application is presented in the local language.

# Which component of the AWS Global Infrastructure is used by Amazon CloudFront to ensure low-latency delivery of content to end-users worldwide?

- [ ] Regional Data Centers.
- [ ] Virtual Private Gateways.
- [ ] Availability Zones.
- [x] Edge Locations.

# In the AWS Shared Responsibility Model, which of the following is the sole responsibility of AWS regarding Global Infrastructure?

- [ ] Configuring Network ACLs to block malicious IP addresses.
- [ ] Managing security groups for EC2 instances.
- [x] Management and physical security of Edge Locations.
- [ ] Patching the guest operating system of resources in an AZ.

# Which of the following can be components of a VPC in the AWS Cloud?

- [ ] Amazon API Gateway
- [ ] Amazon S3 buckets and objects
- [ ] AWS Storage Gateway
- [x] Internet gateway

# A company is migrating its application from an on-premises infrastructure to the cloud to improve high availability and reduce infrastructure management overhead. The company decides to run its application on Amazon EC2. According to the Shared Responsibility Model of Amazon Web Services, which of the following responsibilities belongs to the customer?

- [ ] Maintaining the physical servers in AWS data centers
- [x] Managing and patching the operating system running on the EC2 instance
- [ ] Ensuring the availability of the underlying AWS networking infrastructure
- [ ] Maintaining the cooling systems and power supply in AWS data centers

# Which of the ’Six Advantages of Cloud Computing’ specifically addresses the ability of a company to avoid over-provisioning or under-provisioning based on workload estimates?

- [ ] Trade fixed expense for variable expense
- [ ] Benefit from massive economies of scale
- [x] Stop guessing capacity
- [ ] Go global in minutes

# Over Night is a startup that provides event management and online ticket distribution services. The company wants to avoid large upfront investments in hardware, quickly launch its platform, and automatically scale resources to handle sudden increases in demand. Which solution would BEST meet these requirements?

- [ ] Build an on-premises data center and purchase enough servers to handle the highest
expected traffic
- [ ] Use a co-location data center and manage all physical servers and networking infrastructure internally.
- [x] Deploy the application in the AWS Cloud using scalable services that automatically adjust capacity based on demand.
- [ ] Purchase several physical servers and host the application in the company’s office.

# A healthcare company is working with sensitive patient records which is currently stored in an on-premise way. The company intends to extend globally and expecting high demand due to the computational resource of upcoming AI usage for medical image analysis. Which architecture should the company choose?

- [ ] Build more on-premise data center over the globe for expansion and security.
- [ ] Move everything to cloud for easy expand and scale as well as lower latency due to powerful
pre-installed infrastructure.
- [ ] Keep everything on-premise for full control and security.
- [x] Build a hybrid model where keeping patient record on-premise while computational resource
utilizing cloud infrastructure.

# DeepScan runs an AI X-ray analysis app on Amazon EC2. Despite using Security Groups, EBS encryption, and a hardened Ubuntu OS, a data leak occurs due to an outdated OpenSSL library running on the EC2 instance.

- [ ] AWS: They must ensure all software/libraries on their infrastructure are patched.
- [ ] AWS: They are responsible for all encryption-related vulnerabilities (like OpenSSL).
- [x] Customer (DeepScan): They are responsible for managing the guest OS, applications, and
installed libraries.
- [ ] Shared: AWS is responsible for the software flaw, and the customer for failing to detect
it.

# Which of the following is a core design principle of the "Security"pillar of the Well-Architected Framework?

- [ ] Stop guessing capacity
- [x] Implement a strong identity foundation
- [ ] Scale horizontally to increase workload availability
- [ ] Perform operations as code

# What type of cloud computing service is AWS Lambda (Serverless)?

- [ ] Infrastructure as a Service (IaaS)
- [ ] Platform as a Service (PaaS)
- [ ] Software as a Service (SaaS)
- [x] Function as a Service (FaaS)

# Which AWS Cloud characteristic allows customers to scale resources up or down automatically based on demand?

- [ ] Resource pooling
- [x] Rapid elasticity
- [ ] Broad network access
- [ ] Measured service

# Which AWS service is considered a global service?

- [ ] Amazon EC2
- [ ] Amazon RDS
- [x] AWS IAM
- [ ] Amazon S3

# What is the primary purpose of AWS Edge Locations?

- [ ] Run virtual machines
- [ ] Store relational databases
- [x] Cache content closer to users to reduce latency
- [ ] Host application servers

# Which cloud service model allows customers to manage operating systems and applications, while AWS manages the underlying infrastructure?

- [ ] SaaS
- [ ] PaaS
- [x] IaaS
- [ ] On-premises

# Which AWS infrastructure component provides geographic isolation

- [ ] Availability Zone
- [x] Region
- [ ] Edge location
- [ ] Data center

# What best describes the concept of scalability?

- [ ] The ability for a system to withstand a certain amount of failure and still remain funcitonal
- [x] The ability for a system to grow in size, capacity, and/or scope
- [ ] The ability for a system to grow and shrink based on demand
- [ ] The ability for a system be accessible when you attempt to acesss it

# What is the goal of High Availability architecture?

- [x] Minimize downtime
- [ ] Reduce cost
- [ ] Increase storage capacity
- [ ] Simplify deployment

# A company wants to deploy an application for users in Vietnam and Southeast Asia. Which AWS Region would most likely provide the lowest latency?

- [ ] us-east-1 (N. Virginia)
- [ ] ap-south-1 (Mumbai)
- [ ] eu-west-1 (Ireland)
- [x] ap-southeast-1 (Singapore)

# A company wants to improve application availability within a single region. Which architecture should they implement?

- [x] Deploy instances in multiple AZs
- [ ] Deploy instances in a single AZ
- [ ] Deploy in a single EC2 instance
- [ ] Deploy using only edge locations

# An application stores frequently accessed static images globally. Which AWS service can cache these images near users?

- [ ] RDS
- [x] CloudFront
- [ ] EC2
- [ ] EBS

# A company wants to automatically redirect traffic if one Availability Zone fails. Which AWS component should they use?

- [x] Application Load Balancer
- [ ] Amazon S3
- [ ] AWS IAM
- [ ] Amazon Glacier

# Which AWS deployment strategy protects against data center failures within a region?

- [ ] Multi-Region architecture
- [x] Multi-AZ architecture
- [ ] Edge computing
- [ ] Hybrid cloud

# A company wants to build an architecture that continues running even if an entire AWS Region becomes unavailable. What should they implement?

- [ ] Multi-AZ deployment
- [ ] Auto Scaling
- [x] Multi-Region architecture
- [ ] Edge caching

# An e-commerce website deploys EC2 instances in two Availability Zones behind an Application Load Balancer. What AWS architectural principle does this represent?

- [ ] Edge caching
- [ ] Hybrid deployment
- [ ] Resource pooling
- [x] Fault isolation and high availability

# Which architecture provides the highest resilience against large-scale disasters but increases complexity and cost?

- [ ] Single AZ deployment
- [ ] Multi-AZ deployment
- [x] Multi-Region deployment
- [ ] Edge caching

# Which term describes the cost advantage that AWS has over a company running its own private cloud?

- [ ] Total Cost of Ownership (TCO)
- [x] Economies of Scale
- [ ] Operating Expenses
- [ ] Capital Expenses

