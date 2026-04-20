---
title: Module 12: Extra Practice Questions (Part 1)
tags: []
domains: ["AWS"]
---

# Which AWS service is specifically designed to automatically scan and evaluate security vulnerabilities based on CVE databases and check network reachability?

- [ ] Amazon GuardDuty
- [x] Amazon Inspector
- [ ] AWS Shield
- [ ] AWS WAF

# To implement a strong identity security posture, which IAM feature requires users to provide an additional authentication factor from an external device (e.g., a code from a phone) after entering their password?

- [ ] Permission Boundaries
- [ ] Active Directory Federation
- [ ] IAM Roles
- [x] Multi-Factor Authentication (MFA)

# A financial company stores a large amount of customer records on Amazon S3. The security team is concerned about accidentally exposing Personally Identifiable Information (PII) such as names, emails, and credit card numbers. They need a service to automatically scan S3 buckets to alert them of these exposure risks. Which AWS service is most appropriate?

- [ ] Amazon GuardDuty
- [ ] AWS Key Management Service (KMS)
- [x] Amazon Macie
- [ ] AWS Security Hub

# An e-commerce web application is experiencing attacks using SQL injection and Cross-Site Scripting (XSS) methods. The IT team needs to block these malicious requests before they reach the application servers. Which AWS solution is best suited to solve this problem?

- [ ] AWS Shield Advanced
- [x] AWS WAF (Web Application Firewall)
- [ ] Amazon Inspector
- [ ] AWS Artifact

# A developer is writing an application running on Amazon EC2. This application needs permission to retrieve some configuration data from Amazon S3. According to AWS security "Best Practices", what is the safest way to grant S3 access to this EC2 instance?

- [ ] Open public access (Public Read) for that S3 bucket so EC2 can access it easily.
- [ ] Create an IAM User, grant S3 permissions, and embed the Access Key/Secret Key directly
into the application’s source code.
- [ ] Embed the AWS root account credentials in a hidden file on the EC2 instance.
- [x] Create an IAM Role with a policy allowing S3 read access, then attach this Role to the
EC2 instance.

# In the context of AWS Cost Breakdown, how is data transfer generally billed?

- [ ] Both inbound and outbound data transfers are completely free.
- [ ] Both inbound and outbound data transfers are always charged at the same rate.
- [x] Inbound data transfer (data into AWS) is generally free, while outbound data transfer
(data out to the internet) is charged.
- [ ] Outbound data transfer is free, while inbound data transfer is charged.

# Your company plans to run a steady-state database on Amazon EC2 continuously for the next 3 years. To optimize costs and get the highest possible discount compared to On-Demand pricing, which purchasing option should you apply?

- [ ] Spot Instances
- [x] Reserved Instances (or Savings Plans)
- [ ] Dedicated Hosts
- [ ] On-Demand Instances

# A startup is planning to migrate their on-premises infrastructure to AWS. Before migrating, management wants to estimate the total expected monthly AWS bill for their designed architecture (including EC2, S3, and RDS). Which tool is best suited for this scenario?

- [x] AWS Pricing Calculator
- [ ] AWS Cost Explorer
- [ ] AWS Billing and Cost Management Console
- [ ] AWS Inspector

# A data processing application runs on EC2 and processes batch jobs. These jobs are flexible, meaning they can start and stop at any time, and can be interrupted without affecting the final result. Which EC2 pricing model provides the most cost-effective solution for this specific scenario?

- [x] Spot Instances
- [ ] Reserved Instances
- [ ] On-Demand Instances
- [ ] Savings Plans

# An enterprise wants to simplify its billing process by combining the AWS usage of its 10 different departments into a single monthly invoice. They also want to take advantage of volume pricing discounts across all departments. Which AWS feature should they use to achieve this?

- [ ] AWS Cost Categories
- [x] Consolidated Billing (AWS Organizations)
- [ ] AWS Resource Access Manager (RAM)
- [ ] AWS Budgets

# A company uses AWS Organizations to manage multiple accounts. They have a central "production"account and a member account for training. A user in the training account attempts to create an S3 bucket inside the "production"account but receives an "Access Denied"error. What is the primary cause of this issue?

