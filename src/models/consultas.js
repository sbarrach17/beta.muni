import pg from "pg";
import "dotenv/config";

const { Pool } = pg;
const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

const obtenerLicitaciones = async () => {
  try {
    const consulta = "SELECT * FROM contratos";
    const result = await pool.query(consulta);
    console.log("Contratos obtenidos:", result.rows);
    return result.rows;
  } catch (error) {
    console.error("Error al obtener los contratos:", error);
    throw error;
  }
};

export { obtenerLicitaciones };
