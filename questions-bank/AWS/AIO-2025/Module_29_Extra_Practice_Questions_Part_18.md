---
title: Module 29: Extra Practice Questions (Part 18)
tags: []
domains: ["AWS"]
---

# Which AWS service acts as the global DNS service that directs users to different AWS resources?

- [ ] Amazon Cloudfront
- [x] Amazon Route 53
- [ ] Elastic Load Balacing
- [ ] AWS Global Accelerator

# Which AWS infrastructure component is primarily designed to cache content close to users to reduce latency?

- [ ] Availability Zone
- [ ] Region
- [x] Edge Location
- [ ] Data Center

# A company wants to design a highly available architecture within a single AWS region. They deploy application servers across three Availability Zones. However, all instances access a single shared file system hosted on an EC2 instance in one AZ. Which risk still exists in this architecture?

- [ ] Load balancing cannot work across AZs
- [x] A failure in the AZ hosting the file system can cause application failure
- [ ] Route 53 will redirect traffic to another region automatically
- [ ] Edge locations will cache the file system data

# An engineering team claims that deploying infrastructure across multiple Availability Zones guarantees disaster recovery. Which statement best challenges this assumption?

- [ ] AZs share the same physical power grid
- [ ] Route 53 does not support multi-AZ routing
- [ ] Edge locations must be used for redundancy
- [x] Region-level failures are still possible

# A company wants to reduce latency for global users while also ensuring regional disaster recovery. Which architecture best satisfies both goals?

- [ ] Deploy the application in one region with many AZs
- [x] Deploy in multiple regions and use latency-based routing with health checks
- [ ] Use a single region and multiple edge locations
- [ ] Use weighted routing across Availability Zones

# A financial corporation requires its core system to have a disaster recovery (DR) capability with a near-zero Recovery Time Objective (RTO/Zero Downtime). The system must remain uninterrupted even if an extreme weather event takes down all data centers in a vast geographic area (Full Region Outage). They are willing to accept the highest level of cost and complexity. Which architectural design is the most accurate solution?

- [ ] Deploy a Multi-AZ architecture within a single Region using Synchronous Replication.
- [ ] Use a Pilot Light strategy across multiple Regions to scale up when needed.
- [ ] Deploy Edge Locations with Amazon CloudFront and Route 53 to accelerate global
content delivery.
- [x] Implement a Multi-Region architecture using an Active-Active model.

# Which of the following global network services is primarily used by AWS at Edge Locations to cache static content closer to end-users, thereby reducing latency and offloading requests from the origin servers?

- [ ] Amazon RDS
- [ ] Amazon EC2
- [x] Amazon CloudFront
- [ ] Amazon EBS

# A retail business frequently hosts seasonal Flash Sale events causing sudden traffic spikes, but their systems remain completely idle for most of the remaining days of the year. From a financial perspective, which characteristic of Cloud Computing offers the greatest benefit for this business to migrate from an On-Premises infrastructure to AWS?

- [ ] The ability to completely eliminate all Operational Expenses (OPEX).
- [ ] The ability to leverage AWS Outposts to install physical servers directly in their offices.
- [ ] The ability to increase infrastructure complexity to enhance customer data security.
- [x] The ability to trade fixed Capital Expenses (CAPEX) for Variable Expenses, combined
with Elasticity.

# What is the CORE difference between Elasticity and Scalability in Cloud Computing?

- [ ] Elasticity handles long-term, sustainable growth; Scalability handles short-term, instantaneous
fluctuations
- [x] Elasticity handles short-term, instantaneous fluctuations; Scalability handles long-term,
sustainable growth.
- [ ] Elasticity only applies to Auto Scaling Groups; Scalability applies to all services.
- [ ] There is no difference; the two concepts are the same.

# Scope: Currently, the customer base is primarily concentrated within a single country. Which architecture would you propose as the MOST optimal solution?

- [ ] Deploy a Multi-Region (Global Resilience) architecture to ensure the system remains operational even during a regional disaster.
- [x] Deploy a Single-Region, Multi-AZ architecture using an Active/Active configuration and Synchronous Replication.
- [ ] Use a Hybrid Cloud model by placing payment servers at the corporate headquarters to reduce cloud operational costs.
- [ ] Deploy the application across multiple Edge Locations to ensure fast access for customers from any geographic location.

# Company X faces two simultaneous scenarios: Scenario A: The number of users increases by 40Scenario B: Every Friday, traffic triples in two hours; the system automatically adds servers at 8 PM and removes them at 10 PM. Match the correct concepts:

