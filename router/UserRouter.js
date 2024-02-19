import express from 'express';
import { createUsers,buscarEspecialidad} from '../controller/UserController.js';
const rotuer = express.Router();
rotuer.post('/register', createUsers);
rotuer.get('/persona/buscar/:especialidad', buscarEspecialidad);
export const RouterUsuer = rotuer;
