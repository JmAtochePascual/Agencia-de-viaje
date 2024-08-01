import Viaje from "../models/Viaje.js";

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

// Pagina viajes
const paginaViajes = async (req, res) => {

  try {
    // Obtener todos los viajes de la base de datos
    const viajes = await Viaje.findAll();

    res.render('viajes', {
      pagina: 'Proximos Viajes',
      viajes,
    });

  } catch (error) {
    console.log(error);
  }

};

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
}