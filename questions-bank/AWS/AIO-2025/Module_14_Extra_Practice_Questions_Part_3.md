---
title: Module 14: Extra Practice Questions (Part 3)
tags: []
domains: ["AWS"]
---

# Account A wants to share an Amazon Machine Image (AMI) backed by an encrypted EBS volume with Account B. Which combination of actions is strictly REQUIRED for Account B to successfully launch an EC2 instance from this shared AMI?

- [ ] B. Which combination of actions is strictly REQUIRED for Account B to successfully launch an EC2 instance from this shared AMI?
A.
- [ ] Which combination of actions is strictly REQUIRED for Account B to successfully launch an EC2 instance from this shared AMI?
A. Only share the underlying KMS key with Account B, because the AMI is inherently linked to it.
B. Copy the AMI to an S3 bucket and grant Account B cross-account access to the bucket.
- [x] Share the AMI launch permissions with Account B AND share the underlying KMS key
with Account B.
- [ ] Make the AMI public and temporarily disable KMS encryption during the launch process.

# In an AWS Organization, a Service Control Policy (SCP) is applied to an Organizational Unit (OU). The SCP explicitly allows access to Amazon S3. However, an IAM user within a member account of that OU receives an ’Access Denied’ error when trying to upload a file to S3. What is the most likely reason?

- [ ] SCPs only monitor billing limits and do not actually affect resource access.
- [x] The IAM user does not have an IAM policy attached that explicitly grants them S3
permissions.
- [ ] The master account must perform an S3 action first to activate the SCP for the member
accounts.
- [ ] The SCP must be applied directly to the IAM user instead of the Organizational Unit.

# A security team wants to audit which IAM users in the account have not used their access keys in the past 90 days. Which IAM tool should they use?

- [ ] IAM Access Advisor
- [ ] AWS CloudTrail
- [x] IAM Credentials Report
- [ ] AWS Config

# Both AWS Secrets Manager and AWS Systems Manager (SSM) Parameter Store can be used to securely store database credentials. What is a key capability unique to AWS Secrets Manager that justifies its higher cost?

- [ ] It uses a hierarchical path structure to organize configuration data.
- [x] It natively supports automatic rotation of secrets on a schedule using a Lambda function.
- [ ] It provides free public TLS/SSL certificates for your applications.
- [ ] It is the only service that integrates with AWS KMS for encryption at rest.

# A company stores sensitive documents in Amazon S3 and needs to encrypt them using keys that they can fully control, rotate manually, and audit via IAM policies. Which AWS KMS key type should they use?

- [ ] AWS Owned Keys
- [ ] AWS Managed Keys
- [ ] Symmetric Imported Keys
- [x] Customer Managed Keys (CMK)

# Under the AWS Shared Responsibility Model, which of the following is a responsibility specifically managed by the CUSTOMER when running an application on Amazon EC2 ?

- [ ] Disposal of decommissioned hard drives.
- [x] Patching the guest operating system and the application software.
- [ ] Maintenance of the underlying virtualization software (Hypervisor).
- [ ] Physical security of the data centers.

# A company’s web application hosted behind an Application Load Balancer is experiencing a large-scale SQL injection attack. Which AWS service should be deployed to block these malicious HTTP requests?

- [ ] AWS Shield Standard
- [ ] AWS Network Firewall
- [x] AWS WAF with a Web ACL attached to the ALB
- [ ] Amazon GuardDuty

# To satisfy a regulatory audit, a company needs to provide a history of all API calls made within their AWS account, including who made the call and from which IP address. Which service provides this record?

- [ ] Amazon CloudWatch Logs.
- [ ] AWS Config.
- [x] AWS CloudTrail.
- [ ] Amazon Inspector.

# Your application needs to securely store a third-party API key that rarely changes. You want the most cost-effective solution that supports encryption at rest via KMS and allows hierarchical organization of the configuration data. Which service should you choose ?

- [x] AWS Systems Manager (SSM) Parameter Store
- [ ] AWS Certificate Manager (ACM)
- [ ] AWS Key Management Service (KMS)
- [ ] AWS Secrets Manager

