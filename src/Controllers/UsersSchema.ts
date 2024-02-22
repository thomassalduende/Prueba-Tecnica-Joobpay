import { z } from "zod";
import { Users } from "../Types/types";

const userSchema = z.object({
    email: z.string().email({
        message: 'User email must be a valid email address'
    }),
    name: z.string().min(2, {
        message: 'User name must be at least 2 characters long'
    }),
    phone: z.string().regex(/^\d{9}$/i, {
        message: 'User phone must be a 9-digit number'
    }),
    address: z.string().min(5, {
        message: 'User address must be at least 5 characters long'
    }),
    password: z.string().min(8, {
        message: 'User password must be at least 8 characters long'
    }),
});

export async function validateUser(object: Users) {
    return userSchema.safeParseAsync(object);
}

export async function validatePartialUser(object: Users) {
    return userSchema.partial().safeParseAsync(object);
}
