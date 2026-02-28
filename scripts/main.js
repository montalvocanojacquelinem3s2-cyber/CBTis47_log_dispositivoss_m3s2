const { MongoClient } = require('mongodb');

const URI = "mongodb+srv://juanirving9635_db_user:<db_password>@cluster1.kazi8nz.mongodb.net/?appName=Cluster1";

async function setup() {
    const client = new MongoClient(URI);
    try {
        await client.connect();
        const db = client.db(Smart-Home);

        // Create collections
        await db.createCollection("users");
        await db.createCollection("projects");

        // Set unique constraints
        await db.collection("users").createIndex({ email: 1 }, { unique: true });

        console.log("Database and collections initialized.");
    } catch (err) {
        console.error("Initialization failed:", err.message);
    } finally {
        await client.close();
    }
}

setup();