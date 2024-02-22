import { Request, Response } from "express";
import { Users } from "../../Entities/Users";

export const getUsers = async (req: Request, res: Response) => {

    try {
        const users = await Users.find()
        return res.status(200).json(users)

    } catch (err: any) {
        return res.status(404).json({ message: err.message })
    }
}