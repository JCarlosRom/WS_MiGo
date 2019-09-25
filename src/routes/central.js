import { Router } from 'express';
import {
    postsp_CInterfaz36_notificaciones,
    postsp_cinterfaz101_CalificacionConductorPasajero,
    postsp_cinterfaz104_VerCupones,
    postsp_cinterfaz132_RegistroFacturacion,
    postsp_cinterfaz195_CalificacionPasajeroConductor,
    postsp_cinterfaz204MostrarDestinosFavoritos,
    postsp_cinterfaz207AgregarDestinosFavoritos,
    postsp_cinterfaz111Usuarios,
    postsp_cinterfaz164UsuarioCalculoPrecios
} from '../controllers/controller.central'

//Variable a exportar, la cual contiene las rutas que permiten las peticiones
const router = Router();

//CONSULTAR RAIZ CON METODO GET Central Usuarios/
router.get('/', function(req, res){
    res.send("Web service ejecutandose: Central\n");
});

// /central/interfaz36/notificaciones
router.post('/interfaz36/notificaciones', postsp_CInterfaz36_notificaciones);

// /central/interfaz101_CalificacionConductorPasajero
router.post('/interfaz101/CalificacionConductorPasajero', postsp_cinterfaz101_CalificacionConductorPasajero);

// /central/interfaz104_VerCupones
router.post('/interfaz104/VerCupones', postsp_cinterfaz104_VerCupones);

// /central/interfaz132/RegistroFacturacion
router.post('/interfaz132/RegistroFacturacion', postsp_cinterfaz132_RegistroFacturacion);

// /central/interfaz195/CalificacionPasajeroConductor
router.post('/interfaz195/CalificacionPasajeroConductor', postsp_cinterfaz195_CalificacionPasajeroConductor);

// /central/interfaz204/MostrarDestinosFavoritos
router.post('/interfaz204/MostrarDestinosFavoritos', postsp_cinterfaz204MostrarDestinosFavoritos);

// /central/interfaz207/AgregarDestinosFavoritos
router.post('/interfaz207/AgregarDestinosFavoritos', postsp_cinterfaz207AgregarDestinosFavoritos);

// /central/interfaz111/Usuarios
router.post('/interfaz111/Usuarios', postsp_cinterfaz111Usuarios);

// /central/interfaz164/UsuarioCalculoPrecios
router.post('/interfaz164/UsuarioCalculoPrecios', postsp_cinterfaz164UsuarioCalculoPrecios);


export default router;