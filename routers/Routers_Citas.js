import express from 'express';
import { agregarCitas , mostrarCitas, mostrarUnaCita ,modificarCita, eliminarCita } from '../controllers/CitasControllers.js';

const router = express.Router();

router.post('/',agregarCitas);
router.get('/',mostrarCitas);
router.get('/:id',mostrarUnaCita);
router.put('/:id',modificarCita);
router.delete('/:id',eliminarCita);

export default router