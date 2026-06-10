const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// =============================
//  MIDDLEWARE
// =============================
app.use(cors());
app.use(express.json());


// =============================
//  MONGODB CONNECTION
// =============================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log("Mongo error:", err));


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
  installation: Date,
  lastUp: Date
});

const User = mongoose.model("User", {
  email: String,
  password: String
});


// =============================
//  DEVICES (CRUD)
// =============================


// CREATE / UPDATE (INTELIGENTE)
app.post("/devices", async (req, res) => {
  try {
    const { _id, ...deviceData } = req.body;


    // VALIDACIÓN
    const forbiddenWords = [
      "horrible",
      "puto",
      "pendejo",
      "idiota",
      "estupido",
      "cabron"
    ];

    const deviceName = (deviceData.deviceName || "").toLowerCase();
    const location = (deviceData.location || "").toLowerCase();

    const hasBadWord =
      forbiddenWords.some(word => deviceName.includes(word)) ||
      forbiddenWords.some(word => location.includes(word));

    if (hasBadWord) {
      return res.status(400).json({
        success: false,
        message: "Se detectaron palabras no permitidas"
      });
    }

// Fecha actual
const now = new Date();

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
    const newDevice = new Device({
  ...deviceData,
  installation: now,
  lastUp: now
});
    await newDevice.save();

    return res.json({
      success: true,
      mode: "created",
      data: newDevice
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// GET ALL DEVICES
app.get("/devices", async (req, res) => {
  try {
    const devices = await Device.find();

    return res.json({
      success: true,
      data: devices
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// UPDATE BY ID
app.put("/devices/:id", async (req, res) => {
  try {
    const updatedDevice = await Device.findByIdAndUpdate(
  _id,
  {
    ...deviceData,
    lastUp: now
  },
  { new: true }
);

    return res.json({
      success: true,
      data: updated
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// DELETE
app.delete("/devices/:id", async (req, res) => {
  try {
    await Device.findByIdAndDelete(req.params.id);

    return res.json({
      success: true,
      message: "Eliminado correctamente"
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// =============================
//  LOGIN / REGISTER
// =============================
app.post("/login", async (req, res) => {
  try {
    let { email, password, mode } = req.body;
console.log("BODY RECIBIDO:", req.body);
console.log("EMAIL:", email);
console.log("PASSWORD:", password);
console.log("MODE:", mode);

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Faltan datos"
      });
    }

    email = email.toLowerCase().trim();

// Validar correo electrónico
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return res.status(400).json({
    success: false,
    message: "Correo electrónico inválido"
  });
}

// Validar contraseña vacía
if (!password || password.trim() === "") {
  return res.status(400).json({
    success: false,
    message: "Debes ingresar una contraseña"
  });
}

// Mínimo 8 caracteres
if (password.length < 8) {
  return res.status(400).json({
    success: false,
    message: "La contraseña debe tener al menos 8 caracteres"
  });
}

// Debe contener al menos una letra y un número
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;

if (!passwordRegex.test(password)) {
  return res.status(400).json({
    success: false,
    message: "La contraseña debe contener al menos una letra y un número"
  });
}
  

    // REGISTER
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
    return res.status(500).json({
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