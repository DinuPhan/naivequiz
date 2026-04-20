---
title: Module 5: Networking and Content Delivery
tags: []
domains: ["AWS"]
---

# How does AWS describe an isolated networking environment into which you can launch compute resources while closely controlling network access?

- [ ] Internet gateway
- [ ] Security group
- [ ] Availability Zone
- [x] Virtual private cloud (VPC)

# You want to provide private name resolution for two VPCs using the domain name company.pri. How many private hosted zones do you need to create?

- [ ] 3
- [ ] 4
- [ ] 2
- [x] 1

# Which of the following are valid origins for a CloudFront distribution? (Select TWO.)

- [ ] A private S3 bucket that you don’t have access to
- [x] EC2 instance
- [x] A public S3 bucket
- [ ] A private S3 bucket that you own

# Which of the following are true of a default VPC? (Select TWO.)

- [ ] AWS creates a default VPC in each Availability Zone.
- [x] By default, each default VPC is available to one AWS account.
- [x] AWS creates a default VPC in each Region
- [ ] A default VPC spans multiple Regions.

# Resources in a VPC need to be able to resolve internal IP addresses for other resources in the VPC. No one outside of the VPC should be able to resolve these addresses. Which of the following Route 53 resources can help you achieve this?

- [ ] A public hosted zone
- [ ] Health checks
- [x] A private hosted zone
- [ ] Domain name registration

# From where does CloudFront retrieve content to store for caching?

- [ ] Edge locations
- [ ] Regions
- [ ] Distributions
- [x] Origins

# Which of the following are true regarding subnets? (Select TWO.)

- [x] A subnet must have a CIDR that’s a subset of the CIDR of the VPC in which it resides.
- [ ] A VPC must have at least two subnets.
- [ ] A subnet spans multiple Availability Zones.
- [x] A subnet spans one Availability Zone

# What is the main purpose of Amazon Route 53?

- [ ] Countering the threat of distributed denial-of-service (DDoS) attacks
- [ ] Protecting web applications from web-based threats
- [x] Managing domain name registration and traffic routing
- [ ] Using the serverless power of Lambda to customize CloudFront behavior

# What’s the difference between a security group and a network access control list (NACL)? (Select TWO.)

- [ ] A security group operates at the subnet level.
- [ ] A network access control list operates at the instance level.
- [x] A network access control list operates at the subnet level.
- [x] A security group operates at the instance level

# Which of the following is the primary benefit of using CloudFront distributions?

- [x] Reduced latency access to your content no matter where your end users live
- [ ] Greater availability through redundancy
- [ ] Automated protection from mass email campaigns
- [ ] Greater security through data encryption

# Which CloudFront distribution type requires you to provide a media player?

- [ ] Web
- [x] RTMP
- [ ] Edge
- [ ] Streaming

# Which of the following are true about registering a domain name with Route 53? (Select TWO.)

- [ ] Route 53 creates a private hosted zone for the domain.
- [x] You can register a domain name for a term of up to 10 years.
- [ ] The registrar you use to register a domain name determines who will host DNS for that domain.
- [x] Route 53 creates a public hosted zone for the domain.

# Your organization is building a database-backed web application that will sit behind an application load balancer. You add an inbound security group rule to allow HTTP traffic on TCP port 80. Where should you apply this security group to allow users to access the application?

- [ ] The subnets where the instances reside
- [ ] The database instance
- [ ] None of these
- [x] The application load balancer listener

# Which of the following AWS services provides Domain Name Services (DNS)?

- [x] Route 53
- [ ] Lambda Edge
- [ ] CloudFront
- [ ] Shield

# What are two differences between a virtual private network (VPN) connection and a Direct Connect connection? (Select TWO.)

- [ ] A Direct Connect connection uses AES 128- or 256-bit encryption.
- [x] A Direct Connect connection offers predictable latency because it doesn’t traverse the internet.
- [x] A VPN connection uses the internet for transport.
- [ ] A VPN connection requires proprietary hardware.

# Which of the following types of Route 53 health checks works by making a test connection to a TCP port?

- [ ] CloudWatch alarm
- [ ] Calculated
- [x] Endpoint
- [ ] Simple

# Which of the following AWS services are considered global rather than bound to a single AWS Region? (Select TWO.)

- [ ] RDS
- [ ] EC2
- [x] IAM
- [x] CloudFront

# On how many continents are CloudFront edge locations distributed?

- [ ] 7
- [x] 6
- [ ] 4
- [ ] 5

# You need to deliver content to users in the United States and Canada. Which of the following edge location options will be the most cost effective for your CloudFront distribution?

- [ ] United States, Canada, Europe, Asia, and Africa
- [ ] United States, Canada, Europe, and Asia
- [ ] All edge locations
- [x] United States, Canada, and Europe

# Your default VPC in the us-west-1 Region has three default subnets. How many Availability Zones are in this Region?

- [ ] 5
- [ ] 2
- [ ] 4
- [x] 3

# Which of the following are globally based AWS services? (Select TWO.)

- [ ] RDS
- [x] CloudFront
- [x] Route 53
- [ ] EC2

# Approximately how many different CloudFront edge locations are there?

- [ ] About 50
- [x] More than 150
- [ ] More than 300
- [ ] More than 500

# Which of the following is true of a VPC peering connection?

- [x] It’s a private connection between two VPCs.
- [ ] It’s a virtual private network (VPN) connection between two VPCs.
- [ ] It’s a private connection that connects more than three VPCs.
- [ ] It’s a public connection between two VPCs.

# Which of the following most accurately describes a subnet within the AWS ecosystem?

- [ ] The networking hardware used within a single Availability Zone
- [ ] The virtual limits imposed on the network access permitted to a resource instance
- [ ] The block of IP addresses assigned for use within a single region
- [x] The block of IP addresses assigned for use within a single Availability Zone

# Which of the following is true of a new security group?

- [x] It contains an outbound rule allowing access to any IP address.
- [ ] It contains an outbound rule denying access to public IP addresses.
- [ ] It contains an inbound rule denying access from any IP address.
- [ ] It contains an inbound rule allowing access from any IP address.

# You have two EC2 instances hosting a web application. You want to distribute 20 percent of traffic to one instance and 80 percent to the other. Which of the following Route 53 routing policies should you use?

- [ ] Simple
- [ ] Failover
- [x] Weighted
- [ ] Multivalue Answer

# What service does AWS use to provide a content delivery network (CDN) for its customers?

- [ ] Internet gateway
- [ ] Route 53
- [x] CloudFront
- [ ] VPC peering

# Which of the following Route 53 routing policies can return set of randomly ordered values?

- [ ] Latency
- [ ] Failover
- [ ] Simple
- [x] Multivalue Answer

# Which of the following is a valid CIDR for a VPC or subnet?

- [x] 10.0.0.0/28
- [ ] 10.0.0.0/29
- [ ] 10.0.0.0/15
- [ ] 10.0.0.0/8

# Which of the following Route 53 routing policies doesn’t use health checks?

- [ ] Latency
- [ ] Geolocation
- [x] Simple
- [ ] Multivalue Answer

