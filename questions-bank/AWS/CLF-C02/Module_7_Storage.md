---
title: Module 7: Storage
tags: []
domains: ["AWS"]
---

# Which of the following Amazon EBS volumes has the highest performance?

- [ ] Cold HDD
- [ ] Throughput-Optimized
- [ ] General purpose SSD
- [x] Provisioned IOPS SSD

# Which storage is a secure, durable, and extremely low-cost cloud storage service for data archiving and long-term backup?

- [ ] Amazon S3
- [ ] Amazon EBS
- [x] Glacier
- [ ] Amazon EFS

# Your budget-conscious organization has a 5 TB database file it needs to retain off-site for at least 5 years. In the event the organization needs to access the database, it must be accessible within 8 hours. Which cloud storage option should you recommend, and why? (Select TWO.)

- [x] Glacier is the most cost effective.
- [ ] S3 doesn’t support object sizes greater than 4 TB.
- [ ] S3 has the most durable storage.
- [x] S3 has the fastest retrieval times.

# What is Amazon Athena?

- [ ] A NoSQL database engine
- [ ] A Greece-based Amazon Direct Connect service partner
- [ ] A service that permits processing and analyzing of real-time video and data streams
- [x] A service that permits queries against data stored in Amazon S3

# Data object that is accessed less frequently, but requires rapid access when needed should be stored in

- [ ] Glacier
- [ ] S3 Intelligent-Tiering
- [ ] S3 Standard
- [x] S3 Standard-IA

# Which types of AWS Storage Gateway let you connect your servers to block storage using the iSCSI protocol? (Select TWO.)

- [ ] File gateway
- [x] Volume gateway
- [ ] Cached gateway
- [x] Tape gateway

# You’re hosting a static website on S3. Your web assets are stored under the Standard storage class. Which of the following is true regarding your site?

- [x] You’re responsible for S3 charges.
- [ ] You’re charged for any compute power used to host the site.
- [ ] Someone may modify the content of your site without authorization.
- [ ] An Availability Zone outage may bring down the site

# Which of the following is true regarding static websites hosted in S3?

- [ ] A website hosted on S3 is stored in multiple Regions.
- [ ] Anyone can modify the content.
- [ ] You must use a custom domain name.
- [x] The content served is not encrypted in transit.

# Which of the following AWS services are not likely to benefit from Amazon edge locations? (Select TWO.)

- [ ] CloudFront
- [x] Elastic Block Store (EBS)
- [ ] EC2 load balancers
- [x] RDS

# Which of the following might AWS do after receiving a damaged Snowball device from a customer?

- [ ] Copy the customer’s data to S3
- [ ] Copy the customer’s data to Glacier
- [x] Securely erase the customer’s data from the device
- [ ] Replace the Trusted Platform Module (TPM) chip

# Which storage is built to store and retrieve any amount of data from anywhere?

- [ ] Amazon EBS
- [x] Amazon S3
- [ ] Glacier
- [ ] Amazon EFS

# You’ve created a static website hosted on S3 and given potential customers the URL that consists of words and numbers. They’re complaining that it’s too hard to type in. How can you come up with a friendlier URL?

- [ ] Re-create the bucket in a different Region.
- [ ] Re-create the bucket using only words in the name.
- [ ] Re-create the bucket using only numbers in the name.
- [x] Use a custom domain name.

# You’re hosting a static website on S3. Your web assets are stored in the US East 1 Region in the bucket named mygreatwebsite. What is the URL of the website?

- [ ] http://mygreatwebsite.s3.amazonaws.com
- [ ] http://mygreatwebsite.s3-us-east-1.amazonaws.com
- [x] http://mygreatwebsite.s3-website-us-east-1.amazonaws.com
- [ ] http://mygreatwebsite.s3-website-us-east.amazonaws.com

# Which of the following are true regarding the AWS Storage Gateway — volume gateway configuration? (Select THREE.)

- [x] Cached volumes can be up to 32 TB in size.
- [x] Cached volumes locally store only a frequently used subset of data.
- [ ] Cached volumes asynchronously back up data to S3 as EBS snapshots
- [ ] Stored volumes can be up to 32 TB in size.
- [x] Stored volumes asynchronously back up data to S3 as EBS snapshots.

# Which Glacier retrieval option generally takes 3 to 5 hours to complete?

- [ ] Bulk
- [ ] Provisioned
- [x] Standard
- [ ] Expedited

# Which of the following trigger an API action? (Select TWO.)

- [ ] Configuring the AWS Command Line Interface (CLI)
- [ ] Logging into the AWS Management Console
- [x] Viewing an S3 bucket from the AWS Management Console
- [x] Listing IAM users from the AWS Command Line Interface (CLI)

