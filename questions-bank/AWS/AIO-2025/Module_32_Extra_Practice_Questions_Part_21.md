---
title: Module 32: Extra Practice Questions (Part 21)
tags: []
domains: ["AWS"]
---

# In a Platform as a Service (PaaS) model, which of the following layers is the customer responsible for managing?

- [ ] Operating System and Virtualization
- [x] Applications and Data
- [ ] Runtime and Middleware
- [ ] Servers and Storage

# What is the main difference between Edge Locations and AWS Regions?

- [ ] Edge Locations are used for compute resources; Regions are for storage only
- [x] Edge Locations cache content and serve it with low latency; Regions contain full AWS
services
- [ ] Edge Locations are physically larger than Regions
- [ ] There is no difference; they are the same thing

# A development team can launch new infrastructure resources within minutes using the AWS Management Console or APIs. Which cloud advantage does this represent?

- [ ] Massive economies of scale
- [x] Increased speed and agility
- [ ] Data durability
- [ ] Global infrastructure

# CloudFront is primarily used to deliver content with low latency. Which AWS component does it leverage?

- [ ] Availability Zones
- [ ] AWS Regions
- [x] Edge Locations
- [ ] VPCs

# A company wants to run native AWS services, APIs, and tools locally in their own physical data center. Which service enables this hybrid cloud architecture?

- [ ] Amazon Bedrock
- [ ] AWS Elastic Beanstalk
- [x] AWS Outposts
- [ ] Amazon RDS

# A company is designing a disaster recovery strategy and wants the ability to instantly fail over to a secondary Region with near-zero data loss. Which approach is recommended?

- [ ] Backup data manually to another Region every 24 hours
- [x] Implement Active-Active deployment across two Regions with real-time data replication
- [ ] Keep a cold standby in another Region and restore from backups when needed
- [ ] Use S3 cross-region replication only

# Which disaster recovery approach requires the least RTO (Recovery Time Objective) and RPO (Recovery Point Objective)?

- [ ] Backup and restore strategy
- [ ] Pilot light approach
- [ ] Warm standby approach
- [x] Active-Active approach (multi-region)

# Which cloud computing service model allows users to control the operating system and applications while the cloud provider manages the physical infrastructure?

- [ ] Software as a Service (SaaS)
- [ ] Platform as a Service (PaaS)
- [x] Infrastructure as a Service (IaaS)
- [ ] Network as a Service (NaaS)

# A global e-commerce company wants to serve content to users with the lowest possible latency worldwide. Which combination of AWS services should they use?

- [x] Multiple Regions + Multi-AZ within each Region + CloudFront
- [ ] Single Region + CloudFront
- [ ] Multiple Regions only
- [ ] Edge Locations only

# Which AWS service enables organizations to intelligently route DNS queries to the optimal AWS Region based on the geographic location of users, health status of endpoints, and configurable routing policies?

- [x] Amazon Route 53
- [ ] AWS Global Accelerator with anycast IP addresses
- [ ] Amazon CloudFront distribution with origin failover configured
- [ ] AWS Transit Gateway with inter-region peering connections

# How does deploying resources across AWS Regions help organizations reduce their total cost of ownership when serving a globally distributed user base?

- [x] By reducing data transfer costs and latency charges through proximity to end users in each geographic market
- [ ] By leveraging automated inter-Region replication to eliminate the need for backup storage and archival solutions across multiple locations
- [ ] By reducing data transfer expenses through proximity to end users and enabling volume discounts on bandwidth consumption across Regions
- [ ] By consolidating all workloads into a single Region with the lowest EC2 pricing tier to maximize compute savings

# What benefit does AWS’s distributed global infrastructure provide for organizations that need to maintain low-latency access for users in different continents?

- [ ] Deployment of resources in a single strategic location that maximizes network backbone utilization to reduce round-trip time for global users
- [x] Deployment of resources closer to end users in multiple geographic locations to reduce network transmission time
- [ ] Automatic replication of all data across every available Region to ensure users can access information from the nearest geographic location
- [ ] Centralized routing through a single primary Region that optimizes bandwidth allocation and reduces network congestion for international users

