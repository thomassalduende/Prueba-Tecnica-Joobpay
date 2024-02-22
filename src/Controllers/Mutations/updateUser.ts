import { Request, Response } from "express";
import { Users } from "../../Entities/Users";
import { validatePartialUser } from "../UsersSchema";

export const updateUser = async (req: Request, res: Response) => {

    const { id } = req.body;

    const result = await validatePartialUser(req.body);
    try {

        const user = await Users.findOne({
            where: {
                id: parseInt(id)
            }
        });

        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }
        const updatedUser = Users.create({
            ...user,
            ...result.data,
        });

        await updatedUser.save();

        return res.json(updatedUser);

    } catch (error: any) {

        return res.status(500).json({ message: error.message });
    }
}