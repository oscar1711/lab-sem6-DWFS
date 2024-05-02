//importar el modelo
import Producto from '../models/Producto.js'

// crear una funcion para agragar citas

export const agregarProducto = async (req,res) => {
    try {
        await Producto.create(req.body)
        res.json({msg: "Producto creada con exito"})
        
    } catch (error) {
        res.json({msg: error.message})
        
    }
}


export const mostrarProducto = async (req,res) => {
    try {
        let producto = await Producto.findAll()
        res.json(producto)
        
    } catch (error) {
        res.json({msg: error.message})
        
    }
}

export const mostrarUnProducto = async(req,res) => {
    try {
        let producto = await Producto.findAll({where:{id:req.params.id}});
        if (!producto[0]){
            res.json({msg: "no se encuentra la cita"});
        }
        res.json(producto[0]);       
    } catch (error) {
        res.json({msg: error.message})
    }
}
export const modificarProducto = async(req,res) => {
    try {
        await Producto.update(req.body,{where:{id:req.params.id}});
        res.json({msg: "se modifico la cita"});       
    } catch (error) {
        res.json({msg: error.message})
    }
}
export const eliminarProducto = async(req,res) => {
    try {
        let producto = await Producto.findAll({where:{id:req.params.id}});
        if (!producto[0]){
            res.json({msg: "no se encuentra la cita"});
        }
        await producto[0].destroy(); 
        res.json({msg: "se elimino la cita"});      
    } catch (error) {
        res.json({msg: error.message})
    }
}
