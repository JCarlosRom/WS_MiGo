"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool2 = exports.pool = void 0;

var _pg = require("pg");

require('dotenv').config();

// Variables de conexión a la base de datos (.env)
var db_user_central = process.env.DB_USER_CENTRAL;
var db_host_central = process.env.DB_HOST_CENTRAL;
var db_central = process.env.DB_CENTRAL;
var db_pass_central = process.env.DB_PASS_CENTRAL;
var db_port_central = process.env.DB_PORT_CENTRAL;
var db_user_usuarios = process.env.DB_USER_USUARIOS;
var db_host_usuarios = process.env.DB_HOST_USUARIOS;
var db_usuarios = process.env.DB_USUARIOS;
var db_pass_usuarios = process.env.DB_PASS_USUARIOS;
var db_port_usuarios = process.env.DB_PORT_USUARIOS; //Conexión a la base de datos central

var pool = new _pg.Pool({
  user: db_user_central,
  host: db_host_central,
  database: db_central,
  password: db_pass_central,
  port: db_port_central
}); //conexión a base de datos de usuarios

exports.pool = pool;
var pool2 = new _pg.Pool({
  user: db_user_usuarios,
  host: db_host_usuarios,
  database: db_usuarios,
  password: db_pass_usuarios,
  port: db_port_usuarios
});
exports.pool2 = pool2;