# Documentación de Scrum

## Product Goal
Desarrollar una base de datos en MongoDB para una Smart Home que permita registrar, gestionar y monitorear dispositivos del hogar como focos, termostatos, cerraduras y otros elementos inteligentes.

---

## Product Backlog

- Create users collection
- Store user credentials (email and password)
- Create devices collection
- Store device information (type, brand, model, location)
- Track device status (on/off, maintenance)
- Store battery level of devices
- Track device connectivity (online/offline)
- Query devices by location
- Query devices by status
- Update device status

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

- Create database `smart_home`
- Create collection `users`
- Create collection `devices`
- Insert sample users
- Insert sample devices
- Define device fields (type, brand, model, status, batteryLevel, location)
- Test basic queries in MongoDB
- Implement queries to filter devices by status
- Implement queries to filter devices by location
- Update device status (on/off)
- Improve data structure for devices

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