import express from "express";
const router = express.Router();

router.get("/productos", (req, res) => {
  res.json({ msg: "Endpoint de productos de Grupo Núcleo" });
});

export default router;