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

## Data Modeling Explanation (Español)

El modelo de datos fue diseñado siguiendo un enfoque NoSQL basado en documentos,
utilizando MongoDB.

Se definió una entidad principal llamada **DEVICES**, que contiene todos los
atributos comunes a cualquier dispositivo electrónico, tales como identificación,
marca, modelo, conectividad, estado de red y consumo energético.

El modelo aplica el concepto de **polimorfismo**, permitiendo que un mismo
dispositivo pueda pertenecer a uno o más tipos funcionales (por ejemplo,
una lámpara que también funciona como bocina). Por esta razón, las relaciones
entre DEVICES y los distintos tipos de dispositivos se modelaron como
**uno a muchos**.

Los atributos específicos de cada tipo de dispositivo (como brillo en lámparas,
temperatura en termostatos o volumen en bocinas) se mantienen en entidades
especializadas para mejorar la claridad conceptual y facilitar la expansión
del sistema.

### Decisiones de Diseño Clave

- El atributo `isOn` fue centralizado en DEVICES para evitar duplicación y
  mantener consistencia entre todos los dispositivos.
- El atributo `powerConsumption` también fue movido a DEVICES, ya que el
  consumo energético puede ser medido en cualquier tipo de aparato.
- El campo `status` fue eliminado por ser ambiguo, ya que su significado podía
  variar dependiendo del dispositivo.
- El atributo sensible `accessCode` de las cerraduras fue separado en una
  entidad de seguridad (`LOCK_SECURITY`) para representar buenas prácticas
  de protección de información sensible.

Este diseño prioriza la escalabilidad, la claridad del modelo y un mejor
rendimiento en operaciones de lectura, alineándose con las mejores prácticas
de modelado en MongoDB.

---

## Data Modeling Explanation (English)

The data model was designed using a document-based NoSQL approach with MongoDB.

A main entity called **DEVICES** was defined to store all attributes common to
any electronic device, such as identification, brand, model, connectivity,
network status, and power consumption.

The model applies the concept of **polymorphism**, allowing a single device to
support one or more functional types (for example, a lamp that also works as
a speaker). For this reason, the relationships between DEVICES and the different
device types were modeled as **one-to-many**.

Device-specific attributes (such as brightness for lights, temperature for
thermostats, or volume for speakers) are kept in specialized entities to improve
conceptual clarity and allow easy system expansion.

### Key Design Decisions

- The `isOn` attribute was centralized in DEVICES to avoid duplication and ensure
  consistency across all devices.
- The `powerConsumption` attribute was also centralized in DEVICES to support
  energy monitoring for all device types.
- The `status` attribute was removed due to ambiguity, as its meaning could vary
  depending on the device.
- The sensitive `accessCode` attribute for locks was moved to a separate
  security entity (`LOCK_SECURITY`) to reflect best practices for handling
  sensitive data.

This design prioritizes scalability, clarity, and efficient read operations,
following MongoDB data modeling best practices.

---

## Entity Relationship Diagram

The data model is represented using a Mermaid ER diagram.

- Diagram source: `docs/schema.mmd`
- Diagram image: `docs/schema.png`

---

## Technologies Used

- MongoDB Atlas
- MongoDB Compass
- Mermaid.js
- GitHub

---

## Role and Responsibility

**Role:** Data Modeler (JSON Architect)

Responsible for:
- Designing the document structure
- Defining embedded vs referenced data
- Applying polymorphism
- Creating the Mermaid ER diagram
- Documenting design decisions

---

## Author

Academic Project – NoSQL Data Modeling
