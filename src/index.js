require('dotenv').config();
import app from './app';
import '@babel/polyfill';

async function main(){
    await app.listen(app.get('HTTP_PORT'), app.get('SERVER_HOST'));
    console.log('Web service escuchando por puerto: ' + app.get('SERVER_HOST') + ':' + app.get('HTTP_PORT'));
};

main();
