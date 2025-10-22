
require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize(
  process.env.PG_DATABASE,  
  process.env.PG_USER,      
  process.env.PG_PASSWORD,  
  {
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT || 5432,
    dialect: 'postgres',
    logging: false 
  }
);


const ProductoModel = sequelize.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  precio: {
    type: DataTypes.FLOAT, 
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'Productos', 
  timestamps: true 
});


async function syncDatabase() {
  try {
    
    await sequelize.authenticate();
    console.log('✅ Conexión a PostgreSQL establecida con éxito.');

    
    await ProductoModel.sync({ alter: true }); 
    console.log("✅ Tabla 'Productos' sincronizada (o actualizada).");
    
    return ProductoModel;
  } catch (error) {
    console.error('❌ Error al conectar o sincronizar la base de datos (PostgreSQL).', error.message);
    console.error('Revise las variables en .env y el estado de su servidor PostgreSQL.');
    throw error;
  }
}

module.exports = {
  sequelize,
  ProductoModel,
  syncDatabase
};