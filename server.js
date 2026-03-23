const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// conexión con MongoDB 
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

// modelo
const Device = mongoose.model("Device", {
  deviceName: String,
  type: String,
  brand: String,
  model: String,
  serial: String,
  location: String,
  status: String,
  battery: Number,
  online: Boolean,
  installation: String,
  lastUp: String
});

// GUARDAR DATOS
app.post("/devices", async (req, res) => {
  try {
    const data = new Device(req.body);
    await data.save();
    res.json({ mensaje: "Guardado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// VER DATOS
app.get("/devices", async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUERTO
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});