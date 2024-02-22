import { Router } from 'express';
import { getUserEmail } from '../Controllers/Querys/getUserEmail';
import { getUsers } from '../Controllers/Querys/getUsers';
import { getUserId } from '../Controllers/Querys/getUserId';
import { createUser } from '../Controllers/Mutations/createUser';
import { updateUser } from '../Controllers/Mutations/updateUser';
import { deleteUser } from '../Controllers/Mutations/deleteUser';
import { loginUser } from '../Controllers/Querys/loginUser';
import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
    user?: any;
}


const router = Router();

function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const accessToken = req.headers['authorization'];
    console.log(accessToken);
    if (!accessToken) return res.sendStatus(401);

    jwt.verify(accessToken, 'secret-key', (err: VerifyErrors | null, user: any) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}


router.get('/api/v1/users', getUsers);
router.get('/api/v1/users/:id', authenticateToken, getUserId);
// router.get('/api/v1/users/email/:email', getUserEmail);

router.post('/api/v1/users', authenticateToken, createUser);
router.post('/api/v1/users/login', loginUser);

router.put('/api/v1/users/:id', authenticateToken, updateUser);
router.delete('/api/v1/users/:id', authenticateToken, deleteUser);

export default router;