# A security engineer needs to automatically discover and report any Personally Identifiable Information (PII) that has been accidentally uploaded to the company’s Amazon S3 buckets. Which AWS service is purpose-built for this task?

- [ ] Amazon GuardDuty
- [ ] AWS Trusted Advisor
- [ ] Amazon Inspector
- [x] Amazon Macie

# A data analytics team is running a batch processing job that can be interrupted and resumed at any time. Which EC2 instance type offers the deepest discount (up to 90

- [ ] Convertible Reserved Instances.
- [ ] On-Demand Instances.
- [ ] Standard Reserved Instances.
- [x] Spot Instances.

# According to the AWS Compute Cost calculation formula, which three variables determine the total cost?

- [ ] On-demand Rate, Reserved Capacity, and Throughput
- [ ] Storage Tier, Data Transfer, and Region
- [ ] vCPU Count, Memory Size, and API Requests
- [x] Instance Type, Instance Amount, and Runtime

# What is identified as a primary drawback for a provider using the ’Pay-as-you-go’ pricing model?

- [ ] It is too simple for customers to understand
- [ ] Customers are locked into long-term contracts
- [ ] It attracts fewer users due to high entry costs
- [x] Revenue is unpredictable and volatile

# For an unpredictable workload where you do not know how long the system will run, which pricing model is most appropriate?

- [ ] Compute Savings Plans
- [x] On-demand Pricing
- [ ] Convertible Reserved Instances
- [ ] Standard Reserved Instances

# When accessing AWS services within the same Region, what is the cost impact of using a NAT Gateway compared to an Internet Gateway?

- [ ] NAT Gateway has no data transfer charge, while Internet Gateway charges per GB.
- [ ] Both have a flat monthly fee regardless of usage.
- [x] NAT Gateway incurs both a per-hour service charge and a per-GB data processing charge.
- [ ] Internet Gateway incurs a per-hour service charge.

# For advanced FinOps in AI deployments, why is it highly recommended to use Batch Inference instead of Real-Time Endpoints whenever latency allows?

- [ ] Batch Inference runs 24/7 to ensure zero latency.
- [x] Real-Time SageMaker endpoints run 24/7 whether they serve requests or not, leading to
idle waste.
- [ ] Batch Inference utilizes more expensive GPU types.
- [ ] Real-Time Endpoints do not support modern AI models.

# Which AWS principle is described as "Pay less by using more,"where the unit price decreases as the total usage increases?

- [ ] Economies of Scale
- [ ] Pay-as-you-go
- [x] Volume Discounts
- [ ] Savings Plans

# In the On-Demand pricing model, which of the following is considered a primary characteristic regarding its usage and commitment?

- [ ] It requires a 1-year or 3-year commitment for discounted rates.
- [x] It is best for unpredictable workloads with no upfront commitment.
- [ ] It provides the highest discount, up to 90
- [ ] It offers lower costs per hour compared to Reserved Instances.

# Regarding network architecture cost impact, which of the following scenarios typically incurs "No data transfer charge"?

- [ ] Transferring data between two different AWS Regions.
- [ ] Transferring data between Workload components across two different Availability Zones.
- [x] Accessing AWS services in the same Region via an Internet Gateway.
- [ ] Data processing and service charges when using a NAT Gateway.

# Which AWS tool is used to estimate the cost of using a specific set of AWS services before any resources are actually provisioned?

- [x] AWS Pricing Calculator
- [ ] AWS Trusted Advisor
- [ ] AWS Cost Explorer
- [ ] AWS Budgets

# Under the AWS Shared Responsibility Model, which of the following is a responsibility of the customer regarding billing?

- [ ] Determining the base price for EC2 instances
- [ ] Calculating the tax rates for all global regions
- [x] Configuring AWS Budgets and alerts
- [ ] Maintaining the billing infrastructure hardware

# Which feature of AWS Organizations allows a company to receive a single bill for all of its AWS accounts?

- [ ] Unified Cost management
- [ ] Resource Groups
- [x] Consolidated Billing
- [ ] Control Tower

# Which of the following determines the cost of using Amazon S3 storage?

