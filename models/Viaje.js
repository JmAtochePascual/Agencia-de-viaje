// Importaciones
import { DataTypes } from "sequelize";
import db from "../config/db.js";

// Crear modelo Viaje
const Viaje = db.define('viaje', {
  titulo: {
    type: DataTypes.STRING,
  },
  precio: {
    type: DataTypes.DECIMAL,
  },
  fecha_ida: {
    type: DataTypes.DATE,
  },
  fecha_vuelta: {
    type: DataTypes.DATE,
  },
  imagen: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  disponibles: {
    type: DataTypes.INTEGER,
  },
  slug: {
    type: DataTypes.STRING,
  }
});

export default Viaje;
