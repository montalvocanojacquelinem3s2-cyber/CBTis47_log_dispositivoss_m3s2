# Sprint 3 Planning

## Purpose

The purpose of Sprint 3 is to strengthen the reliability, security, and usability of the Smart Home Management System through the implementation of advanced validations, backend improvements, system integration testing, and project documentation updates.

This sprint focuses on improving the quality of the existing system by validating user information, enhancing communication between system components, maintaining project documentation, and ensuring that all implemented functionalities operate correctly within the Smart Home environment.

**Project:** Smart Home Management System  
**Sprint:** Sprint 3  
**Duration:** Third Academic Term (4 Weeks)  
**Development Team:** 5 Members  
**Total Capacity:** 640 Hours

---

# Sprint Goal

Improve the security, validation, and integration capabilities of the Smart Home Management System while maintaining project documentation, backlog management, and repository organization.

At the end of this sprint, the team should have a more secure backend, validated user inputs, improved communication between FlutterFlow, Render, and MongoDB Atlas, and updated project documentation that reflects the work completed during the development cycle.

---

# Sprint Parameters

| Parameter | Value |
|------------|---------|
| Sprint | Sprint 3 |
| Duration | Third Academic Term |
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

## Epic 8 — Security, Validation and System Integration

### User Story US-08

**As a system administrator**

**I want to validate user and device information before storing it**

**So that the Smart Home system maintains secure and reliable data.**

#### Acceptance Criteria

##### AC-01

Given a user enters an email address

When the registration or login process is executed

Then the system must verify that the email format is valid

And display an appropriate error message when necessary.

##### AC-02

Given a user creates a password

When the password is validated

Then it must contain at least eight characters

And include both letters and numbers.

##### AC-03

Given a user submits device information

When restricted words are detected

Then the system must reject the request

And notify the user appropriately.

##### AC-04

Given FlutterFlow, Render, and MongoDB Atlas are connected

When integration tests are executed

Then information must be transferred successfully between all services.

**Estimated Effort:** 360 Hours

---

## Epic 9 — Documentation, Backlog Management and Project Maintenance

### User Story US-09

**As a Scrum Team**

**I want to maintain project documentation, backlog records, repository structure, and development evidence**

**So that project progress remains organized and traceable throughout the development process.**

#### Acceptance Criteria

##### AC-01

Given sprint activities are completed

When documentation is updated

Then all evidence must be stored and accessible.

##### AC-02

Given backlog management activities are required

When the Product Backlog and Sprint Backlog are reviewed

Then all project tasks must be documented correctly.

##### AC-03

Given repository maintenance activities are performed

When files and records are reviewed

Then project organization must remain clear and understandable.

**Estimated Effort:** 280 Hours

---

# Core Academic Operations

| ID | Academic Activity | Responsible Role | Team Member | Difficulty |
|----|-------------------|------------------|-------------|------------|
| CAO-33 | Implement email validation rules | Backend Developer | Jacqueline Montalvo Cano | High |
| CAO-34 | Implement password security validation | Backend Developer | Jacqueline Montalvo Cano | High |
| CAO-35 | Implement inappropriate language validation | Backend Developer | Jacqueline Montalvo Cano | High |
| CAO-36 | Centralize validations inside server.js | Backend Developer | Jacqueline Montalvo Cano | High |
| CAO-37 | Verify user registration process | Backend Developer | Jacqueline Montalvo Cano | Medium |
| CAO-38 | Verify login process | Backend Developer | Jacqueline Montalvo Cano | Medium |
| CAO-39 | Execute integration testing between FlutterFlow, Render and MongoDB Atlas | Backend Developer | Jacqueline Montalvo Cano | High |
| CAO-40 | Validate device storage in MongoDB | Database Administrator | Jacqueline Montalvo Cano | Medium |
| CAO-41 | Create Sprint 1 Backlog documentation | System Designer | Fatima Yocelin Ramírez López | Medium |
| CAO-42 | Review and update project planning records | System Designer | Fatima Yocelin Ramírez López | Medium |
| CAO-43 | Correct database seed positioning | Data Seeder | Axel Iván Carrera Quesada | Low |
| CAO-44 | Verify consistency of generated data | Data Seeder | Axel Iván Carrera Quesada | Low |
| CAO-45 | Develop Product Backlog documentation | Repository Manager | Juan Irving De La Cruz Zayas | Medium |
| CAO-46 | Review repository organization | Repository Manager | Juan Irving De La Cruz Zayas | Low |
| CAO-47 | Monitor sprint progress and team communication | Scrum Master | Samantha Michelle Garcia Pulido | Medium |
| CAO-48 | Review team deliverables and evidence | Scrum Master | Samantha Michelle Garcia Pulido | Medium |

---

# Team Roles

| Team Member | Assigned Role |
|------------|---------------|
| Samantha Michelle Garcia Pulido | Scrum Master |
| Fatima Yocelin Ramírez López | System Designer |
| Jacqueline Montalvo Cano | Database Administrator / Backend Developer |
| Juan Irving De La Cruz Zayas | Repository Manager |
| Axel Iván Carrera Quesada | Data Seeder |

---

# Definition of Done (DoD)

A User Story will only be considered completed when:

- All Acceptance Criteria have been fulfilled.
- Email validations operate correctly.
- Password validations operate correctly.
- Restricted language validations operate correctly.
- Backend services execute without critical errors.
- Integration between FlutterFlow, Render, and MongoDB Atlas has been verified.
- Product Backlog and Sprint documentation have been updated.
- Project evidence has been collected and organized.
- Repository documentation has been reviewed.
- All deliverables have been uploaded to GitHub.
- The team agrees that the User Story is complete.

---

# Sprint Summary

| Metric | Value |
|----------|---------|
| Development Team Members | 5 |
| Average Hours per Member | 128 h |
| Total Sprint Capacity | 640 h |
| Selected Epics | 2 |
| User Stories | 2 |
| Core Academic Operations | 16 |
| Main Objective | Improve system security, data validation, integration testing, and project documentation. |

---

# Sprint Deliverables

- Email Validation System
- Password Security Validation
- Restricted Language Detection
- Updated server.js
- User Registration Validation
- Login Validation
- FlutterFlow Integration Verification
- Render API Validation
- MongoDB Atlas Validation
- Sprint 1 Backlog Documentation
- Updated Product Backlog
- Repository Maintenance
- Project Evidence Documentation
- Sprint Review Documentation
