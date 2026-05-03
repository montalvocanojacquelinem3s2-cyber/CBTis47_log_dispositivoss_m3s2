const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conexión MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));


// =============================
// MODELO DEVICE
// =============================
const Device = mongoose.model("Device", {
  deviceName: String,
  type: String,
  brand: String,
  model: String,
  serial: String,
  location: String,
  status: String,
  battery: String, // lo dejamos string como lo usas
  online: Boolean,
  installation: String,
  lastUp: String
});


// =============================
// DEVICES ROUTES
// =============================

// CREAR dispositivo
app.post("/devices", async (req, res) => {
  try {
    const newDevice = new Device(req.body);
    await newDevice.save();

    res.status(200).json({
      success: true,
      data: newDevice
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// OBTENER TODOS
app.get("/devices", async (req, res) => {
  try {
    const devices = await Device.find();

    res.status(200).json({
      success: true,
      data: devices
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// ACTUALIZAR
app.put("/devices/:id", async (req, res) => {
  try {
    const updatedDevice = await Device.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: updatedDevice
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// ELIMINAR
app.delete("/devices/:id", async (req, res) => {
  try {
    await Device.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Dispositivo eliminado"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// RUTA BASE

app.get("/", (req, res) => {
  res.send("API funcionando");
});

// SERVIDOR

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});