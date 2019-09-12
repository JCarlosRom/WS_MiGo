import { Router } from 'express';
import {
    postsp_CInterfaz36_notificaciones,
    postsp_CInterfaz75_MiBilletera,
    postsp_CInterfaz78_2_Ganancias,
    postsp_CInterfaz78_Ganancias,
    postsp_CInterfaz79_Balance,
    postsp_CInterfaz79_2_Balance,
    postsp_CInterfaz80_Balance,
    postsp_CInterfaz80_2_Balance,
    postsp_cinterfaz81_verViajes
} from '../controllers/billetera.controller'
const router = Router();

//CONSULTAR RAIZ CON METODO GET
router.get('/', function(req, res){
    res.send("Web service ejecutandose\n");
});

/*MIGO METODOS */

router.post('/interfaz36/notificaciones', postsp_CInterfaz36_notificaciones);

router.post('/interfaz75/billetera', postsp_CInterfaz75_MiBilletera);

router.post('/interfaz78_2/ganancias', postsp_CInterfaz78_2_Ganancias);

router.post('/interfaz78/ganancias', postsp_CInterfaz78_Ganancias);

router.post('/interfaz79/balance', postsp_CInterfaz79_Balance);

router.post('/interfaz79_2/balance', postsp_CInterfaz79_2_Balance);

router.post('/interfaz80/balance', postsp_CInterfaz80_Balance);

router.post('/interfaz80_2/balance', postsp_CInterfaz80_2_Balance);

router.post('/interfaz81/verviajes', postsp_cinterfaz81_verViajes);

export default router;