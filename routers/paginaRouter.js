// Importar dependencias
import express from 'express';
import {
  paginaInicio,
  paginaNosotros,
  paginaViaje,
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

// Viaje
router.get('/viajes/:slug', paginaViaje);



// Exportar router
export default router;