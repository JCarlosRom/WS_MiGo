"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _billetera = require("../controllers/billetera.controller");

var router = (0, _express.Router)(); //CONSULTAR RAIZ CON METODO GET billetera/

router.get('/', function (req, res) {
  res.send("Web service ejecutandose: módulo Mi Billetera\n");
});
/*MIGO PETICIONES
    Todas las peticiones requieren la estructura siguiente para su body:

    {
        "id_chofer": ?:id
    }

*/
// billetera/interfaz_75/billetera

router.post('/interfaz_75/billetera', _billetera.post_interfaz75_MiBilletera); // billetera/interfaz_78/ganancias

router.post('/interfaz_78/ganancias', _billetera.post_interfaz78_Ganancias); // billetera/interfaz_78_2/ganancias

router.post('/interfaz_78_2/ganancias', _billetera.post_interfaz78_2_Ganancias); // billetera/interfaz_79/tarjeta

router.post('/interfaz_79/tarjeta', _billetera.post_interfaz79_Tarjeta); // billetera/interfaz_79_2/tarjeta

router.post('/interfaz_79_2/tarjeta', _billetera.post_interfaz79_2_Tarjeta); // billetera/interfaz_80/tarjeta

router.post('/interfaz_80/tarjeta', _billetera.post_interfaz80_Tarjeta); // billetera/interfaz_80_2/tarjeta

router.post('/interfaz_80_2/tarjeta', _billetera.post_interfaz80_2_Tarjeta); // billetera/interfaz_81/verviajes

router.post('/interfaz_81/verviajes', _billetera.post_interfaz81_verViajes);
var _default = router;
exports["default"] = _default;