- [ ] S3 bucket names must be globally unique across all AWS accounts.
- [x] The user lacks the appropriate cross-account IAM permissions/permission sets to create
resources in the production account.
- [ ] The production account has reached its maximum billing limit.
- [ ] Consolidated billing is not enabled.

# Your FinOps team wants to implement a proactive cost monitoring strategy. They need to receive an email alert automatically whenever their forecasted monthly AWS spending exceeds 1,000.Whichserviceshouldtheyconfigure?

- [ ] AWS Cost Explorer
- [ ] AWS Trusted Advisor
- [x] AWS Budgets
- [ ] AWS Organizations

# Your DevSecOps team is setting up a CI/CD pipeline. They want to ensure that container images do not contain known software vulnerabilities before being deployed to Amazon Elastic Container Registry (ECR). Which of the following solutions best meets this requirement automatically?

- [x] Enable Amazon Inspector to automatically scan container images (Amazon ECR).
- [ ] Configure AWS WAF on the Application Load Balancer.
- [ ] Set up Network Firewall for the Docker environment.
- [ ] Run Amazon Macie to analyze source code inside the container.

# To meet data retention and compliance requirements in DevSecOps, a company needs to record the entire history of API calls made within their AWS account. Which service should you apply?

- [ ] Amazon Inspector
- [ ] Amazon Macie
- [ ] AWS Systems Manager
- [x] AWS CloudTrail

# According to the Shared Responsibility Model, which of the following tasks is the responsibility of the CUSTOMER when using Amazon EC2?

- [ ] Physical security of AWS data centers.
- [x] OS patching and installing antivirus software on the instance.
- [ ] Maintaining AWS network hardware and routers.
- [ ] Safely disposing of broken server hard drives.

# A security analyst wants a service that monitors for unusual API calls, suspicious network traffic, and DNS-related signs of compromise. Which AWS service best matches this need?

- [ ] Amazon Macie fits best.
- [x] Amazon GuardDuty fits best.
- [ ] AWS Secrets Manager fits best.
- [ ] Amazon Inspector fits best.

# According to AWS’s Shared Responsibility Model, which of the following components falls under AWS’s security responsibility (Security of the Cloud)?

- [ ] Managing the Guest OS and software patches
- [x] Physical security for the data center infrastructure
- [ ] Configuring firewall rules (Security Groups) for EC2 instances
- [ ] Client-side data encryption

# Which type of AWS KMS key allows the public key to be downloaded and shared with external parties for encryption, while the private key never leaves the service?

- [ ] Symmetric KMS Key
- [ ] AWS Managed Key
- [ ] AWS Owned Key
- [x] Asymmetric KMS Key

# Which statement best describes the AWS Shared Responsibility Model?

- [ ] AWS is responsible for everything in the cloud, including customer data and IAM
- [x] Security and compliance are shared between AWS and the customer
- [ ] Customers are responsible only for physical data centers
- [ ] AWS is responsible only for IAM users and groups

# An EC2 application only needs to read files from one S3 bucket. A junior engineer suggests attaching AdministratorAccess to the EC2 instance “because it is easier and avoids errors.”. Which solution best follows the least privilege principle?

- [ ] Attach admin access to the instance role
- [ ] Store access keys directly inside the code
- [x] Create a role with only required S3 read
- [ ] Give full access and enable MFA later

# What is the core difference between IAM Roles and IAM Users in Identity and Access Management services?

- [ ] IAM Users can contain multiple IAM Groups, but IAM Roles cannot.
- [ ] IAM Roles are region-bound resources, while IAM Users are global resources.
- [x] IAM Users have long-term login credentials, while IAM Roles use temporary security
credentials.
- [ ] IAM Users are for humans only, while IAM Roles are for AWS services only.

# Why are Managed Services (like Amazon S3 or DynamoDB) considered to have "Less Customer Responsibility"compared to Infrastructure Services (like Amazon EC2)?