# When trying to create an S3 bucket named documents, AWS informs you that the bucket name is already in use. What should you do in order to create a bucket?

- [x] Use a globally unique bucket name
- [ ] Use a different storage class.
- [ ] Use a different region.
- [ ] Use a shorter name.
- [ ] Use a longer name

# Which of the following describes an EBS volume?

- [x] A virtualized partition of a physical storage drive that’s not directly connected to the EC2 instance it’s associated with
- [ ] A storage volume that’s encrypted for greater security
- [ ] A software stack archive packaged to make it easy to copy and deploy to an EC2 instance
- [ ] A virtualized partition of a physical storage drive that’s directly connected to the EC2 instance it’s associated with

# Which of the following are security features of AWS Snowball? (Select TWO.)

- [x] It uses a Trusted Platform Module (TPM) chip
- [ ] It enforces NFS encryption
- [x] It enforces encryption at rest.
- [ ] It has tamper-resistant network ports.

# Where does AWS Storage Gateway primarily store data?

- [x] S3 buckets
- [ ] EBS snapshots
- [ ] EBS volumes
- [ ] Glacier vaults

# Which of the following actions can you perform from the S3 Glacier service console?

- [x] Create a vault
- [ ] Delete a bucket
- [ ] Delete an archive
- [ ] Retrieve an archive

# Which storage is implemented as a shared file system that uses the Network File System (NFS) protocol?

- [ ] Amazon S3
- [x] Amazon EFS
- [ ] Amazon EBS
- [ ] Glacier

# What methods can be used to grant anonymous access to an object in S3? (Select TWO.)

- [ ] User policies
- [x] Bucket policies
- [ ] Security groups
- [x] Access control lists

# What are the major differences between Simple Storage Service (S3) and Elastic Block Store (EBS)? (Select TWO.)

- [ ] EBS stores snapshots
- [x] EBS stores volumes.
- [ ] EBS stores objects.
- [x] S3 stores objects.

# Which of the following can you use to transfer data to AWS Snowball from a Windows machine without writing any code?

- [ ] iSCSI
- [ ] The S3 SDK Adapter for Snowball
- [ ] SMB
- [x] The Snowball Client

# Which tasks can S3 object life cycle configurations perform automatically? (Select THREE.)

- [x] Deleting old object versions
- [ ] Moving objects to an EBS volume
- [ ] Deleting old buckets
- [x] Deleting old objects
- [x] Moving objects to Glacier

# Which of the following is an example of a static website?

- [ ] A web-based email application
- [x] A website hosted on S3
- [ ] A WordPress blog
- [ ] A popular social media website

# Which S3 storage classes are most cost-effective for infrequently accessed data that can’t be easily replaced? (Select TWO.)

- [ ] INTELLIGENT_TIERING
- [ ] STANDARD
- [x] GLACIER
- [ ] ONEZONE_IA
- [x] STANDARD_IA

# What’s the minimum size for a Glacier archive?

- [ ] 40 TB
- [ ] 0 bytes
- [x] 1 byte
- [ ] 5 TB

# Which storage provides persistent block storage volumes for use with Amazon EC2 instances?

- [ ] Amazon EFS
- [ ] Glacier
- [ ] Amazon S3
- [x] Amazon EBS

# What’s the most data you can store on a single Snowball device?

- [ ] 42 TB
- [ ] 80 TB
- [x] 72 TB
- [ ] 50 TB

# Which of the following features of S3 improve the security of data you store in an S3 bucket? (Select TWO.)

- [ ] S3 removes public objects by default.
- [x] Objects in S3 are not public by default
- [ ] All objects are readable by all AWS users by default.
- [x] By default, S3 removes ACLs that allow public read access to objects.

# Which of the following AWS object storage services offers the lowest ongoing charges, but at the cost of some convenience?

- [ ] Simple Storage Service (S3)
- [x] Glacier
- [ ] Elastic Block Store (EBS)
- [ ] Storage Gateway

# You need an easy way to transfer files from a server in your data center to S3 without having to install any third-party software. Which of the following services and storage protocols could you use? (Select THREE.)

- [x] AWS Storage Gateway—file gateway
- [x] iSCSI
- [ ] The AWS CLI
- [x] AWS Storage Gateway—volume gateway

# Which of the following is required to enable S3 static website hosting on a bucket?

- [ ] Make all objects in the bucket public.
- [ ] Enable object versioning.
- [x] Enable bucket hosting in the S3 service console
- [ ] Disable default encryption.

