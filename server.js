import express from "express";
import dotenv from "dotenv";

import nucleoRoutes from "./routes/nucleo.js";
import tiendaNubeRoutes from "./routes/tiendaNube.js";

dotenv.config();

const app = express();
app.use(express.json());

// Ruta simple para probar el servido
app.use("/nucleo", nucleoRoutes);
app.use("/tiendanube", tiendaNubeRoutes);

app.get("/", (req, res) => {
  res.json({ status: "Middleware funcionando 🚀" });
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});