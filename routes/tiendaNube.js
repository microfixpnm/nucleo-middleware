import express from "express";
const router = express.Router();

router.post("/productos", (req, res) => {
  res.json({ msg: "Endpoint de productos de Tienda Nube" });
});

export default router;