# CBTis47_Smart-
Imagina que controlas una casa inteligente. Cada dispositivo (foco, termostato, cerradura) envía datos diferentes.
ROL "THE DTA MODELER"
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
| 0 | Scrum Master |  Carrera Quezada Axel Ivan  | **Facilitador del proceso.** Asegura que el equipo siga Scrum, elimina impedimentos, mejora la comunicación y protege el Sprint de interrupciones externas. |
| 1 | The Data Modeler |  Garcia Pulido Samantha Michelle  | **Arquitecto JSON.** Define la estructura del documento. Decide qué datos se "embeben" (embed) y cuáles se referencian. Escribe el diagrama en Mermaid.js. |
| 2 | The Query Developer |  Montalvo Cano Jacqueline  | **Constructor MQL.** Traduce las preguntas de negocio ("¿Cuántos usuarios...?") a código MongoDB (`db.collection.find(...)`). Optimiza filtros y consultas. |
| 3 | The Integration Specialist |  De La Cuz Zayas Juan Irving  | **Configurador del Entorno.** Crea el Cluster en Atlas o la conexión en Compass. Gestiona índices y asegura la conectividad. Administra el repositorio GitHub. |
| 4 | The Data Seeder / QA |  Ramírez López Fatima Yocelin  | **Generador de Caos.** Crea datos de prueba (JSON ficticio). Valida consultas y reporta errores ("bugs"). |

---

## Registro de Trabajo

Consulta el trabajo detallado del equipo aquí:

 [WORKLOG.md](./WORKLOG.md)