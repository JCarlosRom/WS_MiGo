require('dotenv').config();
import { Pool } from 'pg';

// Variables de conexión a la base de datos (.env)
const db_user_central = process.env.DB_USER_CENTRAL;
const db_host_central = process.env.DB_HOST_CENTRAL;
const db_central = process.env.DB_CENTRAL;
const db_pass_central = process.env.DB_PASS_CENTRAL;
const db_port_central = process.env.DB_PORT_CENTRAL;

const db_user_usuarios = process.env.DB_USER_USUARIOS;
const db_host_usuarios = process.env.DB_HOST_USUARIOS;
const db_usuarios = process.env.DB_USUARIOS;
const db_pass_usuarios = process.env.DB_PASS_USUARIOS;
const db_port_usuarios = process.env.DB_PORT_USUARIOS;

//Conexión a la base de datos central
export const pool = new Pool({
    user: db_user_central,
    host: db_host_central,
    database: db_central,
    password: db_pass_central,
    port: db_port_central
});

//conexión a base de datos de usuarios
export const pool2 = new Pool ({
    user: db_user_usuarios,
    host: db_host_usuarios,
    database: db_usuarios,
    password: db_pass_usuarios,
    port: db_port_usuarios,
});