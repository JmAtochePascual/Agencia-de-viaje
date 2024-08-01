
// Pagina inicio
const paginaInicio = (req, res) => {
  res.render('inicio', {
    pagina: 'Inicio',
  });
};

// Pagina nosotros
const paginaNosotros = (req, res) => {
  res.render('nosotros', {
    pagina: 'Sobre Nosotros',
  });
};

export {
  paginaInicio,
  paginaNosotros,
}