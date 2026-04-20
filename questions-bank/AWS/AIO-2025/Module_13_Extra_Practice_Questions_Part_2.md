---
title: Module 13: Extra Practice Questions (Part 2)
tags: []
domains: ["AWS"]
---

# What is the primary fundamental charging principle of AWS?

- [ ] Pay-per-storage
- [x] Pay-as-you-go
- [ ] Fixed monthly payment
- [ ] Free for all services for new users

# According to the "Volume Discounts"principle, what happens as your usage of AWS services increases?

- [x] The unit cost decreases
- [ ] The unit cost increases to compensate for resources
- [ ] The unit cost remains unchanged
- [ ] Your resources will be limited

# Which EC2 pricing model is most suitable for unpredictable workloads that require the flexibility to be turned on or off at any time?

- [ ] Reserved Instances
- [x] On-Demand
- [ ] Spot Instances
- [ ] Savings Plans

# A government agency is getting started with managing their AWS Cloud costs. They want to set up notifications to alert them when costs exceed a certain threshold for any given month. Which AWS service would they use to achieve this task?

- [ ] AWS Cost Explorer
- [x] AWS Budgets
- [ ] AWS Organizations
- [ ] AWS Pricing Calculator

# What do you gain from setting up consolidated billing for five different AWS accounts under another master account?

- [ ] AWS services’ costs will be reduced to half the original price.
- [ ] The consolidated billing feature is just for organizational purpose.
- [x] Each AWS account gets volume discounts.
- [ ] Each AWS account gets five times the free-tier services capacity.

# Under the AWS Shared Responsibility Model, which of the following is an AWS responsibility?

- [ ] Configuring AWS Identity and Access Management (IAM) policies.
- [ ] Encrypting customer data stored in Amazon S3.
- [ ] Patching the guest operating system on EC2 instances
- [x] Securing the physical data centers and hardware

# What action does an IAM Policy take if a specific API request is neither explicitly allowed nor explicitly denied?

- [x] It results in an implicit deny.
- [ ] It allows the request but flags it in CloudTrail.
- [ ] It results in an explicit deny.
- [ ] It prompts the user for MFA.

# What is the most secure way to grant an Amazon EC2 instance permissions to access an Amazon S3 bucket?

- [ ] Embed the IAM user’s access keys directly into the application code.
- [ ] Store the access keys in an S3 bucket and have the EC2 instance download them.
- [x] Attach an IAM Role to the EC2 instance.
- [ ] Create a new IAM User specifically for the EC2 instance and share the password.

# What is not listed as one of the four pricing models of AWS?

- [ ] On-Demand
- [ ] Spot Instances
- [ ] Saving Plans
- [x] Premium

# A large organization is trying to decide the level of AWS Support that best suits their needs. The company has the following requirements: Basic AWS Trusted Advisor security checks; 15-minute response time for business-critical system down scenarios; Full set of AWS Trusted Advisor checks and prioritized recommendations by an AWS account team; A dedicated Technical Account Manager (TAM) for consultative architectural and operational guidance. Which AWS Support Plan should the company choose based on these requirements?

- [ ] Basic Support
- [ ] Developer Support
- [ ] Business Support
- [x] Enterprise Support

# What are the two main types of KMS keys, and how do they differ in usage?

- [ ] Symmetric keys use one key for encryption only, while asymmetric keys use one key for
decryption only.
- [x] Symmetric keys use a single key for encryption and decryption, while asymmetric keys
use a public/private key pair.
- [ ] Symmetric keys use public/private pairs, while asymmetric keys use a single shared key.
- [ ] Both symmetric and asymmetric keys require two keys for encryption and decryption.

# A compliance requirement mandates that all API calls made within an AWS account must be recorded for auditing purposes. Which AWS service fulfills this requirement?

- [ ] Amazon CloudWatch
- [x] AWS CloudTrail
- [ ] AWS Config
- [ ] Amazon SNS

# Which pricing model is best for long-term stable workload?

- [ ] On-Demand
- [ ] Savings Plans
- [x] Reserved Instances
- [ ] Spot Instances

# Which services does Amazon Inspector integrate with to send findings?

- [ ] Amazon S3 Amazon DynamoDB
- [x] AWS Security Hub Amazon EventBridge
- [ ] Amazon RDS AWS Lambda
- [ ] Amazon CloudFront AWS Shield

# Which AWS service is specifically designed to allow you to centrally govern and manage multiple AWS accounts?

- [x] AWS Organizations
- [ ] AWS Cost Explorer
- [ ] IAM Identity Center
- [ ] Amazon EventBridge

# Which AWS service allows a user to set custom alerts that will notify them via email or SNS when their AWS usage or spending exceeds a predefined threshold?

- [ ] AWS Cost Explorer
- [ ] AWS Trusted Advisor
- [x] AWS Budgets
- [ ] AWS Cost Anomaly Detection

