// Importar dependencias
import express from 'express';
import {
  paginaInicio,
  paginaNosotros,
} from '../controllers/paginaController.js';


// Importar router
const router = express.Router();

// Inicio
router.get('/', paginaInicio);

// Nosotros
router.get('/nosotros', paginaNosotros);



// Exportar router
export default router;