# Which deployment model requires fixed upfront costs and assigns the responsibility of system updates entirely to the enterprise’s internal technical team?

- [ ] Public Cloud
- [ ] Hybrid Cloud
- [ ] Serverless
- [x] On-Premises

# In which cloud model do users only use the software while the provider manages everything else?

- [ ] Infrastructure as a Service (IaaS)
- [ ] Platform as a Service (PaaS)
- [x] Software as a Service (SaaS)
- [ ] On-Premises

# What is the term for a single component, node, or process in a system that, if it experiences an outage, causes the entire system to stop functioning or crash?

- [x] Single Point of Failure (SPOF)
- [ ] Loose Coupling
- [ ] Isolated Data Center
- [ ] Monolithic Architecture

# What is a disadvantage of on-premises infrastructure?

- [ ] No control over infrastructure
- [ ] Low upfront cost
- [x] High upfront cost for hardware and maintenance
- [ ] Unlimited scalability

# Which of the following is a cloud deployment model?

- [x] Private Cloud
- [ ] Physical Cloud
- [ ] Hardware Cloud
- [ ] Network Cloud

# Which deployment strategy do highly agile tech companies like Netflix, Spotify, and Airbnb primarily utilize to achieve massive economies of scale and global reach?

- [ ] Pure On-Premises
- [ ] Hybrid Cloud
- [x] Public Cloud
- [ ] Isolated Data Centers

# Which AWS Cloud advantage is demonstrated when a company can replace upfront fixed capital expenses with variable operational expenses?

- [ ] High availability
- [ ] Elasticity
- [x] Agility
- [ ] Economies of scale

# In a global disaster recovery architecture, to achieve "Traffic Routed Globally with Seamless Failover"when an AWS Region experiences a large-scale disaster, the system design must incorporate which of the following core mechanisms?

- [ ] Utilizing Application Load Balancers (ALBs) to reroute global traffic and establishing an intra-region fiber network to replicate data synchronously between continents.
- [ ] Grouping Regions into a single interdependent network to allow traffic to automatically spill over from one Region to another, while using local High Availability (HA) mechanisms to detect failures.
- [x] Use a Global Traffic Router (e.g., Route 53) to automatically detect errors and redirect users, combined with Asynchronous Global Data Replication between isolated Regions.
- [ ] Configure a redundant Availability Zone (AZ) as a global switching point and require continuous data synchronization to ensure no latency across the global network.

# An online gaming company wants to ensure that its application can survive a failure of a single data center with minimal downtime. Additionally, they want a separate plan to recover their entire operations in a different geographic area if a catastrophic regional event occurs. What is the most cost-effective architecture to meet both goals?

- [ ] Deploy a Single-AZ architecture with frequent backups to S3
- [x] Use a Multi-AZ deployment for High Availability and a Multi-Region strategy for Disaster
Recovery
- [ ] Deploy the application solely in Edge Locations to ensure global reach
- [ ] Use Multi-Region deployment for both goals as it covers all failure scenarios

# In an Amazon RDS Multi-AZ deployment, what happens to the "Standby Instance"during normal operations and when a failure occurs on the "Primary Instance"?

- [ ] The Standby Instance receives asynchronous data and automatically serves Read traffic when the Primary is overloaded
- [x] The Standby Instance is synchronously replicated and is promoted to the Primary Instance when a failure occurs
- [ ] Users must manually reconfigure their connection strings to point to the Standby Instance during a failure
- [ ] The Standby Instance is only created after the Primary Instance has completely stopped functioning

# What is the primary benefit of deploying applications across multiple Availability Zones?

- [ ] Increased application latency for better performance
- [x] High availability and fault tolerance
- [ ] Reduced AWS pricing for the same workload
- [ ] Automatic database replication without additional configuration

# A company wants to host a legacy application in its corporate data center but use Amazon EC2 for its modern web servers. Which deployment model does this represent?

- [ ] Public Cloud
- [ ] Private Cloud
- [x] Hybrid Cloud
- [ ] Multi-cloud

# Which of the following services is designed with native fault tolerance, storing objects redundantly across multiple Availability Zones?

