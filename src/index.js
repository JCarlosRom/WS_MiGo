require('dotenv').config();
import app from './app';
import '@babel/polyfill';

const hostname = app.get('SERVER_HOST'); //DIRECCION DEL SERVIDOR
const port = app.get('HTTP_PORT'); //PUERTO

app.listen(port, hostname, function () {
    console.log('Web service escuchando en http://' + hostname + ':' + port);
});