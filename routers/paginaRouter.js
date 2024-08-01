// Importar dependencias
import express from 'express';
import {
  paginaInicio
} from '../controllers/paginaController.js';


// Importar router
const router = express.Router();

// Rutas
router.get('/', paginaInicio);


// Exportar router
export default router;