# Sprint 3 Planning

## Purpose

The purpose of Sprint 3 is to strengthen the reliability, security, and usability of the Smart Home Management System through backend improvements, data validation, integration testing, and project documentation updates.

This sprint focuses on improving the quality of the existing system by implementing security validations, verifying communication between system components, maintaining project documentation, and ensuring that all functionalities operate correctly within the Smart Home environment.

**Project:** Smart Home Management System  
**Sprint:** Sprint 3  
**Duration:** Third Academic Term (4 Weeks)  
**Development Team:** 5 Members  
**Total Capacity:** 32 Hours

---

# Sprint Goal

Improve the security, validation, and integration capabilities of the Smart Home Management System while maintaining project documentation and repository organization.

At the end of this sprint, the team should have a more secure backend, validated user inputs, verified communication between FlutterFlow, Render, and MongoDB Atlas, and updated documentation that reflects the progress achieved during the project.

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
| Samantha Michelle Garcia Pulido | 2 h | 8 h |
| Fatima Yocelin Ramírez López | 2 h | 8 h |
| Jacqueline Montalvo Cano | 2 h | 8 h |
| Juan Irving De La Cruz Zayas | 1 h | 4 h |
| Axel Iván Carrera Quesada | 1 h | 4 h |

## Total Sprint Capacity

**32 Available Hours**

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

**Estimated Effort:** 20 Hours

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

When project records are reviewed

Then all tasks must be documented correctly.

##### AC-03

Given repository maintenance activities are performed

When files and records are reviewed

Then project organization must remain clear and understandable.

**Estimated Effort:** 12 Hours

---

# Core Academic Operations

| ID | Academic Activity | Responsible Role | Team Member | Difficulty | Hours |
|----|-------------------|------------------|-------------|------------|-------|
| CAO-33 | Implement email validation rules | Backend Developer | Jacqueline Montalvo Cano | High | 2 h |
| CAO-34 | Implement password security validation | Backend Developer | Jacqueline Montalvo Cano | High | 2 h |
| CAO-35 | Implement inappropriate language validation | Backend Developer | Jacqueline Montalvo Cano | Medium | 1 h |
| CAO-36 | Improve validation logic in server.js | Backend Developer | Jacqueline Montalvo Cano | High | 1 h |
| CAO-37 | Verify registration and login functionality | Backend Developer | Jacqueline Montalvo Cano | Medium | 1 h |
| CAO-38 | Execute integration tests between FlutterFlow, Render and MongoDB Atlas | Backend Developer | Jacqueline Montalvo Cano | High | 1 h |
| CAO-39 | Create Sprint 1 Backlog documentation | System Designer | Fatima Yocelin Ramírez López | Medium | 4 h |
| CAO-40 | Review and update project planning records | System Designer | Fatima Yocelin Ramírez López | Medium | 4 h |
| CAO-41 | Correct database seed positioning | Data Seeder | Axel Iván Carrera Quesada | Low | 2 h |
| CAO-42 | Verify consistency of generated data | Data Seeder | Axel Iván Carrera Quesada | Low | 2 h |
| CAO-43 | Develop and update Product Backlog documentation | Repository Manager | Juan Irving De La Cruz Zayas | Medium | 2 h |
| CAO-44 | Review repository organization and project records | Repository Manager | Juan Irving De La Cruz Zayas | Low | 2 h |
| CAO-45 | Monitor sprint progress and team communication | Scrum Master | Samantha Michelle Garcia Pulido | Medium | 3 h |
| CAO-46 | Coordinate team activities during the sprint | Scrum Master | Samantha Michelle Garcia Pulido | Medium | 2 h |
| CAO-47 | Review deliverables and project evidence | Scrum Master | Samantha Michelle Garcia Pulido | Medium | 2 h |
| CAO-48 | Verify completion of sprint objectives | Scrum Master | Samantha Michelle Garcia Pulido | Medium | 1 h |

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
- Email validation operates correctly.
- Password validation operates correctly.
- Restricted language validation operates correctly.
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
| Average Hours per Member | 6.4 h |
| Total Sprint Capacity | 32 h |
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




