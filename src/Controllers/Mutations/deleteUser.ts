import { Request, Response } from "express";
import { Users } from "../../Entities/Users";

export const deleteUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params
        const user = await Users.findOne({
            where: {
                id: parseInt(id)
            }
        })

        if (user) {
            await user.remove();
        } else {
            return res.json({ message: 'User not found' })
        }

        return res.json({ message: 'User deleted successfully' })
    } catch (err: any) {

        return res.status(500).json({ message: err.message })
    }


}