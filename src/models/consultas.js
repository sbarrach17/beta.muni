import pg from 'pg';
import 'dotenv/config';
const { Pool } = pg;
const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

const agregarContrato = async (razon_social, rut, licitacion, contacto, correo_contacto, telefono_contacto, direccion, tipo_contrato, estado_contrato, monto, inicio_contrato, fin_contrato, notas_internas) => {
  try {
    const consulta =
      "INSERT INTO contratos(razon_social, rut, licitacion, contacto, correo_contacto, telefono_contacto, direccion, tipo_contrato, estado_contrato, monto, inicio_contrato, fin_contrato, notas_internas) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *";
    const values = [razon_social, rut, licitacion, contacto, correo_contacto, telefono_contacto, direccion, tipo_contrato, estado_contrato, monto, inicio_contrato, fin_contrato, notas_internas]; 
    const result = await pool.query(consulta, values);
    console.log("Contrato agregado:", result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error("Error al agregar contrato:", error);
    throw error;
  }
};



const obtenerContratos = async () => {
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



export { obtenerContratos, agregarContrato };
