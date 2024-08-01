// Importar dependencias
import express from 'express';
import {
  paginaInicio,
  paginaNosotros,
  paginaTestomoniales,
  paginaViaje,
  paginaViajes,
  registrarTestomial,
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

// Testomoniales
router.get('/testimoniales', paginaTestomoniales);
router.post('/testimoniales', registrarTestomial);



// Exportar router
export default router;