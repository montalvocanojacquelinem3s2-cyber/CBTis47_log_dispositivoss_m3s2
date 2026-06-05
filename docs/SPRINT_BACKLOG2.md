# Sprint 2 Planning

**Project:** Smart Home Management System  
**Sprint:** Sprint 2  
**Duration:** Second Academic Term (4 Weeks)  
**Development Team:** 5 Members  
**Total Capacity:** 160 Hours

---

# Sprint Goal

Develop the core database structure of the Smart Home Management System by implementing MongoDB collections, performing CRUD operations, optimizing database performance using indexes, and documenting query analysis through performance audits.

At the end of this sprint, the team should have a functional MongoDB database structure, sample Smart Home data, operational CRUD functionalities, implemented indexes, and documented performance analysis that can support future application integration.

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
| Main Technology | Java |
| Database | MongoDB Atlas |
| Repository | GitHub |

---

# Capacity Plan

| Team Member | Available Hours |
|------------|------------------|
| Samantha Michelle Garcia Pulido | 26 h |
| Fatima Yocelin Ramírez López | 28 h |
| Jacqueline Montalvo Cano | 37 h |
| Juan Irving De La Cruz Zayas | 37 h |
| Axel Iván Carrera Quesada | 32 h |

## Total Sprint Capacity

**160 Available Hours**

---

# Selected Epics & User Stories

## Epic 5 — Database Collections Implementation

### User Story US-05

**As a developer**

**I want to create MongoDB collections for Smart Home entities**

**So that the system can store and organize information efficiently.**

#### Acceptance Criteria

##### AC-01

Given the database environment has been configured

When collections are created

Then Devices, Users, and Rooms collections must exist

And be accessible through MongoDB Atlas.

##### AC-02

Given the collections have been created

When validation is performed

Then the structure must support future application requirements

And documentation must describe each collection.

##### AC-03

Given sample data is required

When documents are inserted

Then each collection must contain representative Smart Home information

And data integrity must be maintained.

**Estimated Effort:** 35 Hours

---

## Epic 6 — CRUD Operations Development

### User Story US-06

**As a system administrator**

**I want to perform CRUD operations on Smart Home data**

**So that devices, rooms, and users can be managed effectively.**

#### Acceptance Criteria

##### AC-01

Given Smart Home data exists

When create operations are executed

Then new records must be inserted successfully.

##### AC-02

Given stored records exist

When read operations are executed

Then requested information must be returned correctly.

##### AC-03

Given existing records exist

When update and delete operations are executed

Then data must be modified or removed successfully

And operation results must be documented.

**Estimated Effort:** 40 Hours

---

## Epic 7 — Database Performance and Optimization

### User Story US-07

**As a developer**

**I want to create indexes and analyze query performance**

**So that database operations can be optimized.**

#### Acceptance Criteria

##### AC-01

Given large datasets may affect performance

When indexes are created using `createIndex()`

Then query execution time must improve.

##### AC-02

Given query performance needs evaluation

When `explain("executionStats")` is executed

Then execution statistics must be generated

And analyzed.

##### AC-03

Given optimization activities are completed

When results are documented

Then a performance comparison must be available

And stored in `docs/performance_audit.md`.

**Estimated Effort:** 45 Hours

---

## Epic 8 — Technical Documentation and Evidence

### User Story US-08

**As a team member**

**I want to document implementation evidence and optimization results**

**So that project progress can be evaluated and justified academically.**

#### Acceptance Criteria

##### AC-01

Given development activities are completed

When evidence is collected

Then screenshots and results must be organized.

##### AC-02

Given technical work has been performed

When documentation is updated

Then CRUD operations and performance results must be included.

##### AC-03

Given Sprint 2 concludes

When documentation is reviewed

Then all deliverables must be available

And uploaded to GitHub.

**Estimated Effort:** 20 Hours

---

# Core Academic Operations

| ID | Academic Activity | Responsible Role | Team Member | Difficulty | Hours |
|----|-------------------|------------------|-------------|------------|-------|
| CAO-13 | Create Devices collection | Database Administrator | Jacqueline Montalvo Cano | Medium | 8 h |
| CAO-14 | Create Users collection | Database Administrator | Jacqueline Montalvo Cano | Medium | 6 h |
| CAO-15 | Create Rooms collection | Database Administrator | Jacqueline Montalvo Cano | Medium | 6 h |
| CAO-16 | Insert Smart Home sample data | Data Seeder | Axel Iván Carrera Quesada | Medium | 8 h |
| CAO-17 | Generate sample datasets for Devices collection | Data Seeder | Axel Iván Carrera Quesada | Medium | 6 h |
| CAO-18 | Generate sample datasets for Users collection | Data Seeder | Axel Iván Carrera Quesada | Medium | 6 h |
| CAO-19 | Generate sample datasets for Rooms collection | Data Seeder | Axel Iván Carrera Quesada | Medium | 6 h |
| CAO-20 | Implement CRUD operations | Backend Support | Juan Irving De La Cruz Zayas | High | 12 h |
| CAO-21 | Test CRUD functionality | Backend Support | Juan Irving De La Cruz Zayas | Medium | 8 h |
| CAO-22 | Create MongoDB indexes using `createIndex()` | Database Administrator | Jacqueline Montalvo Cano | High | 10 h |
| CAO-23 | Execute `explain("executionStats")` analysis | Database Administrator | Jacqueline Montalvo Cano | High | 10 h |
| CAO-24 | Create `docs/performance_audit.md` | Scrum Master | Samantha Michelle Garcia Pulido | Medium | 8 h |
| CAO-25 | Sprint monitoring and Scrum activities | Scrum Master | Samantha Michelle Garcia Pulido | Medium | 8 h |
| CAO-26 | Database diagrams and documentation support | System Designer | Fatima Yocelin Ramírez López | Medium | 10 h |
| CAO-27 | CRUD workflow documentation and review | System Designer | Fatima Yocelin Ramírez López | Medium | 8 h |

---

# Team Roles

| Team Member | Assigned Role |
|------------|---------------|
| Samantha Michelle Garcia Pulido | Scrum Master |
| Fatima Yocelin Ramírez López | System Designer |
| Jacqueline Montalvo Cano | Database Administrator |
| Juan Irving De La Cruz Zayas | Repository Manager / Backend Support |
| Axel Iván Carrera Quesada | Data Seeder |

---

# Definition of Done (DoD)

- All Acceptance Criteria have been fulfilled.
- MongoDB collections have been created and validated.
- Sample Smart Home data has been inserted successfully.
- CRUD operations function correctly.
- Indexes have been implemented using `createIndex()`.
- Query analysis has been performed using `explain("executionStats")`.
- `docs/performance_audit.md` has been completed and uploaded.
- Documentation has been updated and reviewed.
- Academic evidence has been collected and organized.
- All deliverables have been uploaded to GitHub.
- No critical issues remain unresolved.
- The implementation contributes directly to the Sprint Goal.

---

# Sprint Summary

| Metric | Value |
|----------|---------|
| Development Team Members | 5 |
| Average Hours per Member | 32 h |
| Total Sprint Capacity | 160 h |
| Selected Epics | 4 |
| User Stories | 4 |
| Core Academic Operations | 15 |
| Main Objective | Implement MongoDB collections, CRUD operations, indexes, and performance optimization analysis |
