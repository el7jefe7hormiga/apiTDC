import { pool } from "../db.js";

export const getTdc = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tarjetas");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal :(" });
  }
};

export const getTarjeta = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM tarjetas WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Tarjeta no encontrada!" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal :(" });
  }
};

export const deleteTarjeta = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM tarjetas WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Tarjeta no encontrada!" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal :(" });
  }
};

export const createTarjeta = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO tarjetas (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.status(201).json({ id: rows.insertId, name, salary });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal :(" });
  }
};

export const updateTarjeta = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    const [result] = await pool.query(
      "UPDATE tarjetas SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Tarjeta no encontrada!" });

    const [rows] = await pool.query("SELECT * FROM tarjetas WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal :(" });
  }
};
