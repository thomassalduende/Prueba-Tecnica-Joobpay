import { Request, Response } from "express";
import { Users } from "../../Entities/Users"
import { sign } from "jsonwebtoken"

export const loginUser = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    const user = await Users.findOne({
        where: {
            email: email,
            password: password
        }
    })

    if (!user) {
        return res.status(401).json({ message: 'Correo o contraseña inválidos' });
    }

    try {

        const accessToken_User = sign({ id: user.id }, 'secret-key')

        const usuario = {
            accessToken: accessToken_User,
            ...((({ id, password, ...rest }) => rest)(user))
        };


        return res.status(200).json(usuario)
    } catch (error: any) {

        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}