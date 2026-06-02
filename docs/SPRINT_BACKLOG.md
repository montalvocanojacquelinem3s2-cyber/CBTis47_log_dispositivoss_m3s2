Sprint 1 Backlog

Project

CBTis47 Smart Home Management System

---

Sprint Goal

Develop the core functionality of the Smart Home Management System, including user authentication, smart device registration, device monitoring, and MongoDB Atlas integration to ensure a scalable and secure smart home infrastructure.

---

Sprint Parameters and Capacity Plan

Parameter| Value
Sprint Number| Sprint 1
Sprint Duration| 2 Weeks
Team Members| 5
Working Days| 10
Hours per Day| 4
Total Capacity| 200 Hours

Team Members

- Samantha Michelle Garcia Pulido
- Fatima Yocelin Ramírez López
- Jacqueline Montalvo Cano
- Juan Irving De La Cruz Zayas
- Axel Ivan Carrera Quezada

---

Selected Epics and User Stories

Epic 1: User Authentication and Access Control

US-SH-01 User Registration

Story Points: 3

User Story

As a new user, I want to create an account so that I can access the smart home management platform.

Acceptance Criteria

- User can register using username and password.
- User information is stored in MongoDB Atlas.
- Duplicate usernames are rejected.
- Registration confirmation is displayed.

---

US-SH-02 User Login

Story Points: 3

User Story

As a registered user, I want to log into the system so that I can manage and monitor my smart devices.

Acceptance Criteria

- User enters valid credentials.
- Authentication is verified successfully.
- Access is granted to the platform.
- Invalid credentials display an error message.

---

Epic 2: Smart Device Management

US-SH-03 Register Smart Devices

Story Points: 5

User Story

As a homeowner, I want to register smart devices so that they can be monitored and managed through the platform.

Acceptance Criteria

- Device name can be entered.
- Device type can be selected.
- Device location can be assigned.
- Device information is stored in MongoDB Atlas.

---

US-SH-04 Edit Device Information

Story Points: 3

User Story

As a homeowner, I want to update device information so that the system always reflects the current device configuration.

Acceptance Criteria

- Device information can be modified.
- Changes are saved correctly.
- Updated information is displayed immediately.
- Database records are updated successfully.

---

Epic 3: Device Monitoring

US-SH-05 Monitor Device Status

Story Points: 5

User Story

As a homeowner, I want to view the current status of all registered devices so that I can monitor my smart home environment.

Acceptance Criteria

- Device status is displayed.
- ON and OFF states are visible.
- Status updates are reflected in the database.
- Users can identify active devices.

---

US-SH-06 View Device Details

Story Points: 3

User Story

As a homeowner, I want to access detailed information about each device so that I can verify its configuration and settings.

Acceptance Criteria

- Device configuration is displayed.
- Location information is available.
- Device-specific attributes are shown.
- Data is retrieved from MongoDB Atlas.

---

Epic 4: MongoDB Atlas Integration

US-SH-07 Store BSON Documents

Story Points: 5

User Story

As a system administrator, I want smart device information stored as BSON documents so that the database remains scalable and flexible.

Acceptance Criteria

- BSON documents are created correctly.
- Embedded documents are supported.
- Device configurations are stored successfully.
- MongoDB Atlas connection works properly.

---

US-SH-08 Execute Device Queries

Story Points: 5

User Story

As a system administrator, I want to execute device queries so that I can analyze smart home activity and device usage.

Acceptance Criteria

- Active devices can be retrieved.
- Device categories can be counted.
- Aggregation queries work correctly.
- Results are accurate and complete.

---

Sprint Backlog Tasks

Task ID| Task Description| Related User Story
T-01| Create users collection schema| US-SH-01
T-02| Develop user registration module| US-SH-01
T-03| Develop authentication and login module| US-SH-02
T-04| Create devices collection structure| US-SH-03
T-05| Implement smart device registration| US-SH-03
T-06| Implement device update functionality| US-SH-04
T-07| Develop device monitoring dashboard| US-SH-05
T-08| Implement device detail visualization| US-SH-06
T-09| Configure MongoDB Atlas connection| US-SH-07
T-10| Create BSON document structures| US-SH-07
T-11| Develop aggregation queries| US-SH-08
T-12| Test authentication features| US-SH-01, US-SH-02
T-13| Test device management features| US-SH-03, US-SH-04
T-14| Test monitoring and query functionality| US-SH-05, US-SH-08
T-15| Review documentation and repository structure| All Stories

---

Sprint Deliverables

- User registration system.
- User authentication system.
- Smart device registration functionality.
- Device monitoring capabilities.
- MongoDB Atlas integration.
- BSON document implementation.
- Aggregation query examples.
- Updated GitHub repository documentation.

---

Definition of Done (DoD)

A user story will be considered completed when:

- Functionality is implemented.
- Code is uploaded to GitHub.
- MongoDB Atlas integration works correctly.
- Acceptance criteria are fulfilled.
- Documentation is updated.
- Team review has been completed.
- No critical errors remain unresolved.

---

Prepared by Team CBTis47 Smart Home Management System

Sprint 1 - MongoDB Smart Home Infrastructure Project
