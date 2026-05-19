# Documentación de Scrum

## Product Goal
Desarrollar una base de datos en MongoDB para una Smart Home que permita registrar, gestionar y monitorear dispositivos del hogar como focos, termostatos, cerraduras y otros elementos inteligentes.

---

## Product Backlog



---

| ID | Epic | User Story | Acceptance Criteria | Priority |
|----|------|-------------|---------------------|----------|

| PB-01 | Gestión de Base de Datos | Como administrador del sistema, quiero crear una base de datos para almacenar información de la Smart Home, para organizar todos los datos del proyecto. | - La base de datos debe llamarse `hogar_inteligente`.<br>- Debe estar creada en MongoDB Atlas.<br>- Debe permitir múltiples colecciones. | Alta |

| PB-02 | Gestión de Dispositivos | Como propietario de una Smart Home, quiero registrar dispositivos inteligentes, para monitorear su estado y funcionamiento. | - Debe existir una colección `devices`.<br>- Cada dispositivo debe tener un `deviceId` único.<br>- Debe guardar marca, modelo y ubicación. | Alta |

| PB-03 | Gestión de Usuarios | Como administrador, quiero registrar usuarios del sistema, para controlar el acceso a la plataforma. | - Debe existir una colección `users`.<br>- Cada usuario debe almacenar correo y contraseña.<br>- Los datos deben guardarse correctamente. | Alta |

| PB-04 | Inserción de Datos | Como desarrollador, quiero insertar datos de prueba en las colecciones, para validar el funcionamiento de la base de datos. | - Deben existir documentos en `devices` y `users`.<br>- Los documentos deben contener información válida. | Alta |

| PB-05 | Consultas MongoDB | Como usuario del sistema, quiero realizar consultas simples utilizando `find()`, para obtener información de los dispositivos registrados. | - Las consultas deben devolver resultados correctos.<br>- Debe ser posible buscar por marca, estado y ubicación. | Alta |

| PB-06 | Consultas MongoDB | Como administrador, quiero utilizar `findOne()` para buscar dispositivos específicos, para consultar información individual. | - Debe devolver un único documento.<br>- Debe funcionar utilizando `_id`. | Media |

| PB-07 | Monitoreo de Dispositivos | Como usuario, quiero consultar dispositivos conectados, para monitorear cuáles están en línea. | - La query debe filtrar con `online:true`.<br>- Debe mostrar solamente dispositivos activos en línea. | Media |

| PB-08 | Organización del Proyecto | Como desarrollador, quiero organizar las queries en archivos `.mongodb`, para mantener una mejor estructura del proyecto. | - Deben existir archivos separados por tipo de query.<br>- Los archivos deben contener comentarios descriptivos. | Media |

| PB-09 | Documentación | Como desarrollador, quiero documentar las consultas y resultados, para explicar el funcionamiento del sistema. | - La documentación debe incluir queries y resultados.<br>- Debe utilizar formato Markdown. | Media |

| PB-10 | Modelado de Datos | Como desarrollador, quiero diseñar un diagrama entidad-relación, para representar visualmente la estructura de la base de datos. | - El diagrama debe incluir relaciones.<br>- Debe mostrar entidades y atributos. | Media |

| PB-11 | GitHub Repository | Como desarrollador, quiero subir el proyecto a GitHub, para almacenar y compartir el repositorio. | - El repositorio debe contener documentación.<br>- Debe incluir archivos `.mongodb` y `README.md`. | Alta |

| PB-12 | Capturas del Sistema | Como desarrollador, quiero agregar capturas de MongoDB Atlas, para mostrar evidencia del funcionamiento del proyecto. | - Deben verse las colecciones.<br>- Deben mostrarse documentos y queries. | Baja |

| PB-13 | Scrum Documentation | Como integrante del equipo, quiero crear documentación Scrum, para organizar las actividades y avances del proyecto. | - Debe incluir Product Goal.<br>- Debe incluir Sprint Backlog e Increment. | Media |