- [ ] Amazon Redshift
- [ ] AWS Snowball
- [ ] Amazon RDS (when Multi-AZ enabled)
- [x] Amazon S3

# A company’s database administrator is concerned that a natural disaster could impact the local data center where their application is hosted. Which AWS infrastructure design would provide the HIGHEST level of protection against a large-scale regional disaster?

- [ ] Deploying the application across multiple Availability Zones in one Region.
- [ ] Deploying the application across multiple Edge Locations.
- [x] Deploying the application across multiple AWS Regions
- [ ] Using a Hybrid Cloud model with an on-premises backup.

# A video processing application requires ultra-low latency for delivering static content to global end-users and needs centralized access management for its operations team worldwide. Which pair of services correctly meets these requirements based on their scope (Global/Regional)?

- [ ] EC2 (Global) to manage servers and CloudFront (Regional) to deliver content
- [ ] S3 (Regional) to store videos and Route 53 (Regional) to route users
- [x] CloudFront (Global) to deliver content via Edge Locations and IAM (Global) to manage
access
- [ ] VPC (Global) to set up the network and RDS (Global) to store video information

# An enterprise is currently operating an on-premises system and struggles to forecast resource demand. This leads to expensive idle resources during off-peak hours and system crashes during peak traffic. Which characteristic of Cloud Computing best addresses this issue while optimizing costs?

- [ ] High Availability
- [ ] Security
- [ ] Global Reach
- [x] Elasticity

# Under the AWS Shared Responsibility Model, if a customer’s Amazon EC2 instance is hacked because the guest operating system was not updated with the latest security patches, who is responsible?

- [ ] AWS, because they own the physical hardware.
- [x] The Customer, because they are responsible for patching the guest OS.
- [ ] Both AWS and the Customer share the responsibility for OS patching.
- [ ] The Operating System vendor (e.g., Microsoft or Linux provider).

# When using an Infrastructure as a Service (IaaS) provider, which specific layers are managed strictly by the cloud provider rather than the customer?

- [ ] Applications, Data, and Runtime
- [ ] Operating System, Middleware, and Runtime
- [x] Servers, Storage, Networking, and Virtualization
- [ ] Applications, OS, and Virtualization

# A company wants to move to AWS to reduce their Total Cost of Ownership (TCO). Which of the following is an example of moving from Capital Expenditure (CAPEX) to Operational Expenditure (OPEX)?

- [ ] Signing a 10-year lease for a new data center facility.
- [ ] Buying high-end physical servers and networking gear upfront.
- [x] Paying only for the compute power used each month.
- [ ] Hiring a large team of hardware maintenance engineers.

# Startup wants to deploy an application without the burden of managing servers, operating systems, or underlying software stacks. They want to focus entirely on writing code and deploying their application. Which cloud service model is the most suitable?

- [ ] Infrastructure as a Service (IaaS)
- [x] Platform as a Service (PaaS)
- [ ] Software as a Service (SaaS)
- [ ] On-premises

# Which of the following components is primarily used to cache data and reduce latency for end users worldwide?

- [ ] Availability Zone
- [ ] AWS Region
- [ ] Elastic Load Balancer
- [x] Edge Location

# A company wants to ensure its critical application remains accessible even if an entire AWS Region experiences a catastrophic failure. Which architectural strategy should they adopt?

- [ ] Multi-AZ deployment within a single Region.
- [ ] Deploying multiple Elastic Load Balancers in one AZ.
- [ ] Using Edge Locations to host the entire application backend.
- [x] Multi-Region active-active deployment.

# Which Disaster Recovery strategy provides the lowest Recovery Time Objective (RTO) and Recovery Point Objective (RPO)?

- [ ] Pilot Light
- [x] Multi-site Active/Active
- [ ] Warm Standby
- [ ] Backup and Restore

# What is one of the condition to prioritize to use Cloud rather than On-premise

- [ ] Stable workload
- [ ] Available operating team
- [x] Seasonal workload
- [ ] High Internal Traffic

# Why does Multi-Az matter

