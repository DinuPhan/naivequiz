---
title: Module 33: Extra Practice Questions (Part 22)
tags: []
domains: ["AWS"]
---

# A global media company wants to reduce latency for users accessing its website worldwide. Which AWS service is most appropriate?

- [ ] Amazon VPC
- [ ] AWS Global Accelerator
- [x] Amazon CloudFront
- [ ] Amazon EC2 Auto Scaling

# Which of the following statements is NOT true?

- [ ] Multi-AZ deployment is a common best practice for improving availability of production
workloads within a Region.
- [x] Multi-Region deployment is used only for global applications and is not relevant to disaster
recovery planning.
- [ ] RTO, RPO, business continuity, and cost tolerance are important factors in selecting a
disaster recovery strategy
- [ ] Multi-Region architectures usually provide stronger resilience than Multi-AZ architectures,
but with greater cost and complexity.

# A DevOps engineer launches an AWS virtual server, installs Ubuntu Linux, configures Python runtime, and deploys a web application. Which cloud service model does this represent?

- [ ] SaaS
- [ ] PaaS
- [x] IaaS
- [ ] On-Premises

# In IaaS, the responsibility boundary between the customer and AWS provider falls between which two layers?

- [ ] Applications and Data
- [ ] Runtime and Middleware
- [x] OS and Virtualization
- [ ] Servers and Storage

# A startup needs to launch a web server in 5 minutes, scale from 2 to 50 servers during a flash sale, then scale back down immediately after. Which AWS service and feature best supports this need?

- [ ] On-Premises servers with manual scaling
- [ ] Amazon S3 with static hosting
- [x] Amazon EC2 with Elastic scaling
- [ ] AWS Lambda with fixed capacity

# According to the IaaS responsibility model, which of the following is the customer’s responsibility, NOT AWS’s?

- [ ] Managing physical servers in the data center
- [ ] Maintaining network cables and routers
- [ ] Providing and maintaining the hypervisor
- [x] Installing and patching the operating system

# A company is comparing cloud service models. They want a solution where they only manage their application code and data, while the cloud provider handles everything else including the runtime environment and operating system.

- [ ] On-Premises
- [ ] IaaS
- [x] PaaS
- [ ] Hybrid Cloud

# Which statement is TRUE regarding the relationship between Regions and Availability Zones?

- [ ] A Region consists of at least two Availability Zones.
- [ ] Availability Zones are connected to each other via the public internet.
- [x] Each Region contains multiple, isolated, and physically separate Availability Zones.
- [ ] An Availability Zone can span across multiple Regions.

# Which of the following is FALSE?

- [x] Cached content is delivered to users with higher latency when cache hits occur.
- [ ] Leveraging edge use cases can optimize performance, increase availability, and enhance
security for globally distributed applications.
- [ ] In an edge model using a CDN, origin content is fetched only when needed, such as on a
cache miss or revalidation.
- [ ] Edge locations are AWS sites positioned close to users to reduce latency.

# "1.An ecommerce company has migrated its IT infrastructure from an on-premises data center to the AWS Cloud. Which cost is the company’s direct responsibility?

- [x] Cost of application software licenses
- [ ] Cost of power for the AWS servers
- [ ] Cost of the hardware infrastructure on AWS
- [ ] Cost of physical security for the AWS data center

# Which option is a physical location of the AWS global infrastructure?

- [ ] AWS DataSync
- [ ] Amazon Connect
- [x] AWS Region
- [ ] AWS Organizations

# An AI startup is training deep learning models with continuously changing data and needs to experiment with different types of hardware (A100, H100 GPUs) in a short period of time. Based on the characteristics of cloud computing, why should they choose the cloud instead of building their own internal GPU farm?

- [ ] Because cloud computing provides full control over both the physical and virtualization layers for engineering teams.
- [ ] To optimize CAPEX costs by making long-term investments in hardware.
- [ ] To ensure that data is always stored on-premise in order to comply with the strictest
security regulations.
- [x] To leverage Agility and Stop Guessing Capacity so they can instantly change hardware configurations according to their experimentation needs.

# A large financial corporation has strict regulations requiring that sensitive data must not leave national borders, but it still wants to use advanced AI services from AWS to analyze data on-site. Which architecture solution is the most optimal?

- [ ] Build a private cloud that is completely isolated from the Internet.
- [ ] Migrate the entire system to the public cloud and encrypt the data.
- [x] Use AWS Outposts to run AWS services directly within their internal data center.
- [ ] Use a SaaS model for all financial applications.

# Which statement is NOT typically considered a cloud computing advantage?

- [ ] Rapid elasticity allows capacity to expand and shrink with workload demand.
- [ ] Measured service supports usage visibility and pay-for-use billing
- [x] Cloud computing is stronger for full control, customization and stable workloads - these
are all situations where on-premise is stronger
- [ ] Broad network access allows services to be consumed from multiple locations and device
types.

# Which section that we develop our-self in IaaS structure ?

- [ ] Applications, Data, Runtime, Middleware, OS, Servers
- [ ] Applications, Data
- [x] Applications, Data, Runtime, Middleware, OS
- [ ] Applications, Data, Runtime, Middleware, OS, Servers, Storage, Networking

# A Solutions Architect is designing a web application that will run on a fleet of Amazon EC2 instances. To ensure the application remains available even if some instances fail, the Architect needs a service that can automatically detect unhealthy instances and redirect traffic to the healthy ones. Which AWS service should the Architect use to meet this requirement?

- [ ] AWS Step Functions
- [ ] Amazon Route 53
- [x] Elastic Load Balancing (ELB)
- [ ] Amazon CloudFront

# The marketing department of a technology company lacks expertise in coding or application maintenance. However, the company wants them to leverage cloud computing to align with the organization’s existing technology stack. Which cloud computing model is most suitable for them?

- [ ] Infrastructure as a Service (IaaS).
- [ ] Networking as a Service (NaaS).
- [ ] Platform as a Service (PaaS).
- [x] Software as a Service (SaaS).

# Which of the following are benefits of using a Load Balancer in a Cloud workload? (Choose all that apply)

- [ ] Improved Performance and Reduced Latency
- [ ] Enhanced Security (SSL Offloading, IP Masking) and Seamless Scalability
- [ ] High Availability through Health Checks
- [x] All

# An insurance company want to scale globally while ensuring strict data compliance for customer information. They also require low latency and rapid deployment for their web applications Which infrastructure model is the best fit for this company?

- [ ] On-premises
- [x] Hybrid Cloud
- [ ] Public Cloud
- [ ] All of them

# The ’Stop guessing capacity’ benefit of the Cloud helps businesses avoid the ’Under-provisioning’ scenario. What is the main consequence of ’Under-provisioning’?

- [ ] Increased time-to-market for application deployments.
- [ ] Increased time-to-market for application deployments.
- [x] The system becomes overloaded, leading to degraded performance or service downtime
when traffic spikes.
- [ ] Having to hire more data center operations staff.

