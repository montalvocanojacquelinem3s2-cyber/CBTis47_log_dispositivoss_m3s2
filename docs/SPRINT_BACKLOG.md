# SMART HOME MANAGEMENT SYSTEM

## SPRINTS BACKLOG

# SPRINT GOAL GENERAL DEL PROYECTO

Desarrollar una plataforma integral de gestión para hogares inteligentes capaz de registrar usuarios, administrar dispositivos IoT, almacenar eventos generados por sensores, monitorear el estado de los dispositivos en tiempo real y proporcionar información histórica para mejorar la seguridad, el control y la eficiencia energética del hogar.
---

1. PRODUCT VISION

El Smart Home Management System es una plataforma diseñada para centralizar el monitoreo, control y automatización de dispositivos inteligentes dentro de una vivienda. El sistema permitirá a los usuarios gestionar iluminación, sensores ambientales, dispositivos conectados y sistemas de seguridad desde una única interfaz, garantizando comodidad, eficiencia energética y protección del hogar.

---


# HISTORIA DE USUARIO 1

## US-01 Registro y Gestión de Dispositivos

As a user

I want to register and manage smart devices

So that I can monitor and control all devices connected to my home.

### Acceptance Criteria

Given the user is authenticated

When the user registers a new device

Then the system should store the device information successfully

And display it in the device dashboard

---

Given a device exists

When the user updates its information

Then the changes should be saved

And reflected immediately in the system

---

# Subtasks

| ID    | Subtarea                      | Tiempo Estimado |
| ----- | ----------------------------- | --------------- |
| ST-01 | Diseño de tabla Dispositivos  | 1 h             |
| ST-02 | Creación de tabla SQLite      | 1 h             |
| ST-03 | Formulario de registro        | 2 h             |
| ST-04 | Validaciones de datos         | 1 h             |
| ST-05 | Actualización de dispositivos | 1 h             |
| ST-06 | Pruebas funcionales           | 1 h             |

Total: 7 horas

---

# HISTORIA DE USUARIO 2

## US-02 Registro y Consulta de Eventos

As a user

I want to view historical device events

So that I can analyze the behavior of my smart home.

### Acceptance Criteria

Given events are stored

When the user accesses the history section

Then the system should display recorded events

And allow filtering by device and date

---

Given event information exists

When the user performs a search

Then matching records should be displayed

And ordered chronologically

---

# Subtasks

| ID    | Subtarea                       | Tiempo Estimado |
| ----- | ------------------------------ | --------------- |
| ST-07 | Diseño tabla Eventos           | 1 h             |
| ST-08 | Registro automático de eventos | 2 h             |
| ST-09 | Consulta de historial          | 2 h             |
| ST-10 | Filtros de búsqueda            | 1 h             |
| ST-11 | Pruebas del módulo             | 1 h             |

Total: 7 horas

---

# SPRINT 1

## Sprint Goal

Diseñar e implementar la infraestructura inicial del sistema Smart Home, incluyendo el modelo de datos, la creación de la base de datos SQLite, el registro de usuarios y la administración básica de dispositivos para establecer una base sólida para el desarrollo de funcionalidades futuras.

| ID     | Tarea                      | Horas | Estado     |
| ------ | -------------------------- | ----- | ---------- |
| SP1-01 | Análisis de requerimientos | 1 h   | Completado |
| SP1-02 | Diseño del modelo de datos | 2 h   | Completado |
| SP1-03 | Creación de tablas SQLite  | 2 h   | Completado |
| SP1-04 | Registro de usuarios       | 1 h   | Completado |
| SP1-05 | Login de usuarios          | 1 h   | Completado |
| SP1-06 | Documentación inicial      | 1 h   | Completado |

### Horas Totales Sprint 1

8 horas

---

# SPRINT 2

## Sprint Goal

Desarrollar el módulo de administración de dispositivos inteligentes permitiendo registrar, actualizar, consultar y almacenar información de los dispositivos conectados al sistema.

| ID     | Tarea                         | Horas | Estado     |
| ------ | ----------------------------- | ----- | ---------- |
| SP2-01 | Diseño entidad Dispositivos   | 1 h   | Completado |
| SP2-02 | Desarrollo CRUD Dispositivos  | 2 h   | Completado |
| SP2-03 | Validaciones de información   | 1 h   | Completado |
| SP2-04 | Integración con base de datos | 2 h   | Completado |
| SP2-05 | Pruebas funcionales           | 1 h   | Completado |
| SP2-06 | Actualización documentación   | 1 h   | Completado |

### Horas Totales Sprint 2

8 horas

---

# SPRINT 3

## Sprint Goal

Implementar el sistema de monitoreo y registro histórico de eventos generados por dispositivos inteligentes, permitiendo la consulta, filtrado y análisis de información para mejorar la supervisión del hogar.

| ID     | Tarea                           | Horas | Estado     |
| ------ | ------------------------------- | ----- | ---------- |
| SP3-01 | Diseño entidad Eventos          | 1 h   | Completado |
| SP3-02 | Registro automático de eventos  | 2 h   | Completado |
| SP3-03 | Consulta de historial           | 2 h   | Completado |
| SP3-04 | Filtros por dispositivo y fecha | 1 h   | Completado |
| SP3-05 | Pruebas integrales              | 1 h   | Completado |
| SP3-06 | Documentación final             | 1 h   | Completado |

### Horas Totales Sprint 3

8 horas

---

# RESUMEN DE SPRINTS

| Sprint   | Objetivo Alcanzado                                | Horas |
| -------- | ------------------------------------------------- | ----- |
| Sprint 1 | Infraestructura inicial, usuarios y base de datos | 8 h   |
| Sprint 2 | Gestión completa de dispositivos inteligentes     | 8 h   |
| Sprint 3 | Registro y monitoreo de eventos históricos        | 8 h   |

## Total de Horas del Proyecto

24 horas


 ##DEFINITION OF DONE

Una tarea será considerada completada cuando:

El desarrollo haya sido implementado.
El código compile sin errores.
Las pruebas hayan sido aprobadas.
Los criterios de aceptación hayan sido cumplidos.
La documentación se encuentre actualizada.
El cambio haya sido subido al repositorio GitHub.
El Product Owner valide el resultado.

## Resultado Final

Al finalizar los tres sprints se obtuvo una plataforma Smart Home funcional capaz de:

* Gestionar usuarios.
* Administrar dispositivos inteligentes.
* Registrar eventos generados por dispositivos.
* Consultar historial de actividad.
* Almacenar información en SQLite.
* Mantener documentación técnica y evidencias de desarrollo.
