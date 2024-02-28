import { Users } from "../Entities/Users";

export async function UserID(id: string) {
    const user = await Users.findOne({
        where: {
            id: parseInt(id)
        }
    })

    return user;
}