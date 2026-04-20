---
title: Module 28: Extra Practice Questions (Part 17)
tags: []
domains: ["AWS"]
---

# A startup is launching a new app. They expect a massive spike in traffic during a 2-hour marketing event, followed by very low traffic. Which cloud characteristic allows them to handle the spike without paying for idle servers afterward?

- [ ] Reliability
- [ ] Durability
- [x] Elasticity
- [ ] Sustainability

# A global e-learning platform stores videos in S3 in the Tokyo Region. Students from Europe complain about slow loading times. Which solution BEST improves performance for these users while keeping data in the same Region?

- [ ] Deploy in a single AZ with Auto Scaling only
- [x] Deploy across multiple AZs behind an Application Load Balancer
- [ ] Deploy in two different Regions without load balancing
- [ ] Use CloudFront Edge Locations to host the system directly

# A global e-learning platform stores videos in S3 in the Tokyo Region. Students from Europe complain about slow loading times. Which solution BEST improves performance for these users while keeping data in the same Region?

- [ ] Move S3 buckets to a European Region only
- [ ] Enable Multi-AZ for the S3 bucket
- [x] Use CloudFront with Edge Locations to cache video content closer to users
- [ ] Create a second S3 bucket in Europe and manually sync data daily

# A startup wants to develop a new web application. They do not have a system administration team to maintain the operating system (OS) or perform software patching, but they must retain full control over their application code and data. Based on the shared responsibility model, which cloud computing model best fits this requirement?

- [ ] Software as a Service (SaaS)
- [ ] On-premise
- [ ] Infrastructure as a Service (IaaS)
- [x] Platform as a Service (PaaS)

# Which of the following is NOT one of the five main characteristics of cloud computing?

- [ ] On-demand self-service
- [ ] Rapid elasticity
- [x] Manual provisioning
- [ ] Measured service

# Which AWS service is a typical example of Infrastructure as a Service (IaaS)?

- [ ] Amazon WorkMail
- [ ] AWS Elastic Beanstalk
- [ ] Amazon WorkDocs
- [x] Amazon EC2

# Which of the following services is an example of Software as a Service (SaaS) on AWS?

- [ ] Amazon S3
- [ ] AWS Elastic Beanstalk
- [ ] Amazon EC2
- [x] Amazon WorkDocs

# Which AWS Cloud benefit is characterized by the ability to swap upfront fixed capital expenses (CAPEX) for variable operational expenses (OPEX)?

- [ ] Massive economies of scale
- [x] Trade fixed expense for variable expense
- [ ] High availability
- [ ] Stop guessing capacity

# Which of the following is an example of an AWS "Global Service"that is not tied to a specific geographic Region?

- [ ] Amazon EC2
- [ ] Amazon RDS
- [x] AWS IAM (Identity and Access Management)
- [ ] Amazon VPC

# Which cloud concept describes the ability to automatically acquire resources as needed and release them when they are no longer required to match demand?

- [ ] Reliability
- [ ] High Availability
- [x] Elasticity
- [ ] Durability

# Which of the following components is the customer responsible for managing in the Platform as a Service (PaaS) model?

- [ ] Operating Systems (OS)
- [x] Applications and Data
- [ ] Networking and Storage
- [ ] Virtualization

# A company wants full control over its infrastructure and hosts its servers inside its own building. Which deployment model is being used?

- [ ] Public Cloud
- [ ] Hybrid Cloud
- [ ] Edge Computing
- [x] Private Cloud (On-premises)

# What is an AWS Region?

- [ ] A single data center located in a major city.
- [x] A physical geographic area that contains multiple Availability Zones.
- [ ] A collection of Edge Locations used for content caching.
- [ ] A virtual network boundary for your AWS resources.

# What is the primary purpose of an AWS Edge Location?

- [ ] To host primary compute workloads like EC2 instances.
- [ ] To provide long-term archival storage for data.
- [x] To deliver content closer to end-users to reduce latency.
- [ ] To provide synchronous data replication between Regions.

