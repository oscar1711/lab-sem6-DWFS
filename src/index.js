import express from "express"
import cors from "cors"
// importamos la bd.js
import BD from '../config/db.js'

import citasRoutes from '../routers/Routers_Citas.js'
import productoRoutes from '../routers/Routers_Producto.js'

//definimos la variable para trabajar por express
const app = express();
app.use(cors());
app.use(express.json());
app.use('/citas' , citasRoutes);
app.use('/producto', productoRoutes)
//importamos el archivo de las rutas

//autetentificacion
try{
  await BD.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


// muestra mensaje en el navegador
app.get("/", (req,res) => {
    res.send("hola mundo");
});
//configuracion en el puerto del servidor

app.listen(5000, () =>{
    console.log("el servidor esta corriendo en http://localhost:5000");
});