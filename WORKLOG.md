# Registro de Trabajo del Equipo

---

## Scrum Master - Carrera Quezada Axel Ivan



---

## Data Modeler - samantha 

Yo fui el Data Modeler del equipo, entonces me encargué de diseñar cómo iba a estar estructurada la base de datos.
Primero definí una entidad principal que se llama DEVICES, donde puse toda la información que comparten los dispositivos, como el nombre, la marca, el modelo, la ubicación y cosas de conectividad. La idea era no repetir datos y mantener todo más ordenado.
Después separé los tipos de dispositivos, como luces, termostatos, cerraduras, televisiones, computadoras y bocinas. A cada uno le dejé solo los datos que realmente necesita, por ejemplo brillo en luces o temperatura en termostatos.
También apliqué polimorfismo, que básicamente significa que un mismo dispositivo puede tener diferentes características o incluso combinar funciones. Por eso usé relaciones de uno a muchos.
Hubo algunas decisiones importantes, por ejemplo:

-Pasé isOn y powerConsumption a la entidad principal porque aplican a casi todos los dispositivos. 

-Y el accessCode de las cerraduras lo separé por seguridad. 

-Al final representé todo con un diagrama en Mermaid para que se entienda visualmente.

-Mi rol ahora paso a ser Data Seeder / QA, y el rol se le asigno a mi compañera Samantha.
---

## Query Developer - jacqui



---

## Integration Specialist - irving



---

## Data Seeder / QA - fatima

-Se propusieron nuevos entregables para el proyecto, no se realizo ningún avance de mi parte

-Decidí investigar de que iba el primer entregable, como funcionan los scripts de query y como puedo hacer uno
find es para encontrar varios documentos
findOne es para encontrar el primer documento que coincida con las características buscadas

-operadores
$gt greater than, mayor que
$lt menor que
$gte mayor o igual que
$lte menor o igual que
$ne diferente

-Se reporto un problema con las semillas, hice otras 55 semillas mas y se insertaron en la base de datos

-Mi rol cambio a scrum master, y quien tomo mi rol fue mi compañera Fatima.

