# Product Goal

Create a Smart Home management system capable of storing, organizing, and monitoring information from smart devices and users in a reliable, secure, and efficient way.

---

# Product Backlog

| ID | Epic | User Story | Acceptance Criteria | Priority |
|----|------|-------------|---------------------|----------|
| PB-01 | Database Management | As a system administrator, I want to create a database to store Smart Home information, so that all project data can be organized efficiently. | - The database must be created successfully.<br>- The database must support multiple collections.<br>- The system must allow device and user data storage.<br>- The database structure must be accessible for future queries. | High |
| PB-02 | Device Management | As a Smart Home owner, I want to register smart devices, so that I can monitor their status and functionality. | - A `devices` collection must exist.<br>- Each device must contain a unique `deviceId`.<br>- The system must store brand, model, and location.<br>- Devices must include online status information.<br>- Device records must be stored correctly. | High |
| PB-03 | User Management | As a system administrator, I want to register users, so that access to the platform can be controlled securely. | - A `users` collection must exist.<br>- Each user must contain email and password fields.<br>- User data must be stored correctly.<br>- Duplicate users should not be allowed.<br>- User information must be searchable. | High |
| PB-04 | Test Data Insertion | As a developer, I want to insert test documents into collections, so that the database behavior can be validated correctly. | - Test documents must exist in `devices` and `users` collections.<br>- Documents must contain valid information.<br>- Test data must be searchable.<br>- Invalid documents should generate errors. | High |
| PB-05 | MongoDB Query Operations | As a system user, I want to execute MongoDB queries, so that I can retrieve device information efficiently. | - Queries must return valid results.<br>- Devices must be searchable by brand, status, and location.<br>- Queries must support filtering conditions.<br>- Empty searches should return empty results. | High |
| PB-06 | FindOne Operations | As an administrator, I want to retrieve specific devices using `findOne()`, so that individual device information can be accessed easily. | - Queries must return only one document.<br>- Queries must work using `_id`.<br>- Invalid ObjectIds should generate errors.<br>- Existing devices must be retrievable. | Medium |
| PB-07 | Online Device Monitoring | As a Smart Home user, I want to monitor connected devices, so that I can identify active devices in real time. | - Devices must be filtered using `online: true`.<br>- Only online devices should be displayed.<br>- Offline devices should not appear in results.<br>- Queries must support real-time monitoring. | Medium |
| PB-08 | Project Organization | As a developer, I want to organize MongoDB queries into separate files, so that the project structure remains clean and maintainable. | - Query files must use `.mongodb` extension.<br>- Queries must be separated by category.<br>- Files must contain descriptive comments.<br>- Project folders must remain organized. | Medium |
| PB-09 | Documentation | As a developer, I want to document queries and database behavior, so that the project can be understood easily. | - Documentation must include query examples.<br>- Documentation must contain query results.<br>- Documentation must use Markdown format.<br>- Explanations must be clear and structured. | Medium |
| PB-10 | Database Modeling | As a developer, I want to create a database diagram, so that the structure of the Smart Home system can be visualized clearly. | - The diagram must include entities.<br>- The diagram must represent relationships.<br>- Attributes must be displayed correctly.<br>- The model must reflect the real database structure. | Medium |
| PB-11 | GitHub Repository | As a developer, I want to upload the project to GitHub, so that the repository can be shared and version controlled. | - The repository must contain documentation.<br>- The repository must include `.mongodb` files.<br>- The repository must include a `README.md` file.<br>- The repository structure must be organized. | High |
| PB-12 | System Screenshots | As a developer, I want to upload screenshots of the system, so that project functionality can be demonstrated visually. | - Screenshots must display collections.<br>- Screenshots must display query execution.<br>- Images must be clear and readable.<br>- Screenshots must be uploaded to GitHub. | Low |
| PB-13 | Scrum Documentation | As a Scrum team member, I want to create Scrum documentation, so that project planning and progress can be organized properly. | - Documentation must include the Product Goal.<br>- Documentation must include the Product Backlog.<br>- Documentation must include Sprint Backlog information.<br>- Documentation must include Increment evidence. | Medium |
| PB-14 | Functional Testing | As a developer, I want to create Gherkin scenarios, so that the expected system behavior can be validated correctly. | - Gherkin scenarios must use Given/When/Then syntax.<br>- Each important functionality must include at least one test scenario.<br>- Negative test cases must exist.<br>- Error scenarios must be validated. | Medium |

---

# Gherkin Scenarios

---

# Epic 01: Database Management

### Description
This epic focuses on creating and configuring the Smart Home database structure to support multiple collections and reliable data storage.

```gherkin
Feature: Database Management

Scenario: Create database successfully

Given the system configuration is valid
And MongoDB Atlas is available
When the administrator creates the Smart Home database
Then the database must be available successfully
And multiple collections must be supported

Scenario: Create database with invalid credentials

Given the database credentials are incorrect
When the administrator attempts to connect
Then the connection must fail
But the system must display an error message
```

---

# Epic 02: Device Management

### Description
This epic manages the registration and storage of smart devices inside the Smart Home system.

```gherkin
Feature: Device Management

Scenario: Register smart device successfully

Given the devices collection exists
And the database connection is active
When a new smart device is inserted
Then the document must be stored correctly
And the device must contain a unique deviceId

Scenario: Register device without required fields

Given the devices collection exists
When a device is inserted without deviceId
Then the insertion must fail
But the database connection should remain active
```

---

# Epic 03: User Management

### Description
This epic handles user registration and access management for the Smart Home platform.