| PB-14 | Testing | Como desarrollador, quiero crear escenarios Gherkin, para validar el comportamiento esperado del sistema. | - Debe utilizar formato Given/When/Then.<br>- Debe existir al menos un escenario por funcionalidad importante. | Media |

---

# Gherkin Scenarios

## Feature: Registro de dispositivos

```gherkin
Scenario: Registrar un nuevo dispositivo
Given que el usuario está conectado a MongoDB Atlas
When registra un dispositivo inteligente
Then el dispositivo debe almacenarse correctamente en la colección devices

---

## Historias de Usuario
Como propietario de una casa inteligente, quiero registrar y gestionar los dispositivos y elementos de mi hogar (electrodomésticos, puertas, luces, etc.), para poder monitorear su estado, controlarlos fácilmente y mantener organizada la información de mi Smart Home.

---

## Sprint Planning

### TABLA 1: PRIMER PARCIAL (Fundamentos y Modelado)

 1- Inducción y Configuración Rules & Tools.
README.md (Initial Commit) Con "Student Pledge" firmado.

2- Sintaxis JSON/BSON Objetos, Arrays, Tipos de Datos.
portfolio/me.json Un archivo JSON válido representando un objeto del mundo real.

3- Schema Design I Embedding vs Referencing.
docs/schema.mmd Diagrama ER usando Mermaid.js (Código).

4- MongoDB Compass & Atlas Creación de Cluster y Colecciones.
scripts/01_create_collections.js Script de inicialización.

5- CRUD: Create (Insert) insertOne, insertMany.
data/seeds.json Archivo con +50 documentos de prueba.

6- Defensa de Arquitectura.
RELEASE v1.0 (Tag) Repositorio completo con datos cargados.

7-EVALUACIÓN PARCIAL 1 Retroalimentación y Captura.
Presentación del proyecto.

### TABLA 2: SEGUNDO PARCIAL (Consultas y Manipulación)

8- CRUD: Read (Básico) find(), findOne(), Proyecciones.
queries/01_simple_find.mongodb Scripts de búsqueda simple.

9- Operadores de Comparación $gt, $lt, $in, $ne.
queries/02_filters.mongodb Consultas con filtros numéricos y de listas.

10- Operadores Lógicos $and, $or, $not.
queries/03_logic.mongodb Scripts de lógica booleana.

11- CRUD: Update & Delete $set, $inc, $push (Arrays).
scripts/update_data.js Scripts para modificar documentos.

12- CIERRE DE PROYECTO P2 Gestión dinámica de datos.
RELEASE v2.0 (Tag) Set de consultas funcionales documentadas.

13-EVALUACIÓN PARCIAL 2 Retroalimentación y Captura.
docs/reflection_p2.md Post-mortem del Sprint 2.

---

## Sprint Backlog 
### Parcial 1

- Create database `smart_home`
- Create collection `users`
- Create collection `devices`
- Insert sample users
- Insert sample devices
- Define device fields (type, brand, model, status, batteryLevel, location)
- Test basic queries in MongoDB


### Parcial 2

- Implement queries to filter devices by status
- Implement queries to filter devices by location
- Update device status (on/off)
- Improve data structure for devices


### Parcial 3

-
-
-
-

---

## Incremento

DEVICES

// 1. ({ _id: ObjectId("69ea90a127236869037df2f8") })
-_id:69ea90a127236869037df2f8
deviceId:"a78e6ff0-8c68-4ca3-b9a6-54543a85a724"
type:"computer"
brand:"HP"
model:"Model-338"
serialNumber:"5d47929e-b2eb-45f1-b6de-9414c240f7eb"
location:"garage"
status:"maintenance"
batteryLevel:38
online:true
isOn:true
installationDate:"2026-04-22T21:26:58.889Z"
lastUpdate:"2026-04-22T21:26:58.889Z"
name:"computer_0"

// 2. ({ brand: "LG" })
-_id:69ea90a127236869037df2fa
deviceId:"30439420-d072-4d31-88f2-c2125e72f635"
type:"computer"
brand:"LG"
model:"Model-196"
serialNumber:"12f911f8-9d1f-4ab1-887d-32b02c418e77"
location:"sala"
status:"active"
batteryLevel:95
online:true
isOn:true
installationDate:"2026-04-22T21:26:58.889Z"
lastUpdate:"2026-04-22T21:26:58.889Z"
name:"computer_2"

// 3.({ status: "active" })
-_id:69ea90a127236869037df2fa
deviceId:"30439420-d072-4d31-88f2-c2125e72f635"
type:"computer"
brand:"LG"
model:"Model-196"
serialNumber:"12f911f8-9d1f-4ab1-887d-32b02c418e77"
location:"sala"
status:"active"
batteryLevel:95
online:true
isOn:true
installationDate:"2026-04-22T21:26:58.889Z"
lastUpdate:"2026-04-22T21:26:58.889Z"
name:"computer_2"

// 4.({ location: "cocina" })
-_id:69ea90a127236869037df2f9
deviceId:"284fc5c0-b4e4-4858-b70c-a58eb8fef5dc"
type:"thermostat"
brand:"Xiaomi"
model:"Model-256"
serialNumber:"b246f06c-79e4-4506-990e-f2d8ed314597"
location:"cocina"
status:"inactive"
batteryLevel:21
online:true
isOn:true
installationDate:"2026-04-22T21:26:58.889Z"
lastUpdate:"2026-04-22T21:26:58.889Z"
name:"thermostat_1"

// 5.({ online: true })
-_id:69ea90a127236869037df2fc
deviceId:"fd1375c4-cda2-416d-ac0e-01cff208b273"
type:"tv"
brand:"Samsung"
model:"Model-933"
serialNumber:"a6497248-06aa-455b-be08-859f8296abca"
location:"garage"
status:"maintenance"
batteryLevel:64
online:true
isOn:true
installationDate:"2026-04-22T21:26:58.889Z"
lastUpdate:"2026-04-22T21:26:58.889Z"
name:"tv_4"

// 6.({ brand: "Samsung", status: "active" })
-_id:69ea90a127236869037df301
deviceId:"70c11d25-381f-47c3-84bd-9d1ae4fce1c5"
type:"air_conditioner"
brand:"Samsung"
model:"Model-255"
serialNumber:"6edd362e-a62c-4b7d-b57d-4762a558da00"
location:"garage"
status:"active"
batteryLevel:50
online:true
isOn:true
installationDate:"2026-04-22T21:26:58.889Z"
lastUpdate:"2026-04-22T21:26:58.889Z"
name:"air_conditioner_9"


USERS

// 1.({ _id: ObjectId("69f11041c50d0ccc6367636e") })
-_id:69f11041c50d0ccc6367636e
correo_electrónico:"pablo2@gmail.com"
contraseña:"pass215330"

// 2.({ correo_electrónico: "juan38@hotmail.com" })
-_id:69f11041c50d0ccc63676392
correo_electrónico:"juan38@hotmail.com"
contraseña:"pass506574"

// 3.({ contraseña: "pass252333" })
-_id:69f11041c50d0ccc63676373
correo_electrónico:"pablo7@zoho.com"
contraseña:"pass252333"

// 4.({ "correo_electrónico": "luis0@gmail.com.mx" })
-_id:69f11041c50d0ccc6367636c
correo_electrónico:"luis0@gmail.com.mx"
contraseña:"pass538337"

// 5.({ email: { $exists: true } })
-_id:69f7e71c778e7ce901394d57
email:"mariare@gmail.com"
password:"27112345tt"
__v:0

// 6.({ correo_electrónico: "pablo7@zoho.com", contraseña: "pass252333" })
-_id:69f11041c50d0ccc63676373
correo_electrónico:"pablo7@zoho.com"
contraseña:"pass252333"
