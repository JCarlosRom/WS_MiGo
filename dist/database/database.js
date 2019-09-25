"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;

var _pg = require("pg");

require('dotenv').config();

// Variables de conexión a la base de datos (.env)
var db_user = process.env.DB_USER;
var db_host = process.env.DB_HOST;
var db = process.env.DB;
var db_pass = process.env.DB_PASS;
var port = process.env.PORT; //Conexión a la base de datos

var pool = new _pg.Pool({
  user: db_user,
  host: db_host,
  database: db,
  password: db_pass,
  port: port
});
exports.pool = pool;