```gherkin
Feature: User Management

Scenario: Register user successfully

Given the users collection exists
When a new user is inserted
Then the user document must be stored correctly
And the user information must be searchable

Scenario: Register user without password

Given the users collection exists
When a user is inserted without password
Then the insertion should fail
But the system must continue running correctly
```

---

# Epic 04: Test Data Insertion

### Description
This epic validates database functionality using test documents and sample records.

```gherkin
Feature: Test Data Insertion

Scenario: Insert test data into collections

Given the collections are created
When test documents are inserted
Then the collections must contain valid data
And the documents must be searchable

Scenario: Insert invalid test data

Given the collections are created
When invalid documents are inserted
Then MongoDB should reject the operation
But the database must remain stable
```

---

# Epic 05: MongoDB Query Operations

### Description
This epic allows users to execute MongoDB queries for retrieving Smart Home information.

```gherkin
Feature: MongoDB Query Operations

Scenario: Find devices by brand

Given there are registered devices
When the query db.devices.find({ brand: "LG" }) is executed
Then matching devices must be returned
And the query results must be displayed correctly

Scenario: Search non-existing brand

Given there are registered devices
When the query db.devices.find({ brand: "Nokia" }) is executed
Then the result must be empty
But the query execution must finish successfully
```

---

# Epic 06: FindOne Operations

### Description
This epic retrieves individual device information using MongoDB `findOne()` operations.

```gherkin
Feature: FindOne Operations

Scenario: Find device by ObjectId

Given there are registered devices
When db.devices.findOne({ _id: ObjectId("69efc4848a2a3959dbea7b81") }) is executed
Then one document must be returned
And the document information must be displayed correctly

Scenario: Find device with invalid ObjectId

Given there are registered devices
When db.devices.findOne({ _id: ObjectId("123") }) is executed
Then MongoDB must generate an ObjectId error
But the database connection must remain active
```

---

# Epic 07: Online Device Monitoring

### Description
This epic monitors connected Smart Home devices and identifies active devices in real time.

```gherkin
Feature: Online Device Monitoring

Scenario: Get online devices

Given there are active devices
When db.devices.find({ online: true }) is executed
Then only online devices must be displayed
And offline devices must not appear in results

Scenario: Query online devices in empty collection

Given the devices collection is empty
When db.devices.find({ online: true }) is executed
Then no documents should be returned
But the query execution must finish successfully
```

---

# Epic 08: Project Organization

### Description
This epic organizes MongoDB query files and project structure for better maintainability.

```gherkin
Feature: Project Organization

Scenario: Organize MongoDB files correctly

Given the project repository exists
When .mongodb files are created
Then the queries must be separated by category
And the files must contain descriptive comments

Scenario: Missing query files

Given the repository exists
When query files are not uploaded
Then the project structure should be incomplete
But the repository must remain accessible
```

---

# Epic 09: Documentation

### Description
This epic documents database behavior, query execution, and project structure using Markdown.

```gherkin
Feature: Documentation

Scenario: Create Markdown documentation

Given the project is completed
When the documentation is written
Then the README.md file must explain the project
And query examples must be included

Scenario: Documentation without query examples

Given the documentation exists
When the reviewer checks the README.md
Then the documentation should be considered incomplete
But the repository should remain available
```

---

# Epic 10: Database Modeling

### Description
This epic creates a visual representation of the Smart Home database structure and relationships.

```gherkin
Feature: Database Modeling

Scenario: Create entity relationship diagram

Given the database structure is defined
When the diagram is created
Then entities and attributes must be represented
And relationships must be visible

Scenario: Diagram without relationships

Given the diagram exists
When relationships are missing
Then the model should be considered incomplete
But the database structure should remain functional
```

---

# Epic 11: GitHub Repository

### Description
This epic manages the upload and organization of the project repository on GitHub.

```gherkin
Feature: GitHub Repository

Scenario: Upload project to GitHub

Given the repository exists
When project files are uploaded
Then the repository must contain all documentation and queries
And the repository structure must remain organized

Scenario: Repository without README file

Given the repository exists
When the reviewer checks the files
Then the project should be marked as incomplete
But the repository should still be accessible
```

---

# Epic 12: System Screenshots

### Description
This epic provides visual evidence of database collections, queries, and project functionality.

```gherkin
Feature: System Screenshots

Scenario: Upload MongoDB screenshots

Given MongoDB Compass contains data
When screenshots are added to the repository
Then the images must show collections and queries
And the screenshots must be readable

Scenario: Missing screenshots

Given the repository exists
When screenshots are not uploaded
Then the evidence section should be incomplete
But the repository must remain available
```

---

# Epic 13: Scrum Documentation

### Description
This epic organizes Scrum artifacts and project planning documentation.

```gherkin
Feature: Scrum Documentation

Scenario: Create Scrum documentation successfully

Given the Scrum process is defined
When the Product Backlog and Sprint Backlog are documented
Then the Scrum documentation must be complete
And the Product Goal must be included

Scenario: Missing Sprint Backlog

Given the Scrum documentation exists
When the Sprint Backlog section is missing
Then the documentation should be incomplete
But the remaining documentation must still be accessible
```

---

# Epic 14: Functional Testing

### Description
This epic validates Smart Home system behavior using positive and negative Gherkin test scenarios.

```gherkin
Feature: Functional Testing

Scenario: Validate MongoDB queries successfully

Given the collections contain documents
When the queries are executed
Then MongoDB must return valid results
And the results must match the query filters

Scenario: Execute invalid MongoDB query

Given MongoDB Compass is connected
When an invalid query is executed
Then the system must generate an error
But the database connection must remain active
```
