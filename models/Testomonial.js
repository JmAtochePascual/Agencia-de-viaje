// Importar dependencias
import { DataTypes } from "sequelize";
import db from "../config/db.js";



// Definir el modelo Testonomial
const Testimonial = db.define("testimoniales", {
  nombre: {
    type: DataTypes.STRING,
  },
  correo: {
    type: DataTypes.STRING,
  },
  mensaje: {
    type: DataTypes.STRING,
  },
});




export default Testimonial;