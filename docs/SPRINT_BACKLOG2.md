# Sprint 2 Planning

## Purpose

The purpose of Sprint 2 is to continue the development of the Smart Home Management System by implementing the backend infrastructure, configuring database connectivity, creating and validating API services, generating and managing test data, improving system models and repository organization, and ensuring proper coordination among team members.

This sprint focuses on transforming the foundations established during Sprint 1 into a functional environment capable of supporting data management, system integration, and future application features. Through the implementation of server-side logic, MongoDB integration, testing activities, and project documentation, the team aims to establish a stable and scalable platform for subsequent development phases.

**Project:** Smart Home Management System  
**Sprint:** Sprint 2  
**Duration:** Second Academic Term (4 Weeks)  
**Development Team:** 5 Members  
**Total Capacity:** 640 Hours

---

# Sprint Goal

Develop the backend infrastructure of the Smart Home Management System by implementing server-side functionality, database integration, API services, data seeding, repository improvements, and project coordination.

At the end of this sprint, the team should have a functional backend environment connected to MongoDB Atlas, validated API endpoints, populated database collections, improved project documentation, and a repository structure prepared for future development phases.

---

# Sprint Parameters

| Parameter | Value |
|------------|---------|
| Sprint | Sprint 2 |
| Duration | Second Academic Term |
| Development Team | 5 Members |
| Product Owner | Defined by the Team |
| Scrum Master | Samantha Michelle Garcia Pulido |
| Project | Smart Home Management System |
| Main Technology | Java / Node.js |
| Database | MongoDB Atlas |
| Repository | GitHub |

---

# Capacity Plan

| Team Member | Weekly Hours | Sprint Hours |
|------------|-------------|-------------|
| Samantha Michelle Garcia Pulido | 26 h | 104 h |
| Fatima Yocelin Ramírez López | 28 h | 112 h |
| Jacqueline Montalvo Cano | 37 h | 148 h |
| Juan Irving De La Cruz Zayas | 37 h | 148 h |
| Axel Iván Carrera Quesada | 32 h | 128 h |

## Total Sprint Capacity

**640 Available Hours**

---

# Selected Epics & User Stories

## Epic 5 — Backend Development and API Integration

### User Story US-05

**As a developer**

**I want to implement the server architecture and API endpoints**

**So that Smart Home data can be managed through a centralized backend service.**

#### Acceptance Criteria

##### AC-01

Given the backend environment is configured

When the server is executed

Then requests must be processed correctly

And communication with MongoDB must be available.

##### AC-02

Given API endpoints are implemented

When requests are sent

Then device and user information must be stored and retrieved successfully.

##### AC-03

Given the API is operational

When validation tests are executed

Then responses must be returned in JSON format

And errors must be handled appropriately.

**Estimated Effort:** 220 Hours

---

## Epic 6 — Database Design, Data Seeding and Validation

### User Story US-06

**As a database administrator**

**I want to organize collections, generate seed data and improve system models**

**So that the Smart Home system contains reliable information for development and testing.**

#### Acceptance Criteria

##### AC-01

Given MongoDB collections exist

When seed data is generated

Then the database must contain representative Smart Home records.

##### AC-02

Given the system flowchart requires updates

When improvements are implemented

Then user registration, verification processes and new device structures must be documented.

##### AC-03

Given validation queries are implemented

When tests are executed

Then records must be retrieved correctly

And stored data must remain consistent.

**Estimated Effort:** 220 Hours

---

## Epic 7 — Repository Management and Scrum Coordination

### User Story US-07

**As a Scrum Team**

**I want to maintain repository organization, documentation and team coordination**

**So that project progress remains visible, traceable and easy to manage.**

#### Acceptance Criteria

##### AC-01

Given repository improvements are required

When files and folders are reorganized

Then project navigation must become easier.

##### AC-02

Given project documentation is updated

When README and WORKLOG are reviewed

Then all team activities must be recorded properly.

##### AC-03

Given sprint activities are executed

When progress is monitored

Then team coordination and task tracking must be documented.

**Estimated Effort:** 200 Hours

---

# Core Academic Operations