- [ ] A = Elasticity; B = Scalability
- [x] A = Scalability; B = Elasticity
- [ ] Both A and B are Elasticity
- [ ] Both A and B are Scalability

# A company deploys its Amazon EC2 instances across 2 AZs within a Region. A load balancer automatically routes traffic to healthy instances. The database is replicated across the same two AZs. Which statement is the most correct one?

- [ ] The architecture is Fault Tolerance because it can still operate when one AZ fails.
- [ ] The architecture is not Highly Available, because it runs only in a single Region.
- [ ] The architecture provides Global Resilience, because multiple Availability Zones are used.
- [x] The architecture provides High Availability, but not Fault Tolerance, because the system
may experience brief downtime during failover.

# A company needs to ensure its application can survive a catastrophic event that takes down an entire AWS Region. Which design strategy provides the highest level of resilience and the lowest Recovery Time Objective?

- [ ] Deploying the application across multiple Availability Zones with an Application Load Balancer.
- [x] Implementing a Multi-Region Active-Active strategy with Route 53 for global traffic routing.
- [ ] Setting up a Pilot Light environment in a different Availability Zone within the same Region.
- [ ] Using CloudFront to cache content at Edge Locations to prevent regional service interruption

# A company based in Vietnam wants to deploy a web application serving primarily Southeast Asian users. They need to ensure the application remains operational if a data center fails but have a limited budget and do not require regional disaster recovery. Which architecture should they choose: Multi-AZ or Multi-Region?

- [ ] Multi-Region, because deployment across multiple regions is necessary to better serve Southeast Asian users and ensure the fastest access speeds.
- [ ] Multi-AZ, because Multi-AZ is completely free while Multi-Region requires additional fees, so Multi-AZ is the most cost-effective choice.
- [ ] Multi-Region, because Multi-AZ is not secure enough; only Multi-Region can guarantee application uptime in case of failure.
- [x] Multi-AZ, because this architecture protects against single-center data center failures, has low latency (<2ms between AZs), moderate cost, and low complexity, suitable for limited requirements and budgets.

# Which layer of the computing stack is the responsibility of the customer in Software as a Service (SaaS)

- [ ] Applications
- [ ] Data
- [ ] Operating System
- [x] nan

# "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)? C. Amazon EC2 can launch as many or as few virtual servers as needed. D. Amazon EC2 offers scalable computing."

- [x] Amazon EC2 is considered a Serverless Web Service
- [ ] C. Amazon EC2 can launch as many or as few virtual servers as needed. D. Amazon EC2 offers scalable computing."
A. Amazon EC2 is considered a Serverless Web Service B.
- [ ] Amazon EC2 can launch as many or as few virtual servers as needed.
- [ ] Amazon EC2 offers scalable computing."
A. Amazon EC2 is considered a Serverless Web Service B. Amazon EC2 eliminates the need to invest in hardware upfront C. Amazon EC2 can launch as many or as few virtual servers as needed D. Amazon EC2 offers scalable computing

# Which classification is correct for Amazon Elastic Compute Cloud (Amazon EC2)?

- [ ] On Premise
- [ ] SaaS
- [ ] PaaS
- [x] IaaS

# An e-commerce company increases the number of servers in its architecture to handle a steady increase in customer traffic over the years. Which concept does this represent?

- [ ] Elasticity
- [ ] Agility
- [ ] Fault tolerance
- [x] Scalability

# Which design principles are enabled by the AWS Cloud to improve the operation of workloads?

- [ ] Minimize platform design
- [ ] Minimum viable product
- [ ] Customized hardware
- [x] Remove single points of failure

# New department (in Da Nang) can access to a company’s system set up in Ha Noi right after connecting the internet. Which answer described the feature advantage of cloud through this situation ?

- [ ] Global reach
- [ ] Agility
- [ ] Elastiscity
- [x] Both A and B

# A development team can now provision hundreds of virtual servers in minutes, compared to the weeks it took to procure and deploy physical hardware. Which AWS Cloud advantage does this describe?

- [ ] Benefit from massive economies of scale
- [x] Increase speed and agility
- [ ] Stop guessing capacity
- [ ] Go global in minutes

# A company uses AWS Cloud to help develop their workload from Viet Nam to another team in Uruguay. One of an advantage cloud computing have in this example is

- [ ] Increase speed and agility
- [ ] Benefit from massive economies of scale
- [x] Go global in minute
- [ ] Trade fixed expense for variable expense

# Small start up have just established which wants to use the newest AI technologies for business, so they decided to choose clound model for their system. Which answers below here are not the advatages of cloud model?

