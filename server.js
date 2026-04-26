const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// conexión con MongoDB 
mongoose.connect(process.env.MONGO_URI)
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

const User = mongoose.model("User", {
  email: String,
  password: String
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

 
    app.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    // Validar datos
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Faltan datos"
      });
    }

    // Normalizar email
    email = email.toLowerCase().trim();

    // Verificar si ya existe
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "El usuario ya existe"
      });
    }

    // Crear usuario
    const newUser = new User({
      email,
      password
    });

    await newUser.save();

    // Respuesta correcta
    res.json({
      success: true,
      message: "Usuario registrado correctamente"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Faltan datos"
      });
    }

    email = email.toLowerCase().trim();

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

    res.status(200).json({
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

app.get("/", (req, res) => {
  res.send("API funcionando");
});

// PUERTO
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});