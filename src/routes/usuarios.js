import { Router } from 'express';
import {
    postsp_cinterfaz98_AgregarTarjeta,
    postsp_cinterfaz98_UpdateDeleteTarjeta,
    postsp_cinterfaz105_MetodoPagoVerTarjetas,
    postsp_cinterfaz108_109Usuarios
} from '../controllers/controller.usuarios'

//Variable a exportar, la cual contiene las rutas que permiten las peticiones
const router = Router();

//CONSULTAR RAIZ CON METODO GET Central Usuarios/
router.get('/', function(req, res){
    res.send("Web service ejecutandose: Usuarios\n");
});

// /usuarios/interfaz98/AgregarTarjeta
router.post('/interfaz98/AgregarTarjeta', postsp_cinterfaz98_AgregarTarjeta);

// /usuarios/interfaz98/UpdateDeleteTarjeta
router.post('/interfaz98/UpdateDeleteTarjeta', postsp_cinterfaz98_UpdateDeleteTarjeta);

// /usuarios/interfaz105/MetodoPagoVerTarjetas
router.post('/interfaz105/MetodoPagoVerTarjetas', postsp_cinterfaz105_MetodoPagoVerTarjetas);

// /usuarios/interfaz108_109/Usuarios
router.post('/interfaz108_109/Usuarios', postsp_cinterfaz108_109Usuarios);

export default router;