| ID | Academic Activity | Responsible Role | Team Member | Difficulty | Hours |
|----|-------------------|------------------|-------------|------------|-------|
| CAO-13 | Generate and rebuild more than 200 database seeds | Data Seeder | Axel Iván Carrera Quesada | Very High | 40 h |
| CAO-14 | Populate MongoDB collections with test data | Data Seeder | Axel Iván Carrera Quesada | High | 24 h |
| CAO-15 | Expand flowchart with user registration process | Data Modeler | Fatima Yocelin Ramírez López | Medium | 20 h |
| CAO-16 | Add validation and verification processes to flowchart | Data Modeler | Fatima Yocelin Ramírez López | Medium | 18 h |
| CAO-17 | Design new tables and structures for additional devices | Data Modeler | Fatima Yocelin Ramírez López | High | 24 h |
| CAO-18 | Develop server.js application logic | Backend Developer | Jacqueline Montalvo Cano | High | 28 h |
| CAO-19 | Configure package.json and project dependencies | Backend Developer | Jacqueline Montalvo Cano | Medium | 12 h |
| CAO-20 | Develop API endpoints for device registration and queries | Backend Developer | Jacqueline Montalvo Cano | High | 30 h |
| CAO-21 | Implement users collection integration in MongoDB | Database Administrator | Jacqueline Montalvo Cano | High | 18 h |
| CAO-22 | Create MongoDB queries folder and validation queries | Database Administrator | Jacqueline Montalvo Cano | High | 24 h |
| CAO-23 | Execute integration testing between FlutterFlow, Render and MongoDB | Backend Developer | Jacqueline Montalvo Cano | Very High | 20 h |
| CAO-24 | Improve repository structure and organization | Repository Manager | Juan Irving De La Cruz Zayas | Medium | 20 h |
| CAO-25 | Create new folders and organize project files | Repository Manager | Juan Irving De La Cruz Zayas | Medium | 18 h |
| CAO-26 | Improve README documentation | Repository Manager | Juan Irving De La Cruz Zayas | Medium | 12 h |
| CAO-27 | Create and maintain WORKLOG section | Repository Manager | Juan Irving De La Cruz Zayas | Medium | 16 h |
| CAO-28 | Improve repository descriptions and documentation | Repository Manager | Juan Irving De La Cruz Zayas | Low | 8 h |
| CAO-29 | Monitor sprint progress and team coordination | Scrum Master | Samantha Michelle Garcia Pulido | Medium | 24 h |
| CAO-30 | Facilitate communication between team members | Scrum Master | Samantha Michelle Garcia Pulido | Medium | 20 h |
| CAO-31 | Track task completion and sprint objectives | Scrum Master | Samantha Michelle Garcia Pulido | Medium | 20 h |
| CAO-32 | Review deliverables and project evidence | Scrum Master | Samantha Michelle Garcia Pulido | Medium | 16 h |

---

# Team Roles

| Team Member | Assigned Role |
|------------|---------------|
| Samantha Michelle Garcia Pulido | Scrum Master |
| Fatima Yocelin Ramírez López | Data Modeler / System Designer |
| Jacqueline Montalvo Cano | Database Administrator / Backend Developer |
| Juan Irving De La Cruz Zayas | Repository Manager |
| Axel Iván Carrera Quesada | Data Seeder |

---

# Definition of Done (DoD)

A User Story will only be considered completed when:

- All Acceptance Criteria have been fulfilled.
- Backend services operate correctly.
- API endpoints respond successfully.
- MongoDB integration has been validated.
- Test data has been generated and verified.
- Repository documentation has been updated.
- README and WORKLOG are complete.
- Diagrams and data structures reflect implemented features.
- Integration testing has been completed.
- Academic evidence has been collected.
- All deliverables have been uploaded to GitHub.
- The team agrees that the User Story is complete.

---

# Sprint Summary

| Metric | Value |
|----------|---------|
| Development Team Members | 5 |
| Average Hours per Member | 128 h |
| Total Sprint Capacity | 640 h |
| Selected Epics | 3 |
| User Stories | 3 |
| Core Academic Operations | 20 |
| Main Objective | Develop the backend infrastructure, integrate MongoDB, improve repository management, generate data seeds, and validate Smart Home system functionality. |

---

# Sprint Deliverables

- Functional server.js
- Configured package.json
- MongoDB Atlas Integration
- Users Collection
- Devices Collection
- MongoDB Queries Folder
- API Endpoints
- Integration Tests
- Expanded Flowchart
- New Data Structures
- 200+ Database Seeds
- Updated README
- WORKLOG Documentation
- GitHub Repository Improvements
- Sprint Evidence and Documentation

