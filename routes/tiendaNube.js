import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Ruta Tienda Nube funcionando" });
});

export default router;