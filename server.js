import express from "express";
import cors from "cors";
import { obtenerContratos} from "./src/models/consultas.js";

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.get('/contratos', async (req, res) => {
  try {
    const contratos = await obtenerContratos();
    res.json(contratos);
  } catch (error) {
    console.error('Error al obtener los contratos:', error);
    res.status(500).json({ error: 'Error al obtener los contratos' });
  }
});

app.post('/contratos', async (req, res, next) => {
  const { titulo, img, descripcion } = req.body;
  try {
    const newPost = await addPost(titulo, img, descripcion);
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error al agregar el post:", error);
    next(error)
  }
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
