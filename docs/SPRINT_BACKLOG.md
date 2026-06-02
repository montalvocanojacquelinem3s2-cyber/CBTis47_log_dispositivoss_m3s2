# SMART HOME MANAGEMENT SYSTEM

## Product Backlog, SRS y Sprint Backlog

---

# 1. PRODUCT VISION

El Smart Home Management System es una plataforma diseñada para centralizar el monitoreo, control y automatización de dispositivos inteligentes dentro de una vivienda. El sistema permitirá a los usuarios gestionar iluminación, sensores ambientales, dispositivos conectados y sistemas de seguridad desde una única interfaz, garantizando comodidad, eficiencia energética y protección del hogar.

---

# 2. PRODUCT GOAL

Desarrollar una aplicación de gestión de hogares inteligentes que permita a los usuarios supervisar, controlar y automatizar dispositivos domésticos mediante una interfaz intuitiva, proporcionando seguridad, ahorro energético y monitoreo en tiempo real.

---

# 3. EPICS

### EPIC 1 – Gestión de Usuarios

Administración de cuentas, autenticación y configuración de perfiles.

### EPIC 2 – Gestión de Dispositivos

Control y administración de dispositivos inteligentes conectados.

### EPIC 3 – Seguridad del Hogar

Monitoreo de eventos de seguridad y gestión de alertas.

### EPIC 4 – Monitoreo Ambiental

Seguimiento de variables ambientales mediante sensores.

### EPIC 5 – Automatización Inteligente

Creación de reglas y automatizaciones para el hogar.

### EPIC 6 – Reportes y Estadísticas

Generación de información histórica y análisis de consumo.

---

# 4. USER STORIES

## US-01 Registro de Usuario

As a user

I want to create an account

So that I can access my smart home system

### Acceptance Criteria

Given the user is on the registration page

When the user enters valid information

Then the account should be created successfully

And a confirmation message should be displayed

---

## US-02 Inicio de Sesión

As a user

I want to log in

So that I can access my smart home dashboard

### Acceptance Criteria

Given the user has a registered account

When the user enters valid credentials

Then the system should grant access

And display the main dashboard

---

## US-03 Gestión de Perfil

As a user

I want to update my profile information

So that my account information remains current

### Acceptance Criteria

Given the user is authenticated

When profile information is modified

Then the changes should be stored successfully

And confirmation should be displayed

---

## US-04 Control de Luces

As a user

I want to turn lights on and off remotely

So that I can manage household lighting

### Acceptance Criteria

Given the light device is connected

When the user changes its state

Then the device should respond immediately

And the new status should be reflected on screen

---

## US-05 Control de Enchufes Inteligentes

As a user

I want to control smart plugs

So that I can manage connected appliances

### Acceptance Criteria

Given a smart plug is available

When the user activates or deactivates it

Then the action should be executed successfully

And the system should update its status

---

## US-06 Monitoreo de Sensores

As a user

I want to view sensor information

So that I can monitor home conditions

### Acceptance Criteria

Given sensors are operational

When the user opens the monitoring section

Then current readings should be displayed

And values should update automatically

---

## US-07 Alertas de Seguridad

As a user

I want to receive security alerts

So that I can react to suspicious situations

### Acceptance Criteria

Given a security event is detected

When the alert is generated

Then the user should receive a notification

And the event should be stored in the system

---

## US-08 Monitoreo de Cámaras

As a user

I want to view security cameras

So that I can supervise my home remotely

### Acceptance Criteria

Given cameras are connected

When the user accesses the monitoring section

Then live video should be displayed

And camera switching should be available

---

## US-09 Automatización de Dispositivos

As a user

I want to create automation rules

So that devices can operate automatically

### Acceptance Criteria

Given the user configures a rule

When the specified condition occurs

Then the configured action should execute automatically

And the event should be logged

---

## US-10 Consulta de Historial

As a user

I want to view historical records

So that I can analyze device activity

### Acceptance Criteria

Given historical information exists

When the user requests a report

Then the system should display stored records

And allow filtering by date

---

# 5. FUNCTIONAL REQUIREMENTS

RF-01 El sistema permitirá registrar usuarios.

RF-02 El sistema permitirá iniciar sesión.

