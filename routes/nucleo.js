import { Router } from "express";
import nucleoService from "../services/nucleoService.js";

const router = Router();

// Ruta simple para testear conexión con Grupo Núcleo
router.get("/productos", async (req, res) => {
  try {
    const productos = await nucleoService.getProducts();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/stock/:sku", async (req, res) => {
  try {
    const stock = await nucleoService.getStock(req.params.sku);
    res.json(stock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/precio/:sku", async (req, res) => {
  try {
    const price = await nucleoService.getPrice(req.params.sku);
    res.json(price);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear pedido
router.post("/pedido", async (req, res) => {
  try {
    const respuesta = await nucleoService.createOrder(req.body);
    res.json(respuesta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;