- [ ] Don’t have to spend money on maintaining and running server
- [ ] Business concentration
- [x] Fully control and customise your Software environment
- [ ] Change from CAPEX (Capital Expenditure) to OPEX ( Operation expenditure)

# In the On-Premises model, who is responsible for managing all layers from Networking to Applications?

- [ ] The cloud service provider
- [ ] A third-party outsourcing vendor
- [x] The organization that owns the system
- [ ] AWS manages everything

# Amazon EC2 is an example of which cloud service model?

- [ ] Software as a Service (SaaS)
- [ ] Platform as a Service (PaaS)
- [x] Infrastructure as a Service (IaaS)
- [ ] Hybrid Cloud

# A company is using Amazon EC2 to run their web applications. According to the Shared Responsibility Model, which of the following tasks is the customer’s responsibility?

- [ ] Maintaining the physical network infrastructure of the data center.
- [ ] Replacing failed physical hard drives in the servers.
- [ ] Managing the virtualization software (hypervisor).
- [x] Updating patches for the Guest Operating System (Guest OS) installed on the EC2
instances.

# Which of the following is NOT one of the Five Characteristics of AWS?

- [ ] On-Demand Self-Service
- [ ] Rapid Elasticity
- [ ] Measured Service
- [x] Automatic Code Deployment

# When a large financial organization requires full control over its infrastructure for strict security reasons but still wants to use virtualization technology, which deployment model should they choose?

- [ ] SaaS (Software as a Service)
- [ ] Hybrid Cloud
- [ ] Public Cloud
- [x] Private Cloud

# You ONLY want to manage Applications and Data. Which type of Cloud Computing model should you use?

- [ ] On-premises
- [x] PaaS
- [ ] IaaS
- [ ] SaaS

# A company is planning to run a global marketing application in the AWS Cloud. The application will feature videos that can be viewed by users. The company must ensure that all users can view these videos with low latency. Which AWS service should the company use to meet this requirement?

- [ ] AWS Auto Scaling
- [ ] Amazon Kinesis Video Streams
- [ ] Elastic Load Balancing
- [x] Amazon CloudFront

# Which of the following is NOT one of the Five Characteristics of Cloud Computing?

- [ ] Rapid elasticity and scalability
- [ ] Multi-tenancy and resource pooling
- [x] Dedicated Support Agent to help you deploy applications
- [ ] On-demand service

# What is the key difference between IaaS and PaaS in terms of user responsibility?

- [x] IaaS requires the user to manage from OS to Applications; PaaS only requires managing
Applications and Data.
- [ ] IaaS and PaaS have exactly the same scope of responsibility.
- [ ] PaaS requires the user to manage more layers than IaaS.
- [ ] IaaS only requires the user to manage Applications, while PaaS requires managing Networking
as well.

# Which pillar of the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand?

- [ ] Security
- [x] Reliability
- [ ] Performance efficiency
- [ ] Cost optimization

# What is a Single Point of Failure (SPOF), and what is the recommended solution?

- [ ] A system with too many redundant servers; the solution is to reduce the number of servers.
- [x] A single component whose failure causes the entire system to stop functioning; the solution
is Loose Coupling with multiple servers.
- [ ] A software bug that occurs only once; the solution is to update the software.
- [ ] A situation where operational costs exceed the budget; the solution is to migrate to the
cloud.

# Which of the following is NOT an advantage of Cloud Computing?

- [ ] Trade capital expense (CAPEX) for operational expense (OPEX)
- [x] Train your employee less
- [ ] Go global in minutes
- [ ] Stop spending money running and maintaining data centers

# A company is planning to replace its physical on-premises compute servers with AWS serverless compute services. The company wants to be able to take advantage of advanced technologies quickly after the migration. Which pillar of the AWS Well-Architected Framework does this plan represent?

- [ ] Security
- [x] Performance efficiency
- [ ] Operational excellence
- [ ] Reliability

# Which of the following statements correctly compares Cloud and On-Premises?

- [ ] On-Premises has variable costs based on usage, while Cloud has fixed upfront costs.
- [ ] On-Premises is easier to scale than Cloud.
- [x] Cloud offers faster implementation time and variable costs based on usage.
- [ ] On-Premises is preferred by small and mid-sized businesses.

# Which of the following services has a global scope?

- [ ] EC2
- [x] IAM
- [ ] Lambda
- [ ] Rekognition

# While AWS has the capabilities to meet many different hosting needs and models, which cloud deployment model best describes AWS as a whole?

- [ ] Private
- [x] Public
- [ ] Hybrid
- [ ] Community