RF-03 El sistema permitirá recuperar contraseñas.

RF-04 El sistema permitirá administrar perfiles.

RF-05 El sistema permitirá registrar dispositivos.

RF-06 El sistema permitirá modificar dispositivos.

RF-07 El sistema permitirá eliminar dispositivos.

RF-08 El usuario podrá controlar luces inteligentes.

RF-09 El usuario podrá controlar enchufes inteligentes.

RF-10 El sistema mostrará el estado de dispositivos en tiempo real.

RF-11 El sistema registrará información de sensores.

RF-12 El sistema enviará alertas de seguridad.

RF-13 El sistema permitirá monitorear cámaras.

RF-14 El sistema almacenará historial de eventos.

RF-15 El sistema permitirá configurar automatizaciones.

RF-16 El sistema generará reportes de actividad.

RF-17 El sistema almacenará configuraciones personalizadas.

RF-18 El sistema registrará auditoría de acciones.

---

# 6. NON-FUNCTIONAL REQUIREMENTS

RNF-01 El sistema deberá tener una interfaz intuitiva.

RNF-02 El tiempo de respuesta no deberá exceder 3 segundos.

RNF-03 La disponibilidad mínima deberá ser del 99%.

RNF-04 La información deberá almacenarse de forma segura.

RNF-05 El sistema deberá utilizar autenticación de usuarios.

RNF-06 El sistema deberá ser compatible con Windows.

RNF-07 El sistema deberá soportar múltiples dispositivos conectados.

RNF-08 La aplicación deberá ser escalable.

RNF-09 El sistema deberá mantener integridad de datos.

RNF-10 El sistema deberá actualizar información en tiempo real.

---

# 7. STACK TECNOLÓGICO

Lenguaje de Programación: Java

Framework de Interfaz: Swing

Base de Datos: SQLite

IDE: NetBeans

Control de Versiones: Git

Repositorio Remoto: GitHub

Metodología: Scrum

Arquitectura: Cliente – Base de Datos

---

# 8. SPRINT BACKLOG – SPRINT 1

## Sprint Goal

Construir la infraestructura inicial del sistema Smart Home, incluyendo autenticación, estructura de base de datos, dashboard principal y gestión básica de dispositivos.

| ID    | Tarea                     | Descripción                                      | Responsable    |
| ----- | ------------------------- | ------------------------------------------------ | -------------- |
| SB-01 | Análisis de requisitos    | Identificación y documentación de requerimientos | Todo el equipo |
| SB-02 | Diseño ERD                | Diseño del modelo entidad-relación               | Data           |
| SB-03 | Diseño de Base de Datos   | Definición de tablas y relaciones                | Data           |
| SB-04 | Implementación SQLite     | Creación física de la base de datos              | Data           |
| SB-05 | Desarrollo Login          | Programación del módulo de acceso                | Backend        |
| SB-06 | Desarrollo Registro       | Programación del módulo de registro              | Backend        |
| SB-07 | Diseño UI Login           | Diseño visual de acceso                          | Frontend       |
| SB-08 | Diseño UI Registro        | Diseño visual de registro                        | Frontend       |
| SB-09 | Dashboard Principal       | Creación de panel principal                      | Frontend       |
| SB-10 | Gestión de Luces          | Desarrollo del control de iluminación            | Backend        |
| SB-11 | Integración Base de Datos | Conectar módulos con SQLite                      | Backend/Data   |
| SB-12 | Pruebas Funcionales       | Validación de funcionalidades                    | QA             |
| SB-13 | Corrección de Errores     | Resolución de incidencias                        | Todo el equipo |
| SB-14 | Documentación Técnica     | Actualización de documentación                   | Scrum Master   |
| SB-15 | Preparación de Entrega    | Organización de evidencias y entregables         | Todo el equipo |

---

# 9. DEFINITION OF DONE

Una tarea será considerada completada cuando:

* El desarrollo haya sido implementado.
* El código compile sin errores.
* Las pruebas hayan sido aprobadas.
* Los criterios de aceptación hayan sido cumplidos.
* La documentación se encuentre actualizada.
* El cambio haya sido subido al repositorio GitHub.
* El Product Owner valide el resultado.
