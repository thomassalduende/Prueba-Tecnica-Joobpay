import { Request, Response } from "express";
import { Users } from "../../Entities/Users";

export const getUserEmail = async (req: Request, res: Response) => {

    const { email } = req.params;
    console.log(req.params)

    console.log(email);

    try {
        const user = await Users.find({
            where: {
                email: email
            }
        })
        return res.status(200).json(user)

    } catch (err: any) {
        return res.status(404).json({ message: err.message })
    }
}