# Registro de Trabajo del Equipo

---

## Scrum Master - Garcia Pulido Samantha Michelle



---

## Data Modeler - Ramírez López Fatima Yocelin

Yo fui el Data Modeler del equipo, entonces me encargué de diseñar cómo iba a estar estructurada la base de datos.
Primero definí una entidad principal que se llama DEVICES, donde puse toda la información que comparten los dispositivos, como el nombre, la marca, el modelo, la ubicación y cosas de conectividad. La idea era no repetir datos y mantener todo más ordenado.
Después separé los tipos de dispositivos, como luces, termostatos, cerraduras, televisiones, computadoras y bocinas. A cada uno le dejé solo los datos que realmente necesita, por ejemplo brillo en luces o temperatura en termostatos.
También apliqué polimorfismo, que básicamente significa que un mismo dispositivo puede tener diferentes características o incluso combinar funciones. Por eso usé relaciones de uno a muchos.
Hubo algunas decisiones importantes, por ejemplo:

-Pasé isOn y powerConsumption a la entidad principal porque aplican a casi todos los dispositivos. 

-Y el accessCode de las cerraduras lo separé por seguridad. 

-Al final representé todo con un diagrama en Mermaid para que se entienda visualmente.


---

## Query Developer - Montalvo Cano Jacqueline

Mi rol fue traducir las necesidades del sistema a código en MongoDB, creando consultas funcionales (MQL) para la colección devices.

-Me encargué de desarrollar el código necesario para que los datos se registraran correctamente en la base de datos. Para esto, utilicé MongoDB, FlutterFlow, Railway (como API) y GitHub.

-Dentro del repositorio, trabajé sobre la estructura existente y creé las carpetas necesarias para la API, donde integré los archivos principales de configuración y ejecución del servidor. En esta parte, implementé la lógica para recibir datos desde la aplicación y almacenarlos en la base de datos, así como la consulta para visualizarlos.

-También desarrollé una carpeta de queries, donde agregué consultas básicas en MongoDB para validar el funcionamiento del sistema, como obtener todos los registros, buscar por id, filtrar por marca, estado, ubicación y dispositivos en línea.

-En general, mi trabajo consistió en construir el código funcional que permite registrar, consultar y validar los datos dentro del sistema Smart Home.

---

## Integration Specialist - De La Cruz Zayas Juan Irving

-Soy el Integration Specialist, me encargué principalmente de crear la cuenta y el proyecto en mongo db, de la cual posteriormente se encarga mi Query Developer.

-Responsable de la gestión de el repositorio en git hub, me encargo de revisar si las cosas están subidas correctamente, y si cada rol está cumpliendo con lo que se requiere, dentro del repositorio.

-Corrijo errores dentro de git hub, así como verificar el clouster de Mongo db.

-Me encargo de la gestión y el control hacia la conexión del API, la base de datos en Mongo db, y el repositorio de git hub, para que no falle.

---

## Data Seeder / QA - Carrera Quezada Axel Ivan

-Se propusieron nuevos entregables para el proyecto, no se realizo ningún avance de mi parte.

-Decidí investigar de que iba el primer entregable, como funcionan los scripts de query y como puedo hacer uno
find es para encontrar varios documentos
findOne es para encontrar el primer documento que coincida con las características buscadas.

-operadores
$gt greater than, mayor que
$lt menor que
$gte mayor o igual que
$lte menor o igual que
$ne diferente

-Se reporto un problema con las semillas, hice otras 55 semillas mas y se insertaron en la base de datos.


