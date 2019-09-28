/*require('dotenv').config();
import app from './app';
import '@babel/polyfill';

const hostname = app.get('SERVER_HOST'); //DIRECCION DEL SERVIDOR
const port = app.get('HTTP_PORT'); //PUERTO

app.listen(port, hostname, function () {
    console.log(`Servidor ejecutandose en http://${hostname}:${port}`);
});*/

import express, { json } from 'express';
import morgan from 'morgan';
require('dotenv').config();
//import server from './app';
import '@babel/polyfill';

//Variable que contiene la aplicación del framework express
const app = express();

const port = 3000;

// Configuración en las variables de entorno
app.set('SERVER_HOST', process.env.SERVER_HOST || '127.0.0.1');
app.set('HTTP_PORT', process.env.HTTP_PORT || 3001);

app.set('DB_USER_CENTRAL', process.env.DB_USER_CENTRAL);
app.set('DB_HOST_CENTRAL', process.env.DB_HOST_CENTRAL);
app.set('DB_CENTRAL', process.env.DB_CENTRAL);
app.set('DB_PASS_CENTRAL', process.env.DB_PASS_CENTRAL);
app.set('DB_PORT_CENTRAL', process.env.DB_PORT_CENTRAL);

app.set('DB_USER_USUARIOS', process.env.DB_USER_USUARIOS);
app.set('DB_HOST_USUARIOS', process.env.DB_HOST_USUARIOS);
app.set('DB_USUARIOS', process.env.DB_USUARIOS);
app.set('DB_PASS_USUARIOS', process.env.DB_PASS_USUARIOS);
app.set('DB_PORT_USUARIOS', process.env.DB_PORT_USUARIOS);

//importación de las rutas
import walletRoutes from './routes/billetera';
import fleetRoutes from './routes/inicio_fleet';
import centralRoutes from './routes/central';
import usersRoutes from './routes/usuarios';
import central_usersRoutes from './routes/central_usuarios';

//middlewares
app.use(morgan('dev'));
app.use(json());

//rutas raíz
app.use('/billetera', walletRoutes);
app.use('/inicio_fleet', fleetRoutes);
app.use('/central', centralRoutes);
app.use('/usuarios', usersRoutes);
app.use('/central_usuarios', central_usersRoutes);

app.get('/download', (req, res) => {
    res.sendFile('public/WS_Central_Jimmy.zip' , { root : __dirname});
   //console.log(res);
});

app.listen(port, () => console.log(`Web service escuchando por puerto ${port}`));

export default app;