- [ ] The customer does not need to use IAM for managed services
- [ ] Customers are not responsible for client-side encryption in managed services
- [x] AWS handles the management of the underlying OS, network configuration, and platform
software for managed services
- [ ] Managed services do not require any configuration from the customer

# Under the shared responsibility model, which of the following is a customer responsibility for Amazon EC2?

- [ ] Physical data centers
- [ ] Global infrastructure such as Regions and Availability Zones
- [x] The operating system and applications running on the instance
- [ ] The virtualization layer (hypervisor)

# A company has three problems at the same time: (1) It wants to find PII inside S3 buckets. (2) It wants to detect CVEs and package vulnerabilities in ECR images. (3) It wants alerts for suspicious API activity and possible DNS-based exfiltration. Which mapping is the most correct?

- [x] Macie / Inspector / GuardDuty
- [ ] GuardDuty / Macie / Inspector
- [ ] Inspector / GuardDuty / Macie
- [ ] Macie / GuardDuty / Inspector

# An organization needs to automatically scan millions of files in Amazon S3 buckets to detect sensitive information such as credit card numbers and personal identifiers (PIIs). Which of the following services performs this task best?

- [x] Amazon Macie
- [ ] AWS Inspector
- [ ] Amazon Security Tasks
- [ ] AWS WAF

# Which list correctly shows the main components in the AWS cost breakdown?

- [x] Compute, Managed Services, Storage, Network Traffic Data Transfer, Misc
- [ ] Compute, IAM, DNS, Storage, Support
- [ ] EC2, Lambda, S3, VPC, CloudTrail
- [ ] CPU, RAM, Disk, API, Backup

# According to the slide, which formula is used to calculate compute cost?

- [x] Compute Cost = Instance Type × Instance Amount × Runtime
- [ ] Compute Cost = Storage × Requests × Region
- [ ] Compute Cost = Runtime × Bandwidth × Users
- [ ] Compute Cost = Instance Type × Availability Zone × Storage

# Which of the following is NOT one of the four storage cost drivers shown in the slide?

- [ ] Storage class tiers
- [ ] PUT/GET request volume
- [ ] Lifecycle transitions
- [x] CPU clock speed

# Which of the following is listed as an advantage of the Pay-as-you-go model?

- [ ] Revenue is unpredictable and volatile
- [ ] Pricing is always simple
- [x] Lower upfront costs attract users
- [ ] It is difficult to retain customers

# Which option correctly lists the four AWS pricing models shown in the document?

- [x] On-Demand, Spot Instances, Reserved Instances, Savings Plans
- [ ] Free Tier, Premium Tier, Enterprise Tier, Custom Tier
- [ ] Compute Plan, Storage Plan, Network Plan, Security Plan
- [ ] Basic, Standard, Advanced, Professional

# Which service should you use to protect your web applications from common exploits such as SQL Injection or Cross-Site Scripting (XSS)?

- [x] AWS WAF (Web Application Firewall)
- [ ] AWS Shield
- [ ] Network ACL
- [ ] Amazon Inspector

# Regarding networking costs in AWS, which of the following actions typically does NOT incur data transfer charges?

- [ ] Data transfer between two different Regions.
- [ ] Data transfer from AWS to the Internet (Outbound Data Transfer).
- [x] Data transfer from the Internet to AWS (Inbound Data Transfer).
- [ ] Data transfer between two different Availability Zones (AZs) within the same Region.

# A company wants to allow an application running on an EC2 instance to access S3 securely without embedding access keys in the code. What is the BEST solution?

- [ ] Create an IAM user and store credentials in the application
- [x] Use an IAM role attached to the EC2 instance
- [ ] Store credentials in environment variables
- [ ] Store credentials in environment variables

# A company needs to manage permissions for multiple developers who require the same level of access to AWS resources. What is the MOST efficient approach?

- [ ] Assign policies individually to each IAM user
- [ ] Create IAM roles for each developer
- [x] Create an IAM group and attach policies to the group
- [ ] Share one IAM user among developers

# A company wants to enforce that all data stored in S3 is encrypted using customer-managed keys with full control over key rotation. Which service should they use?

