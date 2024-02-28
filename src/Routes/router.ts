import { Router } from 'express';
import { getUserEmail } from '../Controllers/UserController/getUserEmail';
import { getUsers } from '../Controllers/UserController/getUsers';
import { getUserId } from '../Controllers/UserController/getUserId';
import { createUser } from '../Controllers/UserController/createUser';
import { updateUser } from '../Controllers/UserController/updateUser';
import { deleteUser } from '../Controllers/UserController/deleteUser';
import { loginUser } from '../Controllers/UserController/loginUser';
import { authenticateToken } from '../Middlewares/authenticateToken';

const router = Router();


router.get('/api/v1/users', getUsers);
router.get('/api/v1/users/:id', authenticateToken, getUserId);
// router.get('/api/v1/users/email/:email', getUserEmail);

router.post('/api/v1/users', authenticateToken, createUser);
router.post('/api/v1/users/login', loginUser);

router.put('/api/v1/users/:id', authenticateToken, updateUser);
router.delete('/api/v1/users/:id', authenticateToken, deleteUser);

export default router;