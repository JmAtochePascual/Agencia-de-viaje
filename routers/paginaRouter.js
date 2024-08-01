// Importar dependencias
import express from 'express';
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
} from '../controllers/paginaController.js';


// Importar router
const router = express.Router();

// Inicio
router.get('/', paginaInicio);

// Nosotros
router.get('/nosotros', paginaNosotros);

// Viajes
router.get('/viajes', paginaViajes);



// Exportar router
export default router;