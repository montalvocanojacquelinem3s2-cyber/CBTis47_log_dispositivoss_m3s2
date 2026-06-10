performance_test.js

// =====================================
// SMART HOME MANAGEMENT SYSTEM
// PERFORMANCE OPTIMIZATION TEST
// =====================================

use SmartHomeDB

// Crear colección de ejemplo

db.devices.insertMany([
    {
        name: "Smart Light",
        room: "Living Room",
        status: "ON",
        energyConsumption: 12
    },
    {
        name: "Smart Thermostat",
        room: "Bedroom",
        status: "OFF",
        energyConsumption: 45
    },
    {
        name: "Smart Camera",
        room: "Garage",
        status: "ON",
        energyConsumption: 20
    }
])

// =====================================
// QUERY BEFORE INDEX
// =====================================

db.devices.find({
    room: "Living Room"
}).explain("executionStats")

// =====================================
// CREATE INDEX
// =====================================

db.devices.createIndex({
    room: 1
})

// Verify Index

db.devices.getIndexes()

// =====================================
// QUERY AFTER INDEX
// =====================================

db.devices.find({
    room: "Living Room"
}).explain("executionStats")

// =====================================
// COMPOUND INDEX
// =====================================

db.devices.createIndex({
    room: 1,
    status: 1
})

// Compound Query

db.devices.find({
    room: "Living Room",
    status: "ON"
}).explain("executionStats")