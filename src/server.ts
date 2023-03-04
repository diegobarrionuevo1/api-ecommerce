import express from 'express';

import dotenv from 'dotenv';
import handles from './routes/index';
import cors from 'cors';

const server = express();

const PORT = process.env.PORT || 5000;

//Load ENV vars
dotenv.config();

//Cors enable
server.use(cors());

//usamos el middleware para parsear json en el body
server.use(express.json());

//Routes
server.use('/api/v1', handles);

server.get('/', (req, res) => {
  res.json({ message: 'Deberias iniciar los request en /api/v1/<entidad>' });
});

server.listen(PORT, () => {
  console.log(`Sevidor en http://localhost:${PORT}`);
});