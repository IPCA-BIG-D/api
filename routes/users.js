import express from 'express';
import { getUsers,creatUser,getUserId,deleteUser,updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/',creatUser);

router.get('/:id', getUserId );

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;