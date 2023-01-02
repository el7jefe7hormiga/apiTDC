import { Router } from "express";
import {
  createTarjeta,
  deleteTarjeta,
  getTarjeta,
  getTdc,
  updateTarjeta,
} from "../controllers/tdc.controller.js";

const router = Router();

// GET all Tdc
router.get("/tdc", getTdc);

// GET An Tarjeta
router.get("/tdc/:id", getTarjeta);

// DELETE An Tarjeta
router.delete("/tdc/:id", deleteTarjeta);

// INSERT An Tarjeta
router.post("/tdc", createTarjeta);

router.patch("/tdc/:id", updateTarjeta);

export default router;
