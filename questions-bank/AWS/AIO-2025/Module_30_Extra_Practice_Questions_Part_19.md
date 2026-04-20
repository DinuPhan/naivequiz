---
title: Module 30: Extra Practice Questions (Part 19)
tags: []
domains: ["AWS"]
---

# The director of a business decides to use Amazon WorkMail for internal email. They don’t have their own software engineering team. With this service, AWS manages everything from infrastructure and operating systems to software and data (All). What cloud service model is this business using?

- [x] SaaS
- [ ] IaaS
- [ ] PaaS
- [ ] On-Premises

# Which component of the AWS global infrastructure is made up of one or more discrete data centers that have redundant power, networking, and connectivity?

- [ ] AWS Region
- [x] Availability Zone
- [ ] Edge location
- [ ] AWS Outposts

# What is AWS EC2

- [ ] AWS EC2 is a serverless compute service
- [x] AWS EC2 is a virtual server in the AWS Cloud
- [ ] AWS EC2 is a data center
- [ ] AWS EC2 is a resource monitoring service

# Which cloud service model provides the highest level of control over the operating system and installed applications?

- [ ] SaaS (Software as a Service)
- [ ] PaaS (Platform as a Service)
- [x] IaaS (Infrastructure as a Service)
- [ ] FaaS (Function as a Service)

# A software company is building a customer analytics platform. Its engineers want full control over the operating system, installed packages, runtime versions, background services, and patching schedule because they use several custom dependencies and need to tune the environment for performance. However, they do not want to manage physical servers, storage hardware, or network infrastructure. Which service model is the MOST appropriate?

- [ ] Platform as a Service (PaaS), because the company mainly wants to deploy application code without managing the underlying environment
- [x] Infrastructure as a Service (IaaS), because the company wants control over the OS and software stack while the provider manages the hardware and networking
- [ ] Software as a Service (SaaS), because the provider should manage the full application stack and infrastructure
- [ ] On-premises deployment, because control over runtime and packages requires the company to manage all infrastructure itself

# Which of these statements about Availability Zones is not true? (Select the best answer)

- [x] Availability Zones are designed for fault isolation
- [ ] Availability Zones are made up of one or more data centers
- [ ] Availability zones are connected to each other using high-speed private links
- [ ] A data center can be used for more than one availability zone

# A user is comparing purchase options for an application that runs on Amazon EC2 and Amazon RDS. The application cannot sustain any interruption. The application experiences a predictable amount of usage, including some seasonal spikes that last only a few weeks at a time. It is not possible to modify the application. Which purchase option meets these requirements MOST cost-effectively?

- [ ] Review the AWS Marketplace and buy Partial Upfront Reserved Instances to cover the predicted and seasonal load.
- [ ] Buy Reserved Instances for the predicted amount of usage throughout the year. Allow any seasonal usage to run on Spot Instances.
- [x] Buy Reserved Instances for the predicted amount of usage throughout the year. Allow any seasonal usage to run at an On-Demand rate.
- [ ] Buy Reserved Instances to cover all potential usage that results from the seasonal usage.

# Which statement best describes the difference between CAPEX and OPEX in cloud computing?

- [ ] CAPEX refers to paying only for resources used, while OPEX requires upfront investment.
- [x] CAPEX requires large upfront investment in infrastructure, while OPEX allows paying
for resources as they are consumed.
- [ ] CAPEX and OPEX are identical cost models used in cloud computing.
- [ ] OPEX requires purchasing physical servers before deployment.

# Which tasks are the customer’s responsibility, according to the AWS shared responsibility model?

- [ ] Establish the global infrastructure.
- [x] Perform client-side data encryption.
- [ ] Secure data centers.
- [ ] Patch the operating system in a PaaS environment.

# Which of the following AWS services is categorized as a "Global Service,"meaning its operations are not restricted to a specific geographical Region?

