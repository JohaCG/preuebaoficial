import express from 'express';
import { getTypeUsers,createTypeUsers} from '../controller/TypeUsersController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/type/users', getTypeUsers);
rotuer.post('/type/users', createTypeUsers);

export default rotuer;