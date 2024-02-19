import express from 'express';
import { getCita,createCita} from '../controller/CitasController.js';


const rotuer = express.Router();
rotuer.get('/cita/users', getCita);
rotuer.post('/cita/users', createCita);

export const routercita = rotuer;