- [ ] Amazon EC2 (Elastic Compute Cloud)
- [ ] Amazon RDS (Relational Database Service)
- [x] AWS IAM (Identity and Access Management)
- [ ] Amazon VPC (Virtual Private Cloud)

# What are Edge Locations?

- [ ] Physical hard drives
- [ ] AWS Regions
- [ ] Data centers that store petabytes of data
- [x] Data centers that deliver data fast to the users

# A startup deploys its web application on a single Amazon EC2 instance in one Availability Zone. After gaining more users, the application sometimes becomes unavailable when the instance fails. The team wants to improve availability without significantly increasing operational complexity. Which solution is the most appropriate?

- [x] Deploy multiple EC2 instances across different Availability Zones behind an Application Load Balancer.
- [ ] Increase the size of the current EC2 instance to a larger instance type
- [ ] Move the application to a different AWS Region
- [ ] Store application files in Amazon S3 only

# A company is comparing the costs of their on-premises data center and the AWS Cloud. During a Total Cost of Ownership (TCO) analysis, which expense would be considered a "Fixed Cost"(CAPEX) in the on-premises environment?

- [ ] Monthly electricity bills for server cooling.
- [ ] Pay-as-you-go charges for Amazon EC2 instances.
- [x] Upfront purchase of physical server chassis and networking cables.
- [ ] Salaries for a cloud-managed service provider’s support team.

# What is the main purpose of an Availability Zone (AZ) in the AWS global infrastructure?

- [ ] To provide a global endpoint for all AWS services
- [x] To isolate infrastructure failures within a region and improve high availability
- [ ] To connect AWS to on-premises data centers
- [ ] To provide edge caching for content delivery

# What is true about Regions?

- [ ] They are the physical locations of your customers
- [ ] All regions are located in one specific geographic area
- [x] A region is a physical location that has multiple availability zones
- [ ] A physical location is composed of multiple regions and availability zones

# According to the classification of responsibility, if a company uses a Software as a Service (SaaS) application like Amazon WorkDocs, who is responsible for managing the data and the application’s runtime environment?

- [ ] The customer is responsible for both data and runtime.
- [ ] AWS is responsible for both data and runtime.
- [x] The customer manages the data, while AWS manages the runtime and infrastructure.
- [ ] An external third-party auditor manages both.

# Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?

- [x] Elimination of expenses for running and maintaining data centers
- [ ] Price discounts that are identical to discounts from hardware providers
- [ ] Distribution of all operational controls to AWS
- [ ] Elimination of operational expenses

# A large company is interested in avoiding long-term contracts and moving from fixed costs to variable costs. What is the value proposition of AWS for this company?

- [ ] Economies of scale
- [x] Pay-as-you-go pricing
- [ ] Volume pricing discounts
- [ ] Automated cost optimization

# A startup deploys its application to multiple AWS Regions so users from different continents can access the service with low latency. Which AWS Cloud advantage does this demonstrate?

- [x] Global reach
- [ ] Elasticity
- [ ] Reliability
- [ ] Resource pooling

# Which of the following identifiers is an example of an AWS Region?

- [ ] Edge-Location-Tokyo
- [ ] aws-global-1
- [ ] us-east-1a
- [x] us-east-1

# A software engineer needs to set up a new testing environment over the weekend. They log into the AWS Management Console and provision three virtual servers within minutes, completely bypassing the need to contact an IT administrator or wait for human approval. Which characteristic of cloud computing does this represent?

- [ ] Rapid Elasticity
- [x] On-Demand Self-Service
- [ ] Measured Service
- [ ] Resource Pooling

# Which component does Amazon CloudFront use to cache content closer to end-users to reduce latency?

- [ ] AWS Outposts
- [ ] Availability Zones
- [x] Edge Locations
- [ ] Regional Edge Caches

# How are Availability Zones (AZs) within the same Region connected?

- [ ] High-bandwidth satellite network
- [x] Private internal network with low latency (< 2 ms)
- [ ] Only when backup is required
- [ ] Through the public Internet

# When choosing an AWS Region, what is the most important factor for Data Sovereignty?