# Which Disaster Recovery (DR) strategy involves keeping a minimal, scaled-down version of a functional environment always running in a secondary Region?

- [ ] Backup and Restore
- [ ] Pilot Light
- [x] Warm Standby
- [ ] Multi-Site (Active-Active)

# A European fintech company must comply with strict GDPR data residency requirements that mandate customer data must be stored within a specific country’s legal jurisdiction. What is the most critical factor for them when setting up their AWS environment?

- [ ] Selecting the Region with the lowest pricing for S3 storage.
- [ ] Ensuring they have the maximum number of AZs available in their chosen continent.
- [x] Selecting the specific AWS Region located within the required geographic/legal boundary.
- [ ] Using IAM policies to restrict global access to their data.

# Why is synchronous data replication typically limited to a Multi-AZ architecture rather than a Multi-Region architecture?

- [ ] Because Edge Locations do not support synchronous protocols.
- [ ] Because AWS does not allow data transfer between different Regions.
- [x] Because the physical distance between Regions introduces latency that makes synchronous
sync difficult.
- [ ] Because Regional services like Amazon RDS cannot operate in multiple AZs.

# Under the Shared Responsibility Model, which task is a customer’s responsibility when using Infrastructure as a Service (IaaS) but becomes AWS’s responsibility when using a managed Platform as a Service (PaaS)?

- [ ] Physical security of the data center
- [x] Patching the guest operating system
- [ ] Maintaining the virtualization layer
- [ ] Disposal of physical storage disks

# A company wants to ensure its application remains operational even if an entire data center facility within a Region fails. Which architecture should they implement?

- [ ] Single-AZ deployment with higher-capacity servers.
- [x] Multi-AZ deployment within the same Region.
- [ ] Deploying the application in a single Edge Location.
- [ ] Moving the entire workload to an on-premises Private Cloud

# A company wants its application to remain operational if a data center in a Region fails. Which architecture best meets this requirement?

- [ ] Deploy across multiple Regions
- [x] Deploy across multiple AZs
- [ ] Deploy in one AZ with Auto Scaling
- [ ] Use Edge Locations only

# Which AWS infrastructure component provides the lowest latency access to users globally?

- [ ] Regions
- [ ] AZs
- [x] Edge Locations
- [ ] VPC

# What is the main difference between an Availability Zone (AZ) and a Region?

- [ ] AZ spans multiple Regions
- [x] Region contains multiple AZs
- [ ] AZ is global
- [ ] Region is virtual only

# Which scenario is the BEST use case for Multi-Region deployment?

- [ ] Improve availability within a Region
- [ ] Reduce AZ latency
- [x] Disaster recovery and global users
- [ ] Reduce storage cost

# A developer wants to deploy a web application without worrying about managing the underlying infrastructure, such as the operating system or server hardware. Which cloud computing model should they use?

- [ ] Infrastructure as a Service (IaaS)
- [ ] Software as a Service (SaaS)
- [x] Platform as a Service (PaaS)
- [ ] On-premises

# Which AWS service is considered global?

- [ ] Amazon EC2
- [ ] Amazon RDS
- [x] AWS IAM
- [ ] Amazon VPC

# Which AWS infrastructure component is primarily used to cache content closer to end-users to reduce latency and improve performance?

- [ ] Regions
- [ ] Availability Zones
- [x] Edge Locations
- [ ] Virtual Private Clouds (VPC)

# Which of the following AWS services is considered a Global service?

- [ ] Amazon EC2
- [ ] Amazon RDS
- [x] AWS IAM
- [ ] Amazon VPC

# A company is over-provisioning its on-premises resources to handle peak traffic, leading to high waste during off-peak hours. Which AWS Cloud advantage directly addresses this specific inefficiency?