- [ ] Which of the following determines the cost of using Amazon S3 storage?
- [x] Storage class used and the total amount of data stored
- [ ] The type of data (e.g images, text,...) being stored
- [ ] The operating system used to upload the files

# Which AWS billing tool provides a visual representation of your cost and usage trends over time and allows you to forecast future costs?

- [ ] AWS Marketplace
- [ ] AWS Purchase Order Management
- [ ] AWS License Manager
- [x] AWS Cost Explorer

# A user wants to save money on their compute costs and is willing to commit to a consistent amount of usage (measured in /hour)fora1−yearterm.Whichoptionshouldtheychoose?

- [ ] Pay-as-you-go pricing
- [ ] Volume Discounts
- [ ] On-demand Capacity Reservations
- [x] Saving plans

# Which AWS service is used to manage user identities and their access levels to AWS resources and services?

- [ ] AWS Secrets Manager
- [ ] AWS Directory Service
- [x] AWS Identity and Access Management (IAM)
- [ ] AWS Resource Access Manager (RAM)

# A company needs to manage encryption keys and control their use across a wide range of AWS services. Which service should they use?

- [ ] AWS Cloud HSM
- [ ] AWS Systems Manager (SSM)
- [x] AWS Key Management Service (KMS)
- [ ] AWS Certificate Manager (ACM)

# Which AWS service helps protect web applications from common web exploits like SQL injection or cross-site scripting (XSS)?

- [ ] AWS Shield
- [ ] Amazon GuardDuty
- [x] AWS WAF (Web Application Firewall)
- [ ] AWS Network Firewall

# A user needs to provision, manage, and deploy public and private SSL/TLS certificates for use with AWS services. Which service should they use?

- [x] AWS Certificate Manager (ACM)
- [ ] AWS IAM
- [ ] AWS Artifact
- [ ] AWS Secrets Manager

# Which task falls under the customer’s responsibility when utilizing managed services like Amazon S3 or Amazon DynamoDB?

- [ ] Maintaining the physical hardware and data centers
- [ ] Managing the host operating system and hypervisor
- [x] Configuring client-side data encryption
- [ ] Securing the global infrastructure and edge locations

# How does AWS handle key rotation for Customer Managed Keys (CMKs) where the key material was manually imported by the user?

- [ ] Keys are rotated automatically every 365 days
- [ ] Keys are rotated automatically every 90 days
- [ ] AWS Support must rotate the key upon receiving a support ticket
- [x] There is no automatic rotation; it must be done manually

# A development team wants to store database credentials securely and needs a service that natively supports automatic rotation of these secrets. Which AWS service is best suited for this requirement?

- [ ] AWS Systems Manager Parameter Store
- [x] AWS Secrets Manager
- [ ] AWS Key Management Service (AWS KMS)
- [ ] AWS Certificate Manager (ACM)

# A system administrator has provisioned a public TLS certificate via AWS Certificate Manager (ACM). Which of the following resources can this certificate be directly deployed on to provide in-flight encryption?

- [ ] Amazon EC2 instances
- [x] Application Load Balancers (ALB)
- [ ] Amazon S3 buckets
- [ ] Amazon RDS instances

# An architecture requires AWS WAF for Layer 7 protection and a fixed, static IP address for external whitelisting. Since an Application Load Balancer (ALB) does not offer a static IP by default, what is the recommended architecture?

- [ ] Apply AWS WAF directly to a Network Load Balancer (NLB)
- [ ] Attach an Elastic IP directly to the AWS WAF Web ACL
- [x] Place AWS Global Accelerator in front of the ALB
- [ ] Use Amazon Route 53 to generate a static IP for WAF

# A startup is running a machine learning training job that can be interrupted and resumed later without affecting the final model. The team needs to minimize compute costs as much as possible. Which pricing model should they choose?

- [ ] On-Demand Instances
- [ ] Reserved Instances
- [x] Spot Instances
- [ ] Savings Plans

# A company has deployed two Amazon EC2 instances within an Amazon Virtual Private Cloud (VPC). To ensure no data transfer charges occur when these instances communicate with each other, how must the instances be deployed?

