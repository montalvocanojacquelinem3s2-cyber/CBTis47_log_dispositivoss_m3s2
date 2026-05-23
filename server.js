const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));


// =============================
//  MODELOS
// =============================
const Device = mongoose.model("Device", {
  deviceName: String,
  type: String,
  brand: String,
  model: String,
  serial: String,
  location: String,
  status: String,
  battery: String,
  online: Boolean,
  installation: String,
  lastUp: String
});

const User = mongoose.model("User", {
  email: String,
  password: String
});


// =============================
//  DEVICES
// =============================

app.post("/devices", async (req, res) => {
  try {

    const { _id, ...deviceData } = req.body;

    // UPDATE
    if (_id) {

      const updatedDevice = await Device.findByIdAndUpdate(
        _id,
        deviceData,
        { new: true }
      );

      return res.json({
        success: true,
        mode: "updated",
        data: updatedDevice
      });
    }

    // CREATE
    const newDevice = new Device(deviceData);
    await newDevice.save();

    res.json({
      success: true,
      mode: "created",
      data: newDevice
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
});


app.get("/devices", async (req, res) => {
  try {
    const devices = await Device.find();
    res.json({ success: true, data: devices });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.put("/devices/:id", async (req, res) => {
  try {
    const updated = await Device.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({ success: true, data: updated });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.delete("/devices/:id", async (req, res) => {
  try {
    await Device.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: "Eliminado" });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


// =============================
//  LOGIN / REGISTER
// =============================

app.post("/login", async (req, res) => {
  try {
    let { email, password, mode } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Faltan datos"
      });
    }

    email = email.toLowerCase().trim();

    // REGISTRO
    if (mode === "register") {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "El usuario ya existe"
        });
      }

      const newUser = new User({ email, password });
      await newUser.save();

      return res.json({
        success: true,
        message: "Usuario registrado"
      });
    }

    // LOGIN
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Usuario no encontrado"
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Contraseña incorrecta"
      });
    }

    return res.json({
      success: true,
      user: {
        id: user._id,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// =============================
//  BASE
// =============================

app.get("/", (req, res) => {
  res.send("API funcionando");
});


// =============================
//  SERVER
// =============================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});