- [x] Trafficking automatically to healthy Az
- [ ] Preventing global downtime during a major regional failure
- [ ] Data replication around the globe allows rapid recovery
- [ ] Multi-Region state consistency

# Which of the following is not a primary drawback of Multi-AZ:

- [ ] Region outage risk
- [x] Higher cost due to duplicated resources, inter-region data transfer
- [ ] Higher complexity for certain configurations
- [ ] Designed to prevent single data center failure from impacting service availability

# Which one is not an advantage of Outpost service

- [ ] Data Confidentiality
- [ ] Low Latency
- [x] Cost
- [ ] Data policy compliance

# Which of the following best describes horizontal scaling in cloud computing?

- [ ] Increasing CPU and RAM of an existing server
- [x] Adding more servers to distribute workload
- [ ] Moving workloads to a faster network
- [ ] Using virtualization to divide a server

# Which design principle suggests that you should break a system into small, independent components so that a failure in one does not cause the entire system to crash?

- [ ] Vertical Scaling
- [ ] Tight Coupling
- [x] Loose Coupling
- [ ] Monolithic Architecture

# A developer wants to use a service that allows them to upload their code, and the service handles the deployment, capacity provisioning, and load balancing automatically. They want to maintain some control over the underlying server settings if needed. Which service should they use?

- [ ] Amazon EC2 (IaaS)
- [ ] AWS Lambda (Serverless)
- [x] AWS Elastic Beanstalk (PaaS)
- [ ] AWS CloudFormation

# A small startup does not know how many users will visit their new app. They do not want to buy too many servers and waste money, or buy too few and have a slow app. Which advantage of cloud computing helps solve this problem?

- [ ] Go global in minutes
- [ ] Increase speed and agility
- [x] Stop guessing capacity and automatically scale resources up or down
- [ ] Benefit from massive economies of scale

# The AWS Well-Architected Framework helps you build good systems in the cloud. It is based on a set of pillars. How many pillars does the AWS Well-Architected Framework have?

- [ ] 4
- [ ] 5
- [x] 6
- [ ] 7

# A company currently pays large upfront costs (CapEx) to buy physical servers. They want to move to a model where they pay monthly based on actual usage (OpEx). Which advantage of cloud computing describes this change?

- [ ] Benefit from massive economies of scale
- [ ] Increase speed and agility
- [x] Trade fixed expense for variable expense
- [ ] Stop spending money running and maintaining data centers

# What is the difference between "High Availability"and "Fault Tolerance"?

- [ ] High Availability means the system is always up; Fault Tolerance means the system can
scale.
- [x] High Availability ensures minimal downtime; Fault Tolerance ensures zero downtime or
data loss by having redundant components.
- [ ] High Availability is a customer responsibility; Fault Tolerance is an AWS responsibility.
- [ ] They are the same thing.

# A fintech startup is legally required to ensure that all customer financial data physically remains within the borders of a specific country to comply with government regulations. Which AWS infrastructure concept is primarily used to address this data residency requirement?

- [ ] Edge Locations
- [x] AWS Regions
- [ ] High Availability
- [ ] Amazon Route 53

# How are Availability Zones physically and logically connected to one another within a single AWS Region?

- [ ] Through the public internet using encrypted VPN tunnels
- [ ] Through distributed global Edge Locations
- [x] With high-bandwidth, low-latency network links
- [ ] Using isolated, asynchronous satellite connections

# A company maintains a scaled-down but fully functional version of their production environment running at all times in an alternate location for disaster preparedness. Which Disaster Recovery (DR) approach does this describe?

- [ ] Backup and Restore
- [ ] Pilot Light
- [x] Warm Standby
- [ ] Multi-Site (Active-Active)

# A development team is deploying a new application and needs to configure user permissions as well as launch virtual servers. Regarding how AWS services are scoped, which of the following is true?

- [ ] Both user permissions and virtual servers must be configured separately for every single location
- [x] User permissions are managed centrally on a global scale, while virtual servers must be launched in specific geographic boundaries
- [ ] Virtual servers are managed globally, while user permissions are strictly restricted to a single data center
- [ ] Both user permissions and virtual servers operate globally and do not require location selection

