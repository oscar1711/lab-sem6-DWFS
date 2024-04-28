//importar el modelo
import Citas from '../models/Citas.js';


// crear una funcion para agragar citas

export const agregarCitas = async (req,res) => {
    try {
        await Citas.create(req.body)
        res.json({msg: "cita creada con exito"})
        
    } catch (error) {
        res.json({msg: error.message})
        
    }
}


export const mostrarCitas = async (req,res) => {
    try {
        let citas = await Citas.findAll()
        res.json(citas)
        
    } catch (error) {
        res.json({msg: error.message})
        
    }
}

export const mostrarUnaCita = async(req,res) => {
    try {
        let citas = await Citas.findAll({where:{id:req.params.id}});
        if (!citas[0]){
            res.json({msg: "no se encuentra la cita"});
        }
        res.json(citas[0]);       
    } catch (error) {
        res.json({msg: error.message})
    }
}
export const modificarCita = async(req,res) => {
    try {
        await Citas.update(req.body,{where:{id:req.params.id}});
        res.json({msg: "se modifico la cita"});       
    } catch (error) {
        res.json({msg: error.message})
    }
}
export const eliminarCita = async(req,res) => {
    try {
        let citas = await Citas.findAll({where:{id:req.params.id}});
        if (!citas[0]){
            res.json({msg: "no se encuentra la cita"});
        }
        await citas[0].destroy(); 
        res.json({msg: "se elimino la cita"});      
    } catch (error) {
        res.json({msg: error.message})
    }
}


