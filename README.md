# CBTis47_Smart-
## 📖 Project Description

This project consists of the design and implementation of a Smart Home system using MongoDB as the main database. The system is focused on managing different types of smart devices within a home environment, allowing centralized control and monitoring.

The platform includes three main user interaction screens:

1. **User Registration Screen**  
   Allows new users to create an account by providing essential information such as email and password. This data is stored and validated to ensure unique user identification.

2. **User Access / Authentication Screen**  
   Enables registered users to log into the system and access their smart home environment securely.

3. **Device Registration and Management Screen**  
   Allows users to register, configure, and manage smart devices within the home. Each device is stored in the database with its general attributes (such as type, brand, status, and location) and its specific configuration depending on the device type.

The system supports multiple device categories, including lights, thermostats, locks, televisions, air conditioners, computers, and speakers. Each device type contains specialized attributes that extend from a central device model.

Additionally, the system incorporates security features for smart locks, including encrypted access codes and rotation tracking.

The database design follows a structured approach where a main device entity is extended by specific device types, enabling scalability and flexibility for future device integrations.
# Smart Home Device Logger

This project models a Smart Home system using MongoDB and a document-oriented
NoSQL approach. The focus of the project is on **data modeling**, schema design,
and architectural decisions rather than application logic.

---

## Project Goal

The goal of this project is to design a flexible and scalable data model capable
of representing multiple types of electronic devices within a smart home,
including hybrid devices that can perform more than one function.

---
## Roles

| ROL | NOMBRE TÉCNICO | RESPONSABLE (Nombre) | RESPONSABILIDAD PRINCIPAL (Sprints Semanales) |
|-----|----------------|----------------------|---------------------------------------------|
| 0 | Scrum Master | Garcia Pulido Samantha Michelle | **Facilitador del proceso.** Asegura que el equipo siga Scrum, elimina impedimentos, mejora la comunicación y protege el Sprint de interrupciones externas. |
| 1 | The Data Modeler |  Ramírez López Fatima Yocelin  | **Arquitecto JSON.** Define la estructura del documento. Decide qué datos se "embeben" (embed) y cuáles se referencian. Escribe el diagrama en Mermaid.js. |
| 2 | The Query Developer |  Montalvo Cano Jacqueline  | **Constructor MQL.** Traduce las preguntas de negocio ("¿Cuántos usuarios...?") a código MongoDB (`db.collection.find(...)`). Optimiza filtros y consultas. |
| 3 | The Integration Specialist |  De La Cuz Zayas Juan Irving  | **Configurador del Entorno.** Crea el Cluster en Atlas o la conexión en Compass. Gestiona índices y asegura la conectividad. Administra el repositorio GitHub. |
| 4 | The Data Seeder / QA |  Carrera Quezada Axel Ivan  | **Generador de Caos.** Crea datos de prueba (JSON ficticio). Valida consultas y reporta errores ("bugs"). |

---

## Registro de Trabajo

Consulta el trabajo detallado del equipo aquí:

 [WORKLOG.md](./WORKLOG.md)