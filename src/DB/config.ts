import { config } from "dotenv";

config()

export const DB = {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'Thomas44',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_DATABASE || 'Prueba-Tecnica'
}

export const PORT = process.env.PORT || 4000