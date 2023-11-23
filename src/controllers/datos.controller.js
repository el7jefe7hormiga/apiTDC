import { pool } from "../db.js";

export const getAbonados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM datos");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal :(" });
  }
};

export const getAbonado = async (req, res) => {
  try {
    const { telefono } = req.params;
    const [rows] = await pool.query("SELECT * FROM datos WHERE telefono = ?", [
      telefono,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Abonado no encontrado!" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal :(" });
  }
};

export const deleteAbonado = async (req, res) => {
  try {
    const { telefono } = req.params;
    const [rows] = await pool.query("DELETE FROM datos WHERE telefono = ?", [telefono]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Abonado no encontrado!" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal :(" });
  }
};

export const createAbonado = async (req, res) => {
  try {
    const { nombre, direccion, gps, datos_tecnicos, memo } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO datos (nombre, direccion, gps, datos_tecnicos, memo) VALUES (?, ?, ?, ?, ?)",
      [nombre,  direccion, gps, datos_tecnicos, memo]
    );
    res.status(201).json({ telefono, nombre, direccion, gps, datos_tecnicos, memo });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal :(" });
  }
};

export const updateAbonado = async (req, res) => {
  try {
    const { telefono } = req.params;
    const { nombre, direccion, gps, datos_tecnicos, memo } = req.body;

    const [result] = await pool.query(
      "UPDATE datos SET nombre = IFNULL(?, nombre), direccion = IFNULL(?, direccion), gps = IFNULL(?, gps), datos_tecnicos = IFNULL(?, datos_tecnicos), memo = IFNULL(?, memo) WHERE telefono = ?",
      [nombre, direccion, gps, datos_tecnicos, memo]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Abonado no encontrado!" });

    const [rows] = await pool.query("SELECT * FROM datos WHERE telefono = ?", [
      telefono,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal :(" });
  }
};
