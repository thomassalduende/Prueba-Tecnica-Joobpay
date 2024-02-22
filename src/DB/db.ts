import { DataSource } from "typeorm";
import { DB } from "./config";
import { Users } from "../Entities/Users";

export const ConnectionBD = new DataSource({
    type: 'postgres',
    username: DB.username,
    password: DB.password,
    host: DB.host,
    port: Number(DB.port),
    database: DB.database,
    entities: [Users],
    synchronize: true,
    logging: true
})