- [ ] In different AWS Regions using VPC Peering.
- [x] In the same Availability Zone.
- [ ] In different Availability Zones within the same AWS Region.
- [ ] Behind an AWS Transit Gateway in the same AWS Region.

# Which of the following is NOT one of the primary cost drivers for Amazon S3 storage?

- [ ] Storage Class Tiers
- [ ] PUT/GET Request Volume
- [x] Number of IAM Users accessing the bucket
- [ ] Lifecycle Transitions

# What is a significant risk for companies that do NOT implement cost allocation tags on their AI models?

- [ ] They cannot choose an AWS Region.
- [x] They cannot attribute spend or identify wasted resources.
- [ ] They will be unable to use Amazon S3.
- [ ] Their AWS Support Plan will be automatically downgraded.

# A company wants to track and organize its AWS costs by individual departments, such as "Marketing"and "Development". What is the most effective way to achieve this?

- [ ] Create separate AWS Regions for each department.
- [x] Apply User-Defined Cost Allocation Tags to resources.
- [ ] Use AWS Cost Anomaly Detection to filter traffic.
- [ ] Enable Amazon CloudWatch Metrics Dashboard.

# Which AWS service can manage permissions for AWS resources by using policies?

- [x] AWS Identity and Access Management (IAM)
- [ ] Amazon Detective
- [ ] Amazon GuardDuty
- [ ] Amazon Inspector

# A company needs to block SQL injection attacks. Which AWS service or feature provides this functionality?

- [x] AWS WAF
- [ ] Network ACLs
- [ ] Security groups
- [ ] AWS Trusted Advisor

# Which AWS offering can analyze a company’s AWS environment to discover security vulnerabilities on Amazon EC2 instances?

- [ ] Security groups
- [ ] AWS Shield Standard
- [ ] Amazon Macie
- [x] Amazon Inspector

# A company has multiple AWS accounts. The company needs to receive a consolidated bill from AWS and must centrally manage security compliance. Which AWS service or feature should the company use to meet these requirements?

- [ ] AWS Security Hub
- [ ] AWS Config
- [x] AWS Organizations
- [ ] AWS Cost and Usage Report

# Which AWS service integrates with other AWS services to provide the ability to encrypt data at rest?

- [ ] AWS Security Hub
- [ ] AWS Identity and Access Management (IAM)
- [ ] AWS Certificate Manager (ACM)
- [x] AWS Key Management Service (AWS KMS)

# Which AWS service is used to temporarily provide federated security credentials to access AWS resources?

- [ ] AWS Certificate Manager
- [ ] AWS Secrets Manager
- [x] AWS Simple Token Service (AWS STS)
- [ ] Amazon GuardDuty

# A company has an AWS Business Support plan. The company needs to gain access to the AWS DDoS Response Team (DRT) to help mitigate DDoS events. Which AWS service or resource must the company use to meet these requirements?

- [ ] AWS Shield Standard
- [ ] AWS Enterprise Support
- [ ] AWS WAF
- [x] AWS Shield Advanced

# An AWS user wants to proactively detect when an instance or account might be compromised or if there are threats from attacks. Which AWS service should the user choose?

- [ ] Amazon Inspector
- [ ] AWS WAF
- [x] Amazon GuardDuty
- [ ] AWS Shield

# A company plans to launch an ecommerce website that contains many images for a product catalog. The company wants to keep the cost of running the website within a specific budget. Which AWS service or tool should the company use to monitor the ongoing costs of the website?

- [ ] AWS CloudFormation
- [x] AWS Cost Explorer
- [ ] AWS SDKs
- [ ] EC2 Image Builder

# A company wants to visualize and manage AWS Cloud costs and usage for a specific period of time. Which AWS service or feature will meet these requirements?

- [x] Cost Explorer
- [ ] AWS Budgets
- [ ] Consolidated billing
- [ ] AWS Organizations

# A company has multiple AWS accounts. The company needs to receive a consolidated bill from AWS and must centrally manage security and compliance. Which AWS service or feature should the company use to meet these requirements?

- [ ] AWS Security Hub
- [ ] AWS Config
- [x] AWS Organizations
- [ ] AWS Cost and Usage Report

