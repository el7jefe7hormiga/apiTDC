import { Router } from "express";
import {
  createAbonado,
  deleteAbonado,
  getAbonado,
  getAbonados,
  updateAbonado,
} from "../controllers/datos.controller.js";

const router = Router();

// GET todas los abonados
router.get("/abonados", getAbonados);

// GET una Abonado
router.get("/abonado/:id", getAbonado);

// DELETE An Abonado
router.delete("/abonado/:id", deleteAbonado);

// INSERT An Abonado
router.post("/abonado", createAbonado);

router.patch("/abonado/:id", updateAbonado);

export default router;
