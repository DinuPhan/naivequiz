---
title: Module 8: Databases
tags: []
domains: ["AWS"]
---

# Which configuration parameters can you adjust to improve write performance against a DynamoDB table? (Select TWO.)

- [x] Increase write capacity units (WCU)
- [ ] Increase read capacity units
- [x] Enable DynamoDB Auto Scaling
- [ ] Decrease write capacity units

# Which of the following statements is true regarding nonrelational databases?

- [x] You don’t have to define all the types of data that a table can store before adding data to it.
- [ ] No primary key is required.
- [ ] You can’t store data with a fixed structure.
- [ ] You can create only one table.

# Which Redshift feature can analyze structured data stored in S3?

- [ ] Amazon Athena
- [ ] Redshift S3
- [ ] Amazon RDS
- [x] Redshift Spectrum

# Which of the following is used to run analytic queries against petabytes of data?

- [ ] Amazon Relational Database Service
- [ ] Amazon Aurora
- [ ] Amazon DynamoDB
- [x] Amazon Redshift

# Which of the following Structured Query Language (SQL) statements can you use to write data to a relational database table?

- [ ] CREATE
- [ ] WRITE
- [x] INSERT
- [ ] QUERY

# Which of the following are the recommended resources to be deployed in the Amazon VPC private subnet?

- [ ] Internet Gateways
- [ ] Bastion Hosts
- [ ] NAT Gateways
- [x] Database Servers

# Which of the following is a MySQL and PostgreSQL-compatible relational database that runs five times faster than standard MySQL databases and three times faster than standard PostgreSQL databases?

- [x] Amazon Aurora
- [ ] Amazon Redshift
- [ ] Amazon DynamoDB
- [ ] Amazon Relational Database Service

# What’s the maximum amount of data you can store in a Redshift cluster when using dense storage nodes?

- [ ] 2 TB
- [ ] 326 TB
- [ ] 236 TB
- [x] 2 PB

# What’s the best and simplest way to increase the reliability of an RDS database instance?

- [ ] Duplicate the database in a second AWS Region.
- [ ] Choose the Aurora database engine when you configure your instance.
- [x] Enable Multi-AZ.
- [ ] Increase the available IOPS.

# Which of the following would be appropriate to use for a primary key in a DynamoDB table that stores a customer list?

- [ ] The customer’s phone number
- [ ] The customer’s full name
- [x] A randomly generated customer ID number
- [ ] The customer’s city

# What two databases is Amazon Aurora compatible with? (Select TWO.)

- [x] MySQL
- [ ] Microsoft SQL Server
- [x] PostgreSQL
- [ ] MariaDB

# Which of the following features of Relational Database Service (RDS) can prevent data loss in the event of an Availability Zone failure? (Select TWO.)

- [x] Snapshots
- [x] Multi-AZ
- [ ] IOPS
- [ ] Read replicas

# Which type of Redshift node uses magnetic storage?

- [ ] Dense storage
- [x] Dense compute
- [ ] Cost-optimized
- [ ] Dense memory

# Which DynamoDB operation is the most read-intensive?

- [ ] Update
- [ ] Write
- [ ] Query
- [x] Scan

# What do new Relational Database Service (RDS) instances use for database storage?

- [x] Elastic Block Store (EBS) volumes
- [ ] Snapshots
- [ ] Magnetic storage
- [ ] Instance volumes

# What is the minimum monthly availability for DynamoDB in a single Region?

- [x] 99.99 percent
- [ ] 99.9 percent
- [ ] 99.95 percent
- [ ] 99.0 percent

# Which of the following features of Amazon RDS allows for better availability of databases?

- [ ] Read Replicas
- [x] Multi-AZ
- [ ] VPC Peering
- [ ] Data encryption

# What is true regarding a DynamoDB partition? (Select TWO.)

- [ ] It’s stored within a table.
- [x] It’s replicated across multiple Availability Zones.
- [x] It’s backed by solid-state drives.
- [ ] It’s a way to uniquely identify an item in a table

# Which of the following Relational Database Service (RDS) features can help you achieve a monthly availability of 99.95 percent?

- [ ] Read replicas
- [ ] Horizontal scaling
- [ ] Point-in-time recovery
- [x] Multi-AZ

# What is the term for a relational database that stores large amounts of structured data from a variety of sources for reporting and analysis?

- [ ] Data storehouse
- [ ] Dense storage node
- [ ] Report cluster
- [x] Data warehouse

# Which of the following services allows you to purchase reserved instances to save money?

- [ ] AWS Fargate
- [ ] Lambda
- [x] Amazon Relational Database Service (RDS)
- [ ] S3

# Which of the following will provide the most reliable and scalable relational database experience on AWS?

- [ ] DynamoDB
- [x] Relational Database Service (RDS)
- [ ] Running a database on an EC2 instance
- [ ] Redshift

# Which of the following is a key-value and document database?

- [x] Amazon DynamoDB
- [ ] Amazon Redshift
- [ ] Amazon Relational Database Service
- [ ] Amazon Aurora

# Which of the following would be a valid endpoint your developers could use to access a particular Relational Database Service instance you’re running in the Northern Virginia Region?

- [ ] rds.amazonaws.com.us-east-1
- [ ] ecs.eu-west-3.amazonaws.com
- [ ] us-east-1.amazonaws.com.rds
- [x] rds.us-east-1.amazonaws.com

# Which RDS database engine offers automatically expanding database storage up to 64 TB?

- [ ] Microsoft SQL Server
- [ ] Oracle
- [x] Amazon Aurora
- [ ] Amazon Athena

# What is a no-SQL database?

- [ ] A relational database with primary keys
- [ ] A nonrelational database without primary keys
- [x] A schemaless nonrelational database
- [ ] A schemaless relational database

# Which of the following are database engine options for Amazon Relational Database Service (RDS)? (Select TWO.)

- [ ] Redis
- [ ] DynamoDB
- [x] Amazon Aurora
- [x] PostgreSQL

# Which type of database stores data in columns and rows?

- [x] Relational
- [ ] Key-value store
- [ ] Document
- [ ] Nonrelational

# Your company wants to move an existing Oracle database to the AWS Cloud. Which of the following services can help facilitate this move?

- [x] AWS Database Migration Service
- [ ] AWS Inspector
- [ ] AWS Trusted Advisor
- [ ] AWS VM Migration Service

# Which of the following statements is true regarding a DynamoDB table?

- [ ] Items in a table can have duplicate values for the primary key.
- [ ] When you create a table, you must define the maximum number of items that it can store.
- [x] Items in a table don’t have to have all the same attributes.
- [ ] It can store only one data type.

