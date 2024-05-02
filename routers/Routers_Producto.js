import express from "express";
import {agregarProducto,mostrarProducto, mostrarUnProducto, modificarProducto , eliminarProducto} from "../controllers/ProductoControllers.js";

const router = express.Router();

router.post('/',agregarProducto);
router.get('/',mostrarProducto);
router.get('/:id',mostrarUnProducto);
router.put('/:id',modificarProducto);
router.delete('/:id',eliminarProducto);

export default router