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

Durante el desarrollo del proyecto, desempeñé el rol de Query Developer, siendo responsable de traducir los requerimientos del sistema en soluciones técnicas mediante el uso de MongoDB Query Language, enfocadas principalmente en la colección.
Mi principal contribución fue el desarrollo de la lógica necesaria para el manejo de datos dentro del sistema Smart Home, asegurando que la información pudiera ser enviada, procesada y almacenada correctamente a través de una API. Para ello, trabajé con herramientas como MongoDB, FlutterFlow, Render y GitHub, integrando cada componente para lograr un flujo de datos funcional.
Dentro del repositorio, participé en la estructuración y desarrollo de la API, organizando las carpetas necesarias y configurando los archivos principales del proyecto. Implementé el archivo server.js, donde desarrollé la lógica del servidor, incluyendo la gestión de rutas y el procesamiento de datos. Asimismo, trabajé con package.json para administrar dependencias, scripts y la configuración general del entorno.
En la API, desarrollé los endpoints necesarios para registrar y consultar dispositivos, permitiendo el manejo de datos en formato JSON, su validación y almacenamiento en la base de datos. Además, integré el registro de usuarios mediante la colección users en MongoDB, ampliando la gestión de información dentro del sistema.
Adicionalmente, creé una carpeta de queries, donde implementé consultas en MongoDB para validar el funcionamiento del sistema, como la obtención de registros, búsquedas por _id y filtrado por atributos como marca, estado, ubicación y dispositivos en línea.
Durante el desarrollo, también contribuí en la definición de datos de prueba y en la organización de la información necesaria para validar el sistema, facilitando la ejecución de pruebas y el ajuste de los datos requeridos en cada etapa.
Finalmente, realicé pruebas de integración para verificar la comunicación entre la aplicación desarrollada en FlutterFlow, la API desplegada en Render y la base de datos en MongoDB, asegurando un flujo de datos confiable y consistente dentro del sistema Smart Home.

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


