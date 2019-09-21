import { Router } from 'express';
import {
    post_interfaz75_MiBilletera,
    post_interfaz78_Ganancias,
    post_interfaz78_2_Ganancias,
    post_interfaz79_Balance,
    post_interfaz79_2_Balance,
    post_interfaz80_Balance,
    post_interfaz80_2_Balance,
    post_interfaz81_verViajes
} from '../controllers/billetera.controller'
const router = Router();

//CONSULTAR RAIZ CON METODO GET
router.get('/', function(req, res){
    res.send("Web service ejecutandose\n");
});

/*MIGO PETICIONES
    Todas las peticiones requieren la estructura siguiente para su body:

    {
        "id_chofer": ?:id
    }

*/

// billetera/interfaz_75/billetera
router.post('/interfaz_75/billetera', post_interfaz75_MiBilletera);

// billetera/interfaz_78/ganancias
router.post('/interfaz_78/ganancias', post_interfaz78_Ganancias);

// billetera/interfaz_78_2/ganancias
router.post('/interfaz_78_2/ganancias', post_interfaz78_2_Ganancias);

// billetera/interfaz_79/balance
router.post('/interfaz_79/balance', post_interfaz79_Balance);

// billetera/interfaz_79_2/balance
router.post('/interfaz_79_2/balance', post_interfaz79_2_Balance);

// billetera/interfaz_80/balance
router.post('/interfaz_80/balance', post_interfaz80_Balance);

// billetera/interfaz_80_2/balance
router.post('/interfaz_80_2/balance', post_interfaz80_2_Balance);

// billetera/interfaz_81/verviajes
router.post('/interfaz_81/verviajes', post_interfaz81_verViajes);

export default router;