- [ ] Go global in minute
- [x] Stop guessing capacity
- [ ] Massive economies
- [ ] Increase speed and agility

# A IT company currently operates with a fully Cloud-Native architecture on AWS. They are planning to transition to a Hybrid architecture by establishing an on-premises data center to handle their highly stable internal workloads. What is the Benefits the company gain from this transition ?

- [ ] A. Elimination of the need for an internal team to manage and maintain physical infrastructure.
- [ ] B. Establish Shared Responsibility model where AWS manages the physical security of
the new on-premises data center.
- [ ] C. Don’t need to guess about capacity by automatically scaling resources to match
fluctuating traffic.
- [x] D. Total physical control and customization over hardware and underlying infrastructure
for specific compliance needs.

# A startup have a small software engineering team to write the application code and manage user data, but they do not want to spend time managing or patching the underlying operating systems, runtime environments, or server hardware. Which cloud computing model should they choose ?

- [ ] A. Infrastructure as a Service (IaaS), because it provides the team with full control over
the operating system and runtime environment.
- [ ] B. Software as a Service (SaaS), because the cloud provider will manage everything
including the application and data, eliminating the need for their engineering team.
- [x] C. Platform as a Service (PaaS), because the provider manages the underlying infrastructure,
operating system, and runtime.
- [ ] D. On-Premises, because it allows their software engineering team to have complete control
over the physical data center.

# Which of the following is a key characteristic of cloud computing that allows users to automatically increase or decrease computing resources based on demand?

- [ ] A. Resource pooling
- [x] B. Rapid elasticity
- [ ] C. Broad network access
- [ ] D. Measured service

# A company already has an on-premises data center but wants to integrate some workloads with AWS services while keeping sensitive data locally. Which deployment model should the company use?

- [ ] A. Public Cloud
- [ ] B. Private Cloud
- [x] C. Hybrid Cloud
- [ ] D. Community Cloud

# A startup launches a new online course platform. During enrollment periods, the number of users increases dramatically, but outside the enrollment season traffic is very low. The company wants infrastructure that can automatically scale up during high demand and scale down when demand decreases Which cloud characteristic BEST addresses this requirement?

- [ ] A. Broad Network Access
- [x] B. Rapid Elasticity
- [ ] C. Resource Pooling
- [ ] D. Measured Service

# A company wants to avoid large upfront costs for servers and data centers and prefers paying only for the resources they use. Which cloud advantage supports this business goal?

- [ ] A. Global reach
- [x] B. Trade fixed expense for variable expense
- [ ] C. Resource pooling
- [ ] D. Broad network access

# Currently, your company (a FinTech company working with stock market data) has its servers (EC2) and databases (RDS) hosted in Tokyo. To ensure that your application does not go down if the entire Tokyo region experiences a natural disaster (such as an earthquake), while also reducing network latency for customers in London (Europe), which architecture should you choose?

- [ ] A. Single AZ
- [ ] B. Multi-AZ
- [x] C. Multi-Region
- [ ] D. Edge-only

# Which of the following is NOT a characteristic of an AWS Region?

- [ ] A. It consists of multiple Availability Zones (AZs) located within the same geographic
area.
- [ ] B. The resources and infrastructure within a Region are fully isolated from other Regions.
- [x] C. It shares the same physical networking infrastructure with nearby Regions for risk
redundancy.
- [ ] D. The Availability Zones within a Region are connected through low-latency networks.

# When building an Electronic Emergency Medical Records system on the AWS platform, the system stores extremely sensitive personal patient information. At the same time, because it is used in an emergency clinic, doctors require that patient medical records be retrieved almost instantly in order to make life-saving decisions. The project is also allocated a limited monthly budget for ongoing operations. Based on the key factors used when selecting an AWS Region, which of the following options represents the most appropriate priority order (from most important to least important) for the system architecture?

- [ ] A. Cost Optimization →Service Availability →Latency Optimization →Compliance
- [ ] B. Latency Optimization →Compliance →Cost Optimization →Service Availability
- [x] C. Compliance →Latency Optimization →Service Availability →Cost Optimization
- [ ] D. Service Availability →Compliance →Latency Optimization →Cost Optimization

# A company deploys its application across multiple Availability Zones (AZs) behind an Application Load Balancer (ALB). What does this primarily provide?

- [ ] A. Lower storage cost
- [ ] B. Global caching
- [x] C. High availability
- [ ] D. Cross-region disaster recovery

# Which statement best describes an Availability Zone?

- [ ] A single data center globally shared
- [x] B. Multiple isolated data centers in one Region
- [ ] C. A globally distributed caching system
- [ ] D. A logical network boundary

# Which architecture pattern provides the highest level of resilience?

- [ ] A. Single AZ
- [ ] B. Multi-AZ
- [x] C. Multi-Region
- [ ] D. Edge-only

# A company has a Linux server located in its office. Employees log in to the server using SSH to run code and process data. The server is manually administered by the IT department. What is the most accurate description of this system?

- [ ] Private cloud
- [ ] Public cloud
- [x] Traditional on-premise server
- [ ] Hybrid cloud

# An application is designed to run on EC2 instances across 2 different Availability Zones (Multi-AZ). However, both instances read/write data to a single EBS volume. Does this design truly provide High Availability (HA) for the system?

- [ ] A. Yes, because the compute power is distributed across two independent AZs
- [ ] B. No because the distance between AZs will increase data read/write latency
- [ ] C. Yes, because AWS automatically replicates EBS volumes to all other AZs in a Region
- [x] D. No, because an EBS volume is a zonal resource, creating a ‘Single Point of Failure’

# Previously, an enterprise had to spend a large amount of money to purchase servers and networking equipment before deploying a system. When moving to the cloud, what type of cost does this expense become?

- [ ] Capital expenditure (CAPEX)
- [x] Operational expenditure (OPEX)
- [ ] Depreciation cost
- [ ] Hardware ownership cost

# Which tasks are AWS responsibilities according to the AWS Shared Responsibility Model?

- [x] Patching networking devices
- [ ] Defining user password policies
- [ ] Configuring security groups
- [ ] Patching an EC2 instance operating system

# Who is responsible for decommissioning underlying storage devices that reach the end of their useful life used to host data on AWS?

- [ ] Customer
- [x] AWS
- [ ] Account creator
- [ ] Auditing team

# Which of the following is a customer responsibility, according to the AWS Shared Responsibility Model?

- [x] Identity access management
- [ ] Hard drive disposal
- [ ] Data center hardware security
- [ ] Availability zone security

# A company runs a e-commerce web application on AWS. During a large sales event, the traffic increases by 10 times and the system automatically launches additional servers to handle the load. After the event ends, the extra servers are automatically terminated. Which AWS characteristic is best represented in this scenario?

- [ ] Resource pooling
- [x] Rapid elasticity
- [ ] Measured service
- [ ] Broad network access

# A company is comparing the costs of running their own data center versus moving to AWS. They realize that because AWS serves hundreds of thousands of customers, AWS can purchase hardware at much lower costs than the company ever could. This leads to lower prices for the company. Which cloud advantage is this?

- [ ] Trade capital expense for variable expense
- [ ] Stop guessing capacity
- [ ] Increase speed and agility
- [x] Benefit from massive economies of scale

# A development team wants to deploy a web application. They do not want to manage the operating system or the runtime, but they want to keep full control over the application’s environment configuration and code versions. Which service model fits best?

- [ ] SaaS
- [x] PaaS
- [ ] On-premise
- [ ] IaaS

# Which AWS Cloud feature enables users to have the ability to pay based on current needs, rather than projected needs?

- [ ] AWS Budgets
- [x] Pay-as-you-go pricing
- [ ] Volume discounts
- [ ] Saving Plans

