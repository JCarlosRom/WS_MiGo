require('dotenv').config();
import app from './app';
import '@babel/polyfill';

//Método principal que ejecuta la aplicación como servidar
async function main(){
    //Configuración del servidor con las variables del entorno
    await app.listen(app.get('HTTP_PORT'), app.get('SERVER_HOST'));
    console.log('Web service escuchando por puerto: ' + app.get('SERVER_HOST') + ':' + app.get('HTTP_PORT'));
};

main();
