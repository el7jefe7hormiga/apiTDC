import express from "express";
import morgan from "morgan";

import tdcRoutes from "./routes/tdc.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api", tdcRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Ruta no encontrada!, (/api/)" });
});

export default app;
