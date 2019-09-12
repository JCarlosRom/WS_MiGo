require('dotenv').config();
import { Pool } from 'pg';

// Variables de conexión a la base de datos
const db_user = process.env.DB_USER;
const db_host = process.env.DB_HOST;
const db = process.env.DB;
const db_pass = process.env.DB_PASS;
const port = process.env.PORT;

export const pool = new Pool({
    user: db_user,
    host: db_host,
    database: db,
    password: db_pass,
    port: port
});