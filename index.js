// Importar dependencias
import express from 'express';
import routerPagina from './routers/paginaRouter.js';


// Instanciar express
const app = express();

// Habilitar formulario
app.use(express.urlencoded({ extended: true }));

// Habilitar carpeta public
app.use(express.static('public'));

// Habilitar template engine pug
app.set('view engine', 'pug');
app.set('views', './views');

// Habilitar router
app.use('/', routerPagina)

// Levantar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});