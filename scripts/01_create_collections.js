const { MongoClient } = require('mongodb');

const URI = "mongodb+srv://USUARIO:PASSWORD@tu-cluster.mongodb.net/";
const DB_NAME = "smart_home_dbmongodb+srv://juanirving9635_db_user:<db_password>@cluster1.kazi8nz.mongodb.net/?appName=Cluster1";

const dispositivos = [
  { "name": "Luz Sala", "type": "LIGHT", "brand": "Philips" },
  { "name": "Termostato Hall", "type": "THERMOSTAT", "brand": "Nest" },
  { "name": "Cerradura Entrada", "type": "LOCK", "brand": "August" }
];

async function setup() {
    const client = new MongoClient(URI);
    try {
        await client.connect();
        const db = client.db(DB_NAME);

        // Colección
        const result = await db.collection("devices").insertMany(dispositivos);
        
        console.log("Base de datos configurada y dispositivos insertados.");
    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        await client.close();
    }
}

setup();