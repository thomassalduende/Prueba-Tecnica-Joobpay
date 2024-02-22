import { Router } from 'express';
import { getUserEmail } from '../Controllers/Querys/getUserEmail';
import { getUsers } from '../Controllers/Querys/getUsers';
import { getUserId } from '../Controllers/Querys/getUserId';
import { createUser } from '../Controllers/Mutations/createUser';
import { updateUser } from '../Controllers/Mutations/updateUser';
import { deleteUser } from '../Controllers/Mutations/deleteUser';
import { loginUser } from '../Controllers/Querys/loginUser';

const router = Router();

router.get('/users', getUsers);
router.get('/user/:id', getUserId);
router.get('/user/email/:email', getUserEmail);
router.post('/user', createUser);
router.post('/login', loginUser);
router.patch('/user', updateUser);
router.delete('/user', deleteUser);

export default router;