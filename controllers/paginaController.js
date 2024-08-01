import { render } from "pug";
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

    res.render('testimoniales', {
      pagina: 'Testimoniales',
      testimoniales,
    });

  } catch (error) {
    console.log(error);
  }
};


// Resgistrar testimonio
const registrarTestomial = async (req, res) => {
  // Validar formulario
  const { nombre, correo, mensaje } = req.body;

  // Validar formulario
  const error = [nombre, correo, mensaje].some((valor) => valor.trim() === '');

  try {
    // Obtener testimoniales de la base de datos
    const testimoniales = await Testimonial.findAll();

    if (error) {
      return res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales,
        error: 'Todos los campos son obligatorios',
      });
    }
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
  registrarTestomial
}