# Which is the correct workflow for identifying sensitive data using Amazon Macie?

- [x] Amazon S3 →Amazon Macie (analyze sensitive data) →Amazon EventBridge (notify
integrate)
- [ ] Amazon EC2 →AWS Shield →Amazon SNS
- [ ] Amazon RDS →AWS WAF →Amazon CloudWatch
- [ ] AWS Lambda →Amazon GuardDuty →AWS Security Hub

# You need to encrypt application data at rest in Amazon S3 using AWS Key Management Service (KMS) with fine-grained control over who can use the key. Which key type is the best fit?

- [x] Customer managed KMS key that you create and control
- [ ] Default S3 server-side encryption with S3-managed keys (SSE-S3)
- [ ] KMS key for AWS CloudHSM only, with no IAM policies
- [ ] AWS managed key aws/s3 used transparently by S3

# An organization with many AWS accounts wants to centrally define and enforce AWS WAF rules and Shield Advanced protections across all accounts in the organization. Which service is designed to simplify this centralized management?

- [ ] Amazon Macie
- [ ] AWS Config
- [ ] AWS GuardDuty
- [x] AWS Firewall Manager

# You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?

- [ ] The Reserved Instance discounts can only be shared with the master account
- [x] All accounts can receive the hourly cost benefit of the Reserved Instances
- [ ] The purchased instances will have better performance than On-demand instances
- [ ] There are no cost benefits from using consolidated billing; It is for informational purposes
only

# Which statement best describes the main difference between AWS Certificate Manager (ACM) and AWS Key Management Service (KMS)?

- [x] ACM manages SSL/TLS certificates for securing network connections, while KMS manages encryption keys for protecting data at rest and in transit
- [ ] ACM is used only for database encryption, while KMS is used solely for logging and monitoring
- [ ] KMS automatically deploys SSL/TLS certificates to Elastic Load Balancers, while ACM only stores private keys in hardware modules
- [ ] Both ACM and KMS are used only for generating client-side encryption keys that never leave the customer’s environment

# Which service natively supports automatic rotation of database credentials?

- [x] AWS Secrets Manager
- [ ] AWS Certificate Manager
- [ ] SSM Parameter Store
- [ ] AWS KMS

# In the Shared Responsibility Model of Amazon Web Services, which of the following responsibilities belongs to AWS?

- [ ] Configuring firewall rules for EC2 instances
- [ ] Encrypting data at the application level
- [x] Maintaining the physical hardware in data centers
- [ ] Managing IAM users and permissions

# You want to enhance security for the root account and IAM users in AWS. Which of the following is a best practice?

- [ ] Use strong passwords only, without additional factors
- [ ] Use AWS Identity and Access Management roles instead of users for all access
- [x] Enable Multi-Factor Authentication for the root account and critical IAM users
- [ ] Share access keys among developers for easier management

# Which of the following is a common threat that AWS WAF protects against?

- [ ] Unencrypted EBS volumes
- [x] SQL Injection
- [ ] SYN Floods
- [ ] Unauthorized OS logins

# You want to track AWS costs per project and receive alerts when budgets are exceeded. Which combination of services should you use?

- [ ] Amazon CloudWatch + Trusted Advisor
- [x] AWS Cost Explorer + AWS Budgets
- [ ] AWS Shield + AWS WAF
- [ ] AWS Organizations + IAM

# A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?

- [ ] Create one global AWS account and move all AWS resources to that account
- [ ] Sign up for three years of Reserved Instance pricing up front
- [x] Use the consolidated billing feature from AWS Organizations
- [ ] Sign up for the AWS Enterprise support plan to get volume discounts

# Which of the following services uses machine learning to continuously monitor for malicious activity and unauthorized behavior?

- [ ] AWS Macie
- [ ] AWS KMS
- [x] Amazon GuardDuty
- [ ] AWS CloudTrail

# Which of the following is an advantage of AWS consolidated billing?

- [x] The ability to receive one bill for multiple accounts
- [ ] Service limits increasing by default in all accounts
- [ ] A fixed discount on the monthly bill
- [ ] The automatic extension of the master account’s AWS support plan to all accounts

# Which service automatically scans Amazon S3 buckets to discover and protect sensitive data like Personally Identifiable Information (PII)?

- [ ] Amazon Inspector
- [ ] Amazon GuardDuty
- [x] Amazon Macie
- [ ] AWS Secrets Manager

# Which service enables automated vulnerability scanning of Amazon EC2 instances and container images in Amazon ECR?

- [ ] Amazon GuardDuty
- [x] Amazon Inspector
- [ ] AWS Config
- [ ] AWS WAF

# According to the principle of "Least Privilege", how should permissions be granted in AWS?

- [ ] Grant users full administrator access to avoid permission errors.
- [x] Grant users only the specific permissions necessary to perform their required tasks.
- [ ] Apply the same permissions to all users in the account using a single IAM Group.
- [ ] Allow all users access to the root account for emergencies.

# What is described as a ’non-negotiable’ requirement to accurately track and attribute costs to different business units or projects?

- [ ] Running all workloads in a single VPC
- [ ] Using Amazon S3 Intelligent- Tiering
- [ ] Enabling AWS CloudTrail
- [x] Implementing Cost Allocation Tags

# A company wants to implement detailed tracking of its cloud costs by department and project. Which AWS feature or service should the company use?

- [ ] AWS Marketplace
- [ ] AWS Budgets
- [x] Cost allocation tags
- [ ] Consolidated billing

# Which of the following security measures protect access to an AWS account?

- [x] Activate multi-factor authentication (MFA) for privileged users
- [ ] Enable AWS CloudTrail
- [ ] Create one IAM user and share with many developers and users
- [ ] Enable Amazon CloudFront

# How can a customer increase security to AWS account logons?

- [ ] Configure AWS Certificate Manager
- [x] Enable Multi-Factor Authentication (MFA)
- [ ] Use Amazon Cognito to manage access
- [ ] Enable AWS Organizations

# Which statement is not true about Server-side Encryption at Rest?

- [ ] Data is encrypted after being received by the server
- [x] Data is decrypted after being sent
- [ ] It is stored in an encrypted form thanks to a key (usually a data key)
- [ ] The encryption / decryption keys must be managed somewhere, and the server must have
access to it

# A developer wants to store credentials securely and rotate them automatically. Which service should be used for this, as opposed to encrypting large volumes of data?

- [ ] AWS KMS
- [ ] AWS IAM
- [ ] AWS Artifact
- [x] AWS Secrets Manager

# What is the primary purpose of AWS KMS in the context of security?

- [ ] Managing network security groups
- [ ] Storing user passwords for IAM users
- [x] Creating and managing encryption keys
- [ ] Auditing infrastructure spend

# Which is not a type of KMS Key?

- [x] Middle-man Managed Keys
- [ ] AWS Managed Keys
- [ ] AWS Owned Keys
- [ ] Customer Managed Keys

# Which pricing model is most suitable for a developer who needs to run a short-term, unpredictable testing workload for only a few hours?

- [ ] Savings Plans
- [ ] Reserved Instances
- [ ] Spot Instances
- [x] On-Demand Instances

# Which commitment-based pricing model provides the highest level of flexibility by covering compute usage across EC2, AWS Lambda, and AWS Fargate regardless of instance family or region?

- [ ] Standard Reserved Instances
- [ ] EC2 Instance Savings Plans
- [x] Compute Savings Plans
- [ ] Convertible Reserved Instances

# According to AWS AI case studies, what is typically the primary cause for the observed average monthly budget gap of 3,400−13,800?

- [ ] Rapid scaling of On-Demand instance counts
- [x] Invisible costs like uncleaned storage and unmodeled data transfer
- [ ] High premium charges for Enterprise Support plans
- [ ] Inaccurate pricing forecasts from AWS Cost Explorer

# According to the "Pay-as-you-go"principle, which of the following is considered a primary driver of S3 storage costs?

- [ ] IAM User count
- [x] Data Transfer OUT
- [ ] Instance Runtime
- [ ] Number of AWS accounts

# For non-customer-facing AI workloads like historical fraud scoring, which strategy is recommended to reduce compute costs by 60-70

- [ ] Utilizing Spot Instances for all inference tasks
- [ ] Enabling HNSW-PQ compression for vector storage
- [x] Using Batch Transform jobs instead of real-time endpoints
- [ ] Implementing automated instance scheduling for off-hours

# Which AWS tool allows you to visualize and forecast your monthly spend while grouping costs by service or linked accounts?

- [ ] AWS Budgets
- [ ] AWS Organizations
- [x] AWS Cost Explorer
- [ ] AWS CloudWatch

# Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?

- [ ] Amazon GuardDuty
- [ ] Amazon Detective
- [ ] AWS WAF
- [x] AWS ACM

# In a production RAG deployment, which specific technique can reduce annual vector storage costs from 75,000downtoapproximately10,000?

- [ ] HNSW-FP16 compression
- [x] HNSW-PQ compression
- [ ] Implementing lifecycle transitions to S3 Glacier
- [ ] Consolidating multiple OpenSearch clusters

# Which AWS pricing principle suggests that customers should "pay less by using more,"as seen in tiered S3 storage pricing?

- [ ] Economies of Scale
- [ ] Pay-as-you-go
- [ ] On-Demand Pricing
- [x] Volume Discounts

# When accessing AWS services like S3 or DynamoDB within the same region, which architectural pattern incurs both a per-hour service charge and a per-GB data processing charge?

- [ ] Pattern 1: Internet Gateway
- [x] Pattern 2: NAT Gateway
- [ ] Pattern 3: VPC Peering
- [ ] Pattern 4: Gateway Load Balancer