- [ ] AWS Certificate Manager
- [x] AWS Key Management Service
- [ ] Amazon Inspector
- [ ] AWS Shield

# A company wants to analyze EC2 instances for vulnerabilities and unintended network exposure. Which AWS service should they use?

- [x] Amazon Inspector
- [ ] AWS Shield
- [ ] AWS WAF
- [ ] AWS IAM

# A company uses multiple AWS accounts and wants to centrally manage security policies and billing. What should they use?

- [ ] IAM roles
- [ ] IAM groups
- [x] AWS Organizations
- [ ] AWS Config

# A company wants to encrypt sensitive data stored in an RDS database and ensure that encryption keys are rotated automatically. Which solution should they choose?

- [ ] Use IAM policies
- [x] Use AWS KMS with automatic key rotation
- [ ] Use AWS Shield
- [ ] Use AWS Organizations

# A company is running a web application on Amazon EC2 instances that needs to upload files to an Amazon S3 bucket. The security team requires that no long-term AWS credentials be stored on the instances. Which solution provides secure access while following AWS best practices?

- [ ] Create an IAM user with S3 permissions and store the access keys in a configuration file on the EC2 instance.
- [x] Create an IAM role with the required S3 permissions and attach it to the EC2 instance.
- [ ] Store AWS access keys in AWS Systems Manager Parameter Store and retrieve them at
runtime.
- [ ] Create an S3 bucket policy that allows public write access from the EC2 instance’s public
IP address.

# A company deploys an Application Load Balancer across two public subnets in different Availability Zones. The load balancer distributes traffic to EC2 instances running in private subnets. What is the PRIMARY advantage of this architecture?

- [ ] It reduces the cost of running EC2 instances by eliminating the need for Auto Scaling.
- [x] It ensures high availability and fault tolerance by distributing traffic across multiple
Availability Zones.
- [ ] It allows EC2 instances in private subnets to have direct internet access.
- [ ] It removes the need to configure security groups for the EC2 instances.

# A company needs to provision a logically isolated virtual network in AWS where it can define its own IP address range, create subnets, configure route tables, and control inbound and outbound traffic. Which AWS service should the company use?

- [ ] Amazon EC2
- [x] Amazon VPC
- [ ] AWS Direct Connect
- [ ] Amazon Route 53

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

# According to the AWS Shared Responsibility Model, which of the following is the responsibility of the customer?

- [ ] Maintaining physical hardware and global network infrastructure
- [x] Managing the guest operating system, applications, and customer data
- [ ] Operating the virtualization layer (hypervisor) on host servers
- [ ] Controlling environmental and physical security at data centers

# What does the "Least Privilege"principle in AWS IAM mean?

- [x] Granting only the minimum permissions necessary for a user to perform their job
- [ ] Giving every user in a group full administrative privileges to ensure they can work
- [ ] Only allowing access to AWS resources from the corporate internal network
- [ ] Allowing users to freely grant permissions to other accounts when needed

# Which AWS pricing model is best suited for unpredictable, short-term workloads that cannot be interrupted?

- [ ] Reserved Instances (RI)
- [ ] Spot Instances
- [x] On-Demand Instances
- [ ] Savings Plans

# Which AWS tool helps users plan budgets and receive notifications when actual costs exceed a pre-defined threshold?

- [ ] AWS Cost Explorer
- [x] AWS Budgets
- [ ] AWS Trusted Advisor
- [ ] Consolidated Billing

# Which security service uses Machine Learning to automatically discover and protect sensitive data (such as PII) stored in Amazon S3?

- [ ] Amazon GuardDuty
- [ ] Amazon Inspector
- [x] Amazon Macie
- [ ] AWS WAF

# Which of the following is not a Core Component of AWS Identity and Access Management (IAM)?

- [ ] IAM User
- [ ] IAM Role
- [ ] IAM Group
- [x] IAM Tree

# Under the shared responsibility model, which of the following is the responsibility of AWS?

- [ ] Client-side encryption
- [x] Protecting infrastructure devices
- [ ] Server-side encryption
- [ ] Filtering traffic with Security Groups

