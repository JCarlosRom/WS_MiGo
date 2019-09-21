"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _inicio_fleet = require("../controllers/inicio_fleet.controller");

var router = (0, _express.Router)(); //CONSULTAR RAIZ CON METODO GET inicio_fleet/

router.get('/', function (req, res) {
  res.send("Web service ejecutandose: módulo Inicio Fleet\n");
});
/*MIGO PETICIONES
    Todas las peticiones requieren la estructura siguiente para su body:

    {
        "id_usuario": ?:id
    }

    Excepción de inicio_fleet/interfaz_42/fleet_home_2_filtro, esta requiere:

    {
        "id_usuario": ?id
        "fecha_filtro": ?date
    }

*/
// inicio_fleet/interfaz41/fleet_home

router.post('/interfaz_41/fleet_home', _inicio_fleet.post_interfaz41_fleet_home); // inicio_fleet/interfaz42/fleet_home_2

router.post('/interfaz_42/fleet_home_2', _inicio_fleet.post_interfaz42_fleet_home); // inicio_fleet/interfaz42/fleet_home_2_filtro

router.post('/interfaz_42/fleet_home_2_filtro', _inicio_fleet.post_interfaz42_fleet_home_filtro); // inicio_fleet/interfaz121/tiempo_real

router.post('/interfaz_121/tiempo_real', _inicio_fleet.post_interfaz121_tiempo_real); // inicio_fleet/interfaz_124/socio_conductor

router.post('/interfaz_124/socio_conductor', _inicio_fleet.post_interfaz124_socio_conductor); // inicio_fleet/interfaz_126/socio_no_conductor

router.post('/interfaz_126/socio_no_conductor', _inicio_fleet.post_interfaz126_socio_no_conductor);
var _default = router;
exports["default"] = _default;