# Which deployment model is characterized by the deployment of resources on-premises, using virtualization and resource management tools?

- [ ] Public Cloud
- [x] Private Cloud
- [ ] Hybrid Cloud
- [ ] Infrastructure as a Service (IaaS)

# Your company wants to save money by no longer running applications themselves or paying software developers for custom application code. Which cloud service category would you be looking at offerings for?

- [ ] DaaS
- [ ] IaaS
- [x] SaaS
- [ ] PaaS

# A pharmaceutical research company operates a private data center that is approaching capacity. One of its main workloads is a genomics analysis platform used by internal research teams. The platform processes large datasets and interacts with several systems on the company’s campus network. In recent years, the company has also begun participating in multi-institution studies that require temporary increases in compute capacity and secure data access for approved external collaborators. The company wants to support growth without unnecessarily redesigning all existing systems at once. Which option is MOST appropriate?

- [ ] Migrate the entire genomics platform and all related services to a public cloud provider.
- [x] Use a hybrid architecture that keeps tightly coupled local components in the private
environment while extending compute and selected access services to the cloud
- [ ] Expand the private data center by purchasing additional servers, storage, and networking
equipment for all future growth.
- [ ] Rebuild the platform entirely around managed cloud-native services to eliminate dependence
on the current environment.

# Which statement is true in relation to data stored within an AWS Region?

- [ ] Data is always replicated to another region
- [x] Data is not replicated outside of a region unless you configure it
- [ ] Data is always automatically replicated to at least one other availability zone
- [ ] Data is automatically archived after 90 days

# AWS Elastic Beanstalk belongs to which cloud service model, and which AWS services does it automatically provision?

- [ ] IaaS — it only provides Amazon S3
- [ ] SaaS — it provides Amazon WorkDocs and WorkMail.
- [x] PaaS — it takes Application Code as input and automatically provisions EC2 Instances,
Auto Scaling Group, Elastic Load Balancer, Amazon RDS, and Amazon S3.
- [ ] Hybrid — it connects on-premises infrastructure to the cloud through AWS Outposts.

# What benefits of AWS Cloud allow an e-commerce website to automatically add servers to handle the surge in traffic on Black Friday, and then automatically reclaim resources when the sale ends?

- [ ] Massive economies of scale
- [x] Rapid Elasticity
- [ ] Global Reach
- [ ] High Availability

# A startup has a small team, no existing data center, seasonal traffic fluctuations, and needs rapid time-to-market. Which deployment model is most suitable?

- [ ] On-Premises — because startups need full control over infrastructure for data security.
- [x] Cloud — because the startup meets key conditions for cloud adoption: small team,
unpredictable workload, need for rapid deployment, no existing data center, and no strong ops team.
- [ ] Hybrid — because startups should combine both on-premises and cloud to optimize costs.
- [ ] On-Premises — because long-term cloud costs will always be higher than building a data
center.

# A company often faces the risk of resource waste due to over-provisioning or system crashes due to resource shortages during peak hours (under-provision) when operating an on-premises data center. What core benefits of AWS Cloud will directly help them overcome this limitation?

- [ ] Benefit from massive economies of scale
- [ ] Increase speed and agility
- [x] Stop guessing capacity
- [ ] Go global in minutes

# A large company has multiple departments. Each department has its own AWS account. Each department has purchased Amazon EC2 Reserved Instances. Some departments do not use all the Reserved Instances that they purchased, and other departments need more Reserved Instances than they purchased. The company needs to manage the AWS accounts for all the departments so that the departments can share the Reserved Instances. Which AWS service or tool should the company use to meet these requirements?

- [ ] AWS Systems Manager
- [ ] Cost Explorer
- [ ] AWS Trusted Advisor
- [x] AWS Organizations

# A large enterprise operates an internal ERP system serving 3,000 users with stable workloads, and also needs a course registration portal with seasonal traffic spikes during enrollment periods. Which deployment strategy is most appropriate?

- [ ] Migrate both systems to the cloud to simplify management.
- [ ] Keep both systems on-premises since the enterprise already has an existing infrastructure
team.
- [x] Keep the ERP system on-premises and deploy the registration portal on the cloud.
- [ ] Migrate the ERP system to the cloud and keep the registration portal on-premises.

# A user is moving a workload from a local data center to an architecture that is distributed between the local data center and the AWS Cloud. Which type of migration is this?

- [ ] On-premises to cloud native
- [ ] Hybrid to cloud native
- [x] On-premises to hybrid
- [ ] Cloud native to hybrid

