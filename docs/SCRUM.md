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
// 1. Get one device by _id
db.devices.findOne({ _id: ObjectId('69ea90a127236869037df2f9')})
*_id:69ea90a127236869037df2f9
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
// 2.  Get devices where brand is exactly "LG"
db.devices.find({ brand: "LG" })
_id:
69ea90a127236869037df2fa
deviceId:
"30439420-d072-4d31-88f2-c2125e72f635"
type:"computer"
brand:"LG"
model:"Model-196"
serialNumber:
"12f911f8-9d1f-4ab1-887d-32b02c418e77"
location:"sala"
status:"active"
batteryLevel:95
online:true
isOn:true



// 3. Get devices where status is exactly "Nuevo"
db.devices.find({ status: "Nuevo" })



// 4. Get devices where location is exactly "Cocina"
db.devices.find({ location: "cocina" })
_id:
69efc4848a2a3959dbea7b82
deviceId:
"284fc5c0-b4e4-4858-b70c-a58eb8fef5dc"
type:
"thermostat"
brand:
"Xiaomi"
model:
"Model-256"
serialNumber:"b246f06c-79e4-4506-990e-f2d8ed314597"
location:"cocina"
status:"inactive"
batteryLevel:21
online:true
isOn:true
installationDate:"2026-04-22T21:26:58.889Z"
lastUpdate:"2026-04-22T21:26:58.889Z"
name:"thermostat_1"


// 5. Get devices that are online
db.devices.find({ online: true })
_id:
69ea90a127236869037df2f8
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




// 6. Get devices by brand and status
db.devices.find({ brand: "Samsung", status: "Nuevo" })





// Simple Find Queries - Users Collection

// 1. Get one user by _id
db.users.findOne({ _id: ObjectId("69f27aa6d9a56c6f24e38712") })
_id:69f27aa6d9a56c6f24e38712
correo_electrónico:"adame6@yahoo.com"
contraseña:"pass268845"

// 2. Get users where email is exactly "juan@gmail.com"
db.users.find({ email: "juan@gmail.com" })
_id:69ed6a6b73004aebfe3a15b0
email:"juan@gmail.com"
password:"1234qwe"
__v:0

// 3. Get users where password is exactly "123456"
db.users.find({ password: "123456" })
_id:69ed3b1c02d358df2eed24dd
email:"test@test.com"
password:"123456"

// 4. Get users where correo_electrónico is exactly "luis0@gmail.com.mx"
db.users.find({ "correo_electrónico": "luis0@gmail.com.mx" })
_id:
69f27aa6d9a56c6f24e3870c
correo_electrónico:
"luis0@gmail.com.mx"
contraseña:
"pass538337"
_id:69f27aa9d9a56c6f24e3873e
correo_electrónico:"luis0@gmail.com.mx"
contraseña:"pass538337"