- [ ] Latency to end-users
- [ ] Service availability
- [x] Compliance and Data Residency
- [ ] Cost of services

# Which service is used to efficiently route users to AWS resources globally?

- [x] Amazon Route 53
- [ ] Amazon VPC
- [ ] Amazon EC2
- [ ] AWS Lambda

# A company is looking for the most cost-effective disaster recovery strategy. They are willing to accept a recovery time of several hours and a potential loss of data from their last daily backup. Which strategy should they choose?

- [ ] Active-Active
- [ ] Warm Standby
- [ ] Pilot Light
- [x] Backup Restore

# Which component allows you to place compute and storage resources closer to users in large urban areas that do not have a full AWS Region?

- [x] AWS Local Zones
- [ ] AWS Regions
- [ ] Availability Zones
- [ ] AWS Direct Connect

# A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?

- [ ] Applying the Amazon Connect latency-based routing policy.
- [ ] Registering a new US domain name to serve the users in the US.
- [ ] Building a new data center in the US and implementing a hybrid model.
- [x] Deploying new Amazon EC2 instances in a Region located in the US.

# An organization needs to implement a Disaster Recovery strategy where they maintain a scaled-down but fully functional version of their application environment in a different AWS Region. Which DR strategy are they using?

- [ ] Backup and Restore
- [ ] Pilot Light
- [x] Warm Standby
- [ ] Multi-Site Active-Active

# A healthcare portal must deliver medical images quickly to patients around the world. Which AWS infrastructure component helps deliver content closer to users to reduce latency?

- [ ] Availability Zone
- [ ] Region
- [x] Edge Location
- [ ] VPC

# Which of the following businesses is better suited for using On-premise infrastructure rather than Cloud computing?

- [ ] A. A video streaming business with rapid, seasonal growth in viewership.
- [ ] B. A startup that lacks the capital to invest in its own data center.
- [x] C. A commercial bank with a large, stable customer base that must strictly comply with
data security regulations.
- [ ] D. An e-commerce company that frequently runs high-traffic flash sales

# Which component of the AWS global infrastructure is made up of one or more discrete data centers that have redundant power, networking, and connectivity?

- [ ] AWS Region
- [x] Availability Zone
- [ ] Edge location
- [ ] AWS Outposts

# The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept?

- [ ] Economy of scale
- [ ] High Availability
- [ ] Disaster recovery
- [x] Elasticity

# What does the "On-Demand Self-Service"characteristic of Cloud Computing mean?

- [ ] Customers must call a support agent to request server provisioning.
- [x] Resources are self-provisioned according to demand, without requiring a human intermediary.
- [ ] Providers automatically delete user data when it is not in use.
- [ ] Users must assemble physical servers at their data center.

# A company operates in a geographic area with high political instability. Which AWS deployment strategy should they choose to ensure maximum business continuity and resilience

- [ ] A. Deploy the application across all Availability Zones within one Region
- [ ] B. Deploy the application on a single On-premise server with a backup on AWS S3.
- [x] C. Deploy the application across multiple AWS Regions
- [ ] D. Use a single Edge Location to host the entire application infrastructure

# A hospital wants to run EC2 instances and RDS databases close to their AUS patients. Which statement is correct?

- [ ] EC2 is a Global Service and can run anywhere without specifying a Region
- [x] RDS is a Regional Service and must be deployed in a specific Region
- [ ] CloudFront requires deployment in a Region
- [ ] IAM must be deployed in every Region

# How do customers directly benefit from Amazon’s "Massive Economies of Scale"?

- [ ] They receive free hardware upgrades every three years.
- [ ] They can use any third-party software license for free.
- [ ] They gain the ability to scale up and down as needed.
- [x] They receive periodic price reductions as a result of Amazon’s operational efficiencies.

# When should a business prioritize choosing Platform as a Service (PaaS)?

