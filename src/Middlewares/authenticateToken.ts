import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
    user?: any;
}

export function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const accessToken = req.headers['authorization'];
    console.log(accessToken);
    if (!accessToken) return res.sendStatus(401);

    jwt.verify(accessToken, 'secret-key', (err: VerifyErrors | null, user: any) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

