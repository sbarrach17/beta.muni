import express from 'express';
import cors from 'cors'
import { obtenerLicitaciones } from './src/models/consultas.js';

const app = express();
const PORT = 3000; 
app.use (cors())

app.get('/licitaciones', async (req, res) => {
  try {
    const licitaciones = await obtenerLicitaciones();
    res.json(licitaciones);
  } catch (error) {
    console.error('Error al obtener los licitaciones:', error);
    res.status(500).json({ error: 'Error al obtener los licitaciones' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
