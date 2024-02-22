import { Request, Response } from "express";
import { Users } from "../../Entities/Users";

export const getUserId = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
        const user = await Users.find({
            where: {
                id: parseInt(id)
            }
        })
        return res.status(200).json(user)

    } catch (err: any) {
        return res.status(404).json({ message: err.message })
    }
}