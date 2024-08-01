import Testimonial from "../models/Testomonial.js";
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

// Pagina viaje
const paginaViaje = async (req, res) => {
  // Obtener el slug de la URL
  const { slug } = req.params;

  try {
    // Obtener viaje de la base de datos
    const viaje = await Viaje.findOne({ where: { slug } });

    res.render('viaje', {
      pagina: 'Informacion Viaje',
      viaje,
    });

  } catch (error) {
    console.log(error);
  }

};

// Paginas Testomoniales
const paginaTestomoniales = async (req, res) => {

  try {
    // Obtener testimoniales de la base de datos
    const testimoniales = await Testimonial.findAll();

    res.json({
      pagina: 'Testimoniales',
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};



export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaViaje,
  paginaTestomoniales,
}