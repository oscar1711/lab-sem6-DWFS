import BD from '../config/db.js'
import { DataTypes } from 'sequelize';


const Producto = BD.define('productos',{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT(10,2),
        allowNull: false
    },
    stock: {
        type: DataTypes.FLOAT(10,2),
        allowNull: true
    }    
});

export default Producto;