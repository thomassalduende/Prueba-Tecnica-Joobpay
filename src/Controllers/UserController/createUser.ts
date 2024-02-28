import { Request, Response } from "express";
import { validateUser } from "../UsersSchema";
import { Users } from "../../Entities/Users";

export const createUser = async (req: Request, res: Response) => {
    const result = await validateUser(req.body);

    if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newUser = new Users();

    newUser.email = result.data.email;
    newUser.name = result.data.name;
    newUser.password = result.data.password;
    newUser.phone = result.data.phone;
    newUser.address = result.data.address;

    await newUser.save();

    return res.status(201).json(newUser);

}