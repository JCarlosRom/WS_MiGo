import { Router } from 'express';
import {
    postsp_cinterfaz112MejoresComentariosUsuarios,
    postsp_cinterfaz112LogrosUsuarios,
    postsp_cinterfaz112DatosUsuarios
} from '../controllers/controller.central_usuarios'

//Variable a exportar, la cual contiene las rutas que permiten las peticiones
const router = Router();

//CONSULTAR RAIZ CON METODO GET Central Usuarios/
router.get('/', function(req, res){
    res.send("Web service ejecutandose: Central Usuarios\n");
});

// /central_usuarios/interfaz112/MejoresComentariosUsuarios
router.post('/interfaz112/MejoresComentariosUsuarios', postsp_cinterfaz112MejoresComentariosUsuarios);

// /central_usuarios/interfaz112/LogrosUsuarios
router.post('/interfaz112/LogrosUsuarios', postsp_cinterfaz112LogrosUsuarios);

// /central_usuarios/interfaz112/DatosUsuarios
router.post('/interfaz112/DatosUsuarios', postsp_cinterfaz112DatosUsuarios);


export default router;