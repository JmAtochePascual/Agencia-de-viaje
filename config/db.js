// Importar dependencias
import { Sequelize } from "sequelize";

// Conectar base de datos
const db = new Sequelize('agenciaviajes', 'root', '7942635Jean', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306',
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases: 0,
});

export default db;