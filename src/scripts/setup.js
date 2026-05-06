const { MongoClient } = require('mongodb');

const URI =
"mongodb+srv://juanirving9635_db_user:MI_PASSWORD@cluster0.m0odnx4.mongodb.net/smart_home?retryWrites=true&w=majority";

const DB_NAME = "smart_home";

// =======================//
// DEVICES                //
// =======================//
const devices = [
  { deviceName: "Living Room Light", type: "LIGHT", brand: "Philips" },
  { deviceName: "Hall Thermostat", type: "THERMOSTAT", brand: "Nest" },
  { deviceName: "Front Door Lock", type: "LOCK", brand: "August", lock_security: { status: "active", level: "high" } },
  { deviceName: "Lounge TV", type: "TV", brand: "Samsung" },
  { deviceName: "Main AC", type: "AIR_CONDITIONER", brand: "LG" },
  { deviceName: "Office Computer", type: "COMPUTER", brand: "Apple" },
  { deviceName: "Smart Speaker", type: "SPEAKER", brand: "Sonos" }
];

// =======================//
// USERS                  //
// =======================//
const users = [
  { email: "user1@test.com", password: "123456" },
  { email: "user2@test.com", password: "abc123" }
];

async function setup() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db(DB_NAME);

    // Comenta esto si ya tienes datos importantes
    await db.collection("devices").deleteMany({});
    await db.collection("users").deleteMany({});

    // Evita correos duplicados
    await db.collection("users").createIndex({ email: 1 }, { unique: true });

    // Insertar datos
    await db.collection("devices").insertMany(devices);
    await db.collection("users").insertMany(users);

    console.log("Datos insertados correctamente en smart_home");

  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
  }
}

setup();