- [ ] A. When the business needs to rent raw virtual servers to install operating systems and
configure networks from scratch.
- [ ] B. When the business wants to provide complete software to end-users without any source
code customization.
- [x] C. When the business wants to focus entirely on developing, running, and managing
applications without worrying about maintaining the underlying infrastructure (OS, storage, networking).
- [ ] D. When the business requires total control over physical hardware and data center cooling systems

# One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?

- [ ] By automatically scaling your on-premises resources based on changes in demand.
- [ ] By automatically scaling your AWS resources using an Elastic Load Balancer.
- [ ] By reducing interdependencies between application components wherever possible.
- [x] By automatically provisioning the required AWS resources based on changes in demand

# In a High Availability architecture within an AWS Region, which of the following is the core physical characteristic that allows Availability Zones (AZs) to effectively perform Synchronous Data Replication?

- [ ] Each AZ is located in a different country to ensure the highest level of geographic independence.
- [x] AZs are interconnected via a dedicated, high-bandwidth intra-region fiber network with ultra-low latency (under 1ms).
- [ ] Each AZ shares the same power supply and cooling system to optimize operational costs.
- [ ] Amazon Route 53 asynchronously coordinates traffic between AZs over the public Internet.

# How is a Single Point of Failure (SPOF) defined in system design?

- [ ] It is the only network connection point that makes the system run faster.
- [x] It is a single component, node, or process in a system that if it fails, the entire system
stops working or crashes.
- [ ] It is a feature that helps balance the load between servers.
- [ ] It is a backup server that automatically turns on when an error occurs.

# You ONLY want to manage Applications and Data. Which type of Cloud Computing model should you use?

- [ ] On-Premises
- [ ] Infrastructure as a Service (IaaS)
- [ ] Software as a Service (SaaS)
- [x] Platform as a Service (PaaS)

# Which cloud service model does Amazon EC2 belong to?

- [ ] SaaS (Software as a Service).
- [ ] PaaS (Platform as a Service).
- [x] IaaS (Infrastructure as a Service).
- [ ] FaaS (Function as a Service).

# What does On-Premises infrastructure mean?

- [ ] Hosting IT systems on a public cloud provider
- [x] Hosting IT systems within an organization’s own physical location
- [ ] Renting software through the internet
- [ ] Using third-party infrastructure managed by providers

# Which component of the AWS Global Infrastructure consists of one or more discrete data centers, each with redundant power, networking, and connectivity, housed in separate facilities?

- [ ] AWS Regions.
- [ ] Edge Locations.
- [x] Availability Zones.
- [ ] Private Networking.

# Which Global Infrastructure identity is composed of one or more discrete data centers with redundant power, networking, and connectivity, and are used to deploy infrastructure?

- [ ] Edge Locations
- [x] Availibility Zones
- [ ] Regions
- [ ] Local Zones

# Which of the following is NOT one of the five key characteristics of cloud computing?

- [ ] On-Demand Self-Service
- [ ] Rapid Elasticity
- [ ] Resource Pooling
- [x] Dedicated Physical Ownership

# When comparing On-Premises and Cloud, which statement is TRUE regarding control and flexibility?

- [ ] On-Premises is more flexible than Cloud but offers less control.
- [ ] Cloud provides full hardware control to the user but has very low flexibility.
- [x] On-Premises provides full user control but is less flexible, whereas Cloud has limited user
control but is highly flexible.
- [ ] Both models offer the exact same level of control and flexibility.

# A company is considering migrating its on-premises data centre to Amazon Web Services to reduce costs and improve scalability. Which of the following is a primary benefit of adopting the AWS Cloud, as outlined in the AWS Well-Architected Framework?

- [ ] Increased hardware maintenance responsibilities
- [ ] Fixed pricing for all compute resources
- [x] High availability and elasticity
- [ ] Mandatory coding for all deployments

# In the Software as a Service (SaaS) model, what is the user responsible for?

- [ ] Managing infrastructure and operating systems
- [ ] Managing runtime environment and applications
- [x] Only using the software provided
- [ ] Managing hardware and networking

