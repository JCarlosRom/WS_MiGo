"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

require("@babel/polyfill");

var _billetera = _interopRequireDefault(require("./routes/billetera"));

var _inicio_fleet = _interopRequireDefault(require("./routes/inicio_fleet"));

var _central = _interopRequireDefault(require("./routes/central"));

var _usuarios = _interopRequireDefault(require("./routes/usuarios"));

var _central_usuarios = _interopRequireDefault(require("./routes/central_usuarios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*require('dotenv').config();
import app from './app';
import '@babel/polyfill';

const hostname = app.get('SERVER_HOST'); //DIRECCION DEL SERVIDOR
const port = app.get('HTTP_PORT'); //PUERTO

app.listen(port, hostname, function () {
    console.log(`Servidor ejecutandose en http://${hostname}:${port}`);
});*/
require('dotenv').config(); //import server from './app';


//Variable que contiene la aplicación del framework express
const {Pool} = require('pg')
// Variables de conexión a la base de datos 
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Migo_Central',
    password: '12345',
    port: 5432,
});
const express = require('express')
const socketio = require('socket.io')
const http = require('http')
//const db = require('./queries')
const bodyParser = require('body-parser')
const app = express()//instancia de express
const server = http.createServer(app)//creando el server con http y express como handle request
const io = socketio(server)//iniciando el server de socket.io
var port = 3001; // Configuración en las variables de entorno

/**
 * SOCKET VARS
 */


//const db = require('./queries')
var conductores_online = [];

var usuarios_online = [];

var objIndex;
var objIndex_pop;

var objIndex_u;
var objIndex_pop_u;

var objIndex_asig;

var conductores_cercanos=[];
var conductor_seleccionado;
var temp=0;

var array_codigos_validacion=[];
var array_envios_pendientes=[];
var bandera_envios=false;

var tarifa_jimmy_taxi_express=[{
  "id_tarifa": 1,
  "cuota_plataforma": 20,
  "cuota_socio": 10,
  "rango_fechaIni": "2019-09-18T05:00:00.000Z",
  "rango_fechaFin": "2020-01-01T06:00:00.000Z",
  "tarifa_base": 35,
  "contribucion_gob": 0.015,
  "cuota_solicitud": 2,
  "tarifa_km": 10,
  "tarifa_min": 5,
  "cat_servicio": 1,
  "cat_servicio_nombre": "Express Estandar"
}];
var tarifa_jimmy_taxi_lujo=[];
 /**
  * FIN SOCKETS VAR
  */

/**
 * FUNCIONES SOCKETS
 */
function cercano(lat_user,long_user,copia_conductores_online){//alert('conductores cercanos');
console.log('-----Copia',copia_conductores_online);
  for (var i=0; i<copia_conductores_online.length; i++)
 {
   
   //console.log(conductor_seleccionado);
  if(parseInt(show_random_number(lat_user,long_user,copia_conductores_online[i].latitud,copia_conductores_online[i].longitud)) <= 2)
   {
     //console.log(conductores_online[i].id);
     
     copia_conductores_online.push(copia_conductores_online[i]);
     //console.log('-----------');
     console.log('Analisis cercanos: ',copia_conductores_online);
   }
 }
 console.log('Conductores a menos de 2 km: ',copia_conductores_online);
 return conductores_cercanos;
}

function conducto_asignado(lat_user,long_user){//alert('conductores cercanos');
  //console.log('Valida si exiten conductores online',conductores_online);

  if(conductores_online.length<=0){
        console.log('Sin conductores que validar');
        return [];
  }else{
        for (var i=0; i<conductores_online.length; i++)
        {
          conductor_seleccionado=parseFloat(show_random_number(lat_user,long_user,conductores_online[i].latitud,conductores_online[i].longitud));
          conductores_online[i].distancia=conductor_seleccionado;
          
          if(i==0){
          temp=i;
          //console.log('primer registro');
          }else{
          if(conductores_online[i].distancia<conductores_online[i-1]){
            temp=i;
          }else{
            temp=i-1;
          }
      
          }
          
        
        }
        //console.log('respuesta de metodo:',conductores_online[temp]);
        return conductores_online[temp];
  }
 
}


function show_random_number(lat1,lon1,lat2,lon2) {

      var rad = function(x) {return x*Math.PI/180;}
      var R = 6378.137; //Radio de la tierra en km
      var dLat = rad( lat2 - lat1 );
      var dLong = rad( lon2 - lon1 );
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = R * c;
      //alert(d.toFixed(3));
      return d.toFixed(3); //Retorna tres decimales

}

function push_conductores(socket_id,id_conductor,lati,long,datos_chofer,datos_vehiculo,reconocimientos,estrellas){
  conductores_online.push({id_socket:socket_id,id:id_conductor,latitud:lati,longitud:long,distancia:0,datos_chofer:datos_chofer,
          datos_vehiculo:datos_vehiculo});
  console.log('Registro agregado Conductor');
}

function push_usuarios(socket_id, id_usuario, lati, long, datos_usuario){
  usuarios_online.push({id_socket:socket_id,id:id_usuario,latitud:lati,longitud:long,
  datos_usuario: datos_usuario});
  console.log(usuarios_online)
  console.log('Registro agregado Usuario');
}

function pop_conductores(id){
  objIndex_pop=conductores_online.findIndex((conductores_online => conductores_online.id == id));
  console.log(objIndex_pop)
  conductores_online.splice(objIndex_pop,1)
}


function pop_usuarios(id){
  objIndex_pop=conductores_online.findIndex((conductores_online => conductores_online.id == id));
  console.log(objIndex_pop)
  conductores_online.splice(objIndex_pop,1)
}


function mostrarConductores(){
  return conductores_online;
//console.log(conductores_online);
}

function registrar_recorrido_servicio(array_recorrido_servicio){
  console.log('Hi papus xd');
  var resultado={};
  //console.log(array_recorrido_servicio);
  //interfaz166_Usuaro_Crear_recorrido(3.90,10,1,'19.9009939','-103.2574212','Rancho Blanco','La marina',49.87)
  var query = "select * from interfaz166_Usuaro_Crear_recorrido(3.90,10,1,'19.9009939','-103.2574212','Rancho Blanco','La marina',49.87)";
  //console.log(query);
  query = query.replace(/["]+/g, '');
  const encrypt=0;
  pool.query(
      query, (error, results) => {

        results.rows.forEach(function (element) {
          console.log(element.out_id_recorrido);

          resultado = element.out_id_recorrido;
          //delete element.msg;
          //delete element.pass;
      });

      }
  )
  return resultado;
}

function get_tarifa(tipo_servicio){
  
 
  var resultado;
  var query = "select * from tarifas where id_tarifa=1";
  tarifa_jimmy_taxi_express.pop();                
  console.log(query);
  query = query.replace(/["]+/g, '');
  pool.query(
      query, (error, results) => {
        results.rows.forEach(function (element) {
          console.log(element.tarifa_base);
          
          tarifa_jimmy_taxi_express.push(element);  
      });
        
        //console.log(tarifas);
      }
  )
  //console.log('fuera ',tarifas);
  //return resultado;
}

function calcular_tarifa_viaje(distancia){
  console.log('Distancia: ',parseFloat( distancia),' Precio x KM: ',tarifa_jimmy_taxi_express[0].tarifa_km)
  var precio_viaje=parseFloat(distancia);
  precio_viaje=precio_viaje*(tarifa_jimmy_taxi_express[0].tarifa_km);

  //Calculos para viaje
  var cuota_socio=(parseFloat(tarifa_jimmy_taxi_express[0].cuota_socio)/100)*precio_viaje;
  var cuota_plataforma=(parseFloat(tarifa_jimmy_taxi_express[0].cuota_plataforma)/100)*precio_viaje;
  var cuota_gobierno=(parseFloat(tarifa_jimmy_taxi_express[0].contribucion_gob))*precio_viaje;
  var cuota_solicitud=(parseFloat(tarifa_jimmy_taxi_express[0].cuota_solicitud)/100)*precio_viaje;
  console.log('Cuota_socio : ',cuota_socio,' Cuota_plataforma: ',cuota_plataforma)
  console.log('Cuota_gobierno: ',cuota_gobierno,' Cuota_solicitud: ',cuota_solicitud)
  

  
  if(precio_viaje<(tarifa_jimmy_taxi_express[0].tarifa_base)){
    console.log('El precio calculado es menor a tarifa base, se asiganara la tarifa base');
    precio_viaje=parseFloat(tarifa_jimmy_taxi_express[0].tarifa_base);
  }else{
    console.log('Tarifa calculada es emitida');
  }
  console.log('Precio calculado por sistema= ',precio_viaje);
  return {precio_viaje,cuota_socio,cuota_plataforma,cuota_gobierno,cuota_solicitud};
}

function envios_pendientes() {
  //console.log('Envios pendientes',array_envios_pendientes);
  var  i=0;
  if(array_envios_pendientes.length<=0){
    //console.log('sin nada');
    bandera_envios=false;
  }else{
    if(bandera_envios==true){
      console.log('se enviara a: ',array_envios_pendientes[0]);
        client.messages.create({
          body: array_envios_pendientes[0].nombre+' Tienen una emergencia. Boton de panico activado',
          to: '+52'+array_envios_pendientes[0].tel,  // Número al que se enviará el SMS
          from: '+12015813416' // Número comprado de Twilio.com
      })
      .then((message) => console.log(message.sid));
      array_envios_pendientes.shift();
    }
  } 
        
  
  //console.log(array_codigos_validacion);
  
}
setInterval(envios_pendientes, 1000);

function intervalFunc() {
  //console.log('Depurar codigos por tiempos');
  var  i=0;
  for(i=0;i<array_codigos_validacion.length;i++){
      array_codigos_validacion[i].minutos=array_codigos_validacion[i].minutos+1;
      if(array_codigos_validacion[i].minutos>=5){
        console.log('Valor de i=',i);  
        console.log('Cadena a eliminar: ',array_codigos_validacion[i]);
        array_codigos_validacion.splice(i,1);
      }
  }
  //console.log(array_codigos_validacion);
}
setInterval(intervalFunc, 60000);


function generar_cod_validacion(){
  var flag_validacion=false;
  var aleatorio ;
  var analizador;

  while(flag_validacion==false){
    aleatorio = Math.round(Math.random()*999999);
    analizador = array_codigos_validacion.findIndex((array_codigos_validacion => array_codigos_validacion.numero_aleatorio == aleatorio));

      if(analizador>=0){
          console.log('Codigo ya existe');
      }else{
          if((aleatorio.toString().length)==6){
            flag_validacion=true;
            console.log('Codigo Generado con exito');
          }else{
            console.log('Error al generar codigo');
          }
          //console.log((aleatorio.toString().length));
      }
        
  }
  //console.log(aleatorio);
  return aleatorio;
}

 /**
  * FIN FUNCIONES SOCKETS
  */

/**
 * METODOS SOCKETS
 */
io.on('connection', function(socket){
  console.log(`client: ${socket.id}`)
  //enviando numero aleatorio cada dos segundo al cliente
 
  //recibiendo el numero aleatorio del cliente
  socket.on('coordenadas', (num) => {
    //respuesta_validacion=validar_socket_id_condcutor(socket.id,num.id_conductor);
   
        //respuesta_validacion=conductores_online.findIndex(conductores_online => conductores_online.id === socket.id)
        
       //console.log(num)
        objIndex = conductores_online.findIndex((conductores_online => conductores_online.id == num.id_conductor));
        //console.log(conductores_online)
       // console.log(objIndex)

        if(objIndex>=0){
            //console.log('////////////////////////////////////////////////  CONDUCTOR')
            conductores_online[objIndex].latitud=num.coordenadas.latitude
            conductores_online[objIndex].longitud=num.coordenadas.longitude
            console.log('Cordenadas actualizadas CHOFER',conductores_online[objIndex])
            mostrarConductores()
            //console.log('////////////////////////////////////////////////  CONDUCTOR')
        }else{
          //console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++  CONDUCTOR')
          push_conductores(socket.id, num.datos_chofer.idChofer, num.coordenadas.latitude, num.coordenadas.longitude,num.datos_chofer,
            num.datos_vehiculo)

            console.log("Conductores online coordenadas",conductores_online);
          //console.log(conductores_online[objIndex])
          //console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++  CONDUCTOR')
        }
      
  })

  socket.on('Exit', (num) => {
    console.log('****************************************')
    console.log(`client: ${socket.id}`) 
    pop_conductores(socket.id)
    console.log('****************************************')
    //mostrarConductores()
  })


  socket.on('room_usuario_chofer', (num) => {
    console.log('****************************************')
    console.log('SOcket data usuario a chofer:',num);
    io.sockets.connected[num.id_chofer_socket].emit("seguimiento_usuario", num);
    console.log('****************************************')
    //mostrarConductores()
  })
  socket.on('room_chofer_usuario', (num) => {
    console.log('****************************************')
    console.log(num.id_socket_usuario,"socketUsuario");
    io.sockets.connected[num.id_socket_usuario].emit("seguimiento_chofer", num);
    console.log('****************************************')
    //mostrarConductores()
  })


  socket.on('coordenadas_usuario', (num) => {
    console.log(num.id_usuario)
        objIndex_u = usuarios_online.findIndex((usuarios_online => usuarios_online.id == num.id_usuario));
        //console.log(usuarios_online)
        //console.log(objIndex_u)

        if(objIndex_u>=0){
           // console.log('////////////////////////////////////////////////   USUARIO')
            usuarios_online[objIndex_u].latitud=num.coordenadas.latitude
            usuarios_online[objIndex_u].longitud=num.coordenadas.longitude
            console.log('Cordenadas actualizadas =>USUARIO')
            //mostrarConductores()
           // console.log('////////////////////////////////////////////////   USUARIO')
        }else{
            //console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++  USUARIO')
            push_usuarios(socket.id,num.id_usuario,num.coordenadas.latitude, num.coordenadas.longitude, num.datos_usuario)
            //console.log(conductores_online[objIndex])
            //console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++  USUARIO')
        }
  })

  socket.on('usuario_solicitud', (num) => {
    //Recibir coordenadas del usuario
    //Enviarlas al metodo de asignacion
    console.log('Datos emitidos por el usuario y enviados al conductor asignado: ',num);
    console.log('Solicitud de usuario buscando chofer');
    /*for(var i=0;i<num.geocoder_destino.length;i++){
      console.log(num.geocoder_destino[i]);

    }*/

    
    //console.log('Depurado');
    //console.log(num.usuario_longitud);
    var asignar_conductor=conducto_asignado(num.usuario_latitud,num.usuario_longitud);
    //console.log('Condcutores? ',asignar_conductor);
    if(asignar_conductor.length<=0){
      console.log('Sin condcutores cercanos');
    }else{
        console.log('Chofer asignado datos: ',asignar_conductor.id_socket);
        console.log('Usuario que solicito: ',socket.id);
        var calculo_origen_destino_usuario=show_random_number(num.usuario_latitud,num.usuario_longitud,num.usuario_destino_latitud,num.usuario_destino_longitud);
        console.log('Destino a ',calculo_origen_destino_usuario,'KM del origen del usuario');
    //io.sockets.socket(socket.id).emit('ejemplo',asignar_conductor);
        //socket.emit ( 'ejemplo' , 'xd222');
        var chofer_socket=asignar_conductor.id_socket;
        //console.log('Variable tipo :', typeof(chofer_socket));
      // console.log('Variable tipo :', typeof(asignar_conductor.id_socket));
        //console.log('Recurperar chofer socket',chofer_socket);
        //io.sockets.connected[chofer_socket].emit("ejemplo", asignar_conductor);
        
        // //se envia al pasajero los datos del chofer asignado mas cercano
        console.log('Enviando datos al usuario',asignar_conductor);
        io.sockets.connected[socket.id].emit("usuario_request", asignar_conductor);

        //se envia al chofer los datos del usuario datos_usuario:num.datos_usuario,estrellas:num.estrellas

        console.log(num);

        io.sockets.connected[asignar_conductor.id_socket].emit("conductor_request", 
        {   usuario_latitud: num.usuario_latitud, usuario_longitud: num.usuario_longitud, 
          datos_usuario: num.datos_usuario, infoTravel: num.infoTravel, Paradas: num.Paradas, type: num.type, id_usuario_socket: num.id_usuario_socket});
      // io.sockets.connected[socket.id,socket.id].emit("ejemplo", asignar_conductor);
      // io.sockets.connected[chofer_socket].emit("ssd", asignar_conductor);
        //mostrarConductores()
    }
  })
  // Aceptar solicitud y mandar información a usuario,
  socket.on('chofer_accept_request', (num)=>{

    console.log("Conductores en linea")
    console.log(conductores_online);

    console.log("----------------------Chofer accept");


    io.sockets.connected[num.id_usuario_socket].emit("conductor_sendInfo", {   
    id_usuario_socket: num.id_usuario_socket,  id_chofer_socket: num.id_chofer_socket,
    chofer_latitud: num.positionChofer.latitude, chofer_longitud: num.positionChofer.longitude, 
    datos_chofer: num.datos_chofer, datos_vehiculo: num.datos_vehiculo});

    pop_conductores(num.id_chofer_socket);


    console.log(conductores_online);

    


  })

  socket.on('generar_servicio', (num)=>{
    console.log('El conductor acepto la solicitud');
    console.log('datos del viaje',num);
    var index_pop_chofer= conductores_online.findIndex((conductores_online => conductores_online.id == num.id_conductor));
    conductores_online.splice(index_pop_chofer,1);

    var calculos_sistema_tarifas=calcular_tarifa_viaje(num.distancia_destino_usuario);
    console.log('Array de calculos ',calculos_sistema_tarifas);
    var resultado;
    var query = "select * from interfaz166_usuaro_crear_recorrido_servicio("+num.distancia_destino_usuario+
                                                                          ","+Math.ceil(num.tiempo_viaje_destino)+
                                                                          ",0"+
                                                                          ",'"+num.latitud_usuario+","+num.longitud_usuario+
                                                                          "','"+num.latitud_usuario_destino+ ","+num.longitud_usuario_destino+
                                                                          "','"+num.geocoder_origen+"','"+num.geocoder_destino+"',"+calculos_sistema_tarifas.precio_viaje+",0,2,'"+num.id_usuario+"',"+num.id_unidad+",1,'"+num.id_conductor+"')";
                          
    console.log(query);
    query = query.replace(/["]+/g, '');
    const encrypt=0;
    pool.query(
        query, (error, results) => {
          results.rows.forEach(function (element) {
            io.sockets.connected[num.id_conductor_socket].emit("recorrido_id_conductor",{recorrdio:element.out_id_recorrido,servicio:element.out_id_servicio});
            io.sockets.connected[num.id_usuario_socket].emit("recorrido_id_usuario",{recorrdio:element.out_id_recorrido,servicio:element.out_id_servicio});
        });
          //resultado=results;
          
        }
    )
    console.log('**************************************');
    console.log('Respuesta del insert: ',resultado);
  })


  
  

})

app.get('/', function(req, res){
  
  res.send('Web Service Central - Sockets');
});

app.post('/update_variable_tarifas', function(req, res){
  //cercano(req.body.latitud,req.body.longitud);
   get_tarifa();
  console.log('Resultado de tarifas',tarifa_jimmy_taxi_express);
  res.send(tarifa_jimmy_taxi_express);
});


app.post('/get_tarifa_migo_expres', function(req, res){
  //cercano(req.body.latitud,req.body.longitud);
   console.log(tarifa_jimmy_taxi_express[0].tarifa_km);
  res.send(tarifa_jimmy_taxi_express);
});


/**
 * SISTENA DE ENVIO DE MENSAJES
 */
      app.post('/sms_panic', function(req, res){
        //cercano(req.body.latitud,req.body.longitud);
        var usuario_nombre=req.body.usuario_nombre;
        var telefonos=req.body;
        array_envios_pendientes = telefonos;
        bandera_envios=true;
        //console.log(telefonos);
        //console.log(array_envios_pendientes[1].tel);
        res.send('listo');
      });

      app.post('/get_codigo_validacion', function(req, res){
        //cercano(req.body.latitud,req.body.longitud);
        //if(generar_cod_validacion())

        var codigo_nuevo=generar_cod_validacion();
        //var id_usuario_req=req.body.id_usuario;
        var telefono_usuario_req=req.body.telefono;

        array_codigos_validacion.push({numero_aleatorio:codigo_nuevo,
                                      //id_usuario:id_usuario_req,
                                      telefono:telefono_usuario_req,
                                      minutos:1});
        console.log('LLEGO AL TWILIO');
        client.messages.create({
          body: 'Tu codigo Jimmy es: '+codigo_nuevo,
          to: '+52'+telefono_usuario_req,  // Número al que se enviará el SMS
          from: '+12015813416' // Número comprado de Twilio.com
      })
      .then((message) => console.log(message.sid));
      //res.send('Listo mensaje enviado');
          //console.log(aleatorio);
        console.log(array_codigos_validacion);
        res.send({codigo:codigo_nuevo});
      });


      app.post('/validar_codigo', function(req, res){
        //cercano(req.body.latitud,req.body.longitud);
        var codigo=req.body.codigo;
        //var usuario=req.body.id_usuario;
        var telefono=req.body.telefono;
        console.log(array_codigos_validacion);
        console.log('request body:',codigo);
        var index_array_codigos = array_codigos_validacion.findIndex((array_codigos_validacion => array_codigos_validacion.numero_aleatorio == codigo ));

          console.log(typeof(index_array_codigos));
        if(index_array_codigos>=0){//El codigo existe
          console.log('El codigo existe');
          console.log(array_codigos_validacion[index_array_codigos]);
          array_codigos_validacion.splice(index_array_codigos,1);
          //array_codigos_validacion.shift();
          console.log('Nuevo array sin codigo validado',array_codigos_validacion);
        //Se registra en base de datos
          res.send({codigo:codigo,telefono:telefono,respuesta:1,validacion:'Exitosa'});
        }else{
          console.log('El codigo no existe');
          res.send({codigo:codigo,telefono:telefono,respuesta:0,validacion:'Codigo expirado'});
        }

        
      });


      
/**
* SISTEMA DE ENVIO DE MENSAJES
*/




app.post('/get_conductores', function(req, res){
  //cercano(req.body.latitud,req.body.longitud);
  console.log('Imprime culera')
  res.send(conductores_online);
});


app.post('/conductor_mas_cercano', function(req, res){
  //cercano(req.body.latitud,req.body.longitud);
  var latitud_user=req.body.latitud_user;
  var longitud_user=req.body.longitud_user;
  //var latitud_driver=req.body.latitud_driver;
  //var longitud_driver=req.body.longitud_driver;
  var chofer_data=conducto_asignado(latitud_user,longitud_user);


  res.send(chofer_data);
});

app.post('/distancia_entre_dos_puntos', function(req, res){
  //cercano(req.body.latitud,req.body.longitud);
  console.log('ho'); 
  var latitud1=req.body.latitud1;
  var longitud1=req.body.longitud1;
  var latitud2=req.body.latitud2;
  var longitud2=req.body.longitud2;
  var data_distancia=show_random_number(latitud1,longitud1,latitud2,longitud2);


  res.send(data_distancia);
});



/**
 * TWILIO
 */
app.get('/twilio', function(req, res){
  console.log('LLEGO AL TWILIO');
  client.messages.create({
    body: 'Hello from Node',
    to: '+523121690127',  // Número al que se enviará el SMS
    from: '+12015813416' // Número comprado de Twilio.com
})
.then((message) => console.log(message.sid));
res.send('Listo mensaje enviado');
});

app.get('/twilioResponse', function(req, res){
  console.log('LLEGO Mensaje de Twilio');
  
});


/**
 * TWILIO
 */




app.post('/socket/asignar_vehiculo_a_usuario', function(req, res){
  //objIndex_asig = usuarios_online.findIndex((usuarios_online => usuarios_online.id == req.body.id_usuario));
  //console.log('asignacion',cercano(req.body.latitud,req.body.longitud));
  var asignar_conductor=conducto_asignado(req.body.latitud,req.body.longitud);
  console.log('-------> Conductor Asigando',asignar_conductor.id_socket);
  res.send(asignar_conductor);
});


app.post('/socket/send', function(req, res){
  //io.broadcast.to(req.body.socket_id).emit('ejemplo','333333');
});

//app.post('/socket/room', db.post_room);
 /**
  * FIN METODOS SOCKETS
  * 
  */


//app.set('SERVER_HOST', process.env.SERVER_HOST || '127.0.0.1');
//app.set('HTTP_PORT', process.env.HTTP_PORT || 3001);
app.set('DB_USER_CENTRAL', process.env.DB_USER_CENTRAL);
app.set('DB_HOST_CENTRAL', process.env.DB_HOST_CENTRAL);
app.set('DB_CENTRAL', process.env.DB_CENTRAL);
app.set('DB_PASS_CENTRAL', process.env.DB_PASS_CENTRAL);
app.set('DB_PORT_CENTRAL', process.env.DB_PORT_CENTRAL);
app.set('DB_USER_USUARIOS', process.env.DB_USER_USUARIOS);
app.set('DB_HOST_USUARIOS', process.env.DB_HOST_USUARIOS);
app.set('DB_USUARIOS', process.env.DB_USUARIOS);
app.set('DB_PASS_USUARIOS', process.env.DB_PASS_USUARIOS);
app.set('DB_PORT_USUARIOS', process.env.DB_PORT_USUARIOS); //importación de las rutas

//middlewares
app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)()); //rutas raíz

app.use('/billetera', _billetera["default"]);
app.use('/inicio_fleet', _inicio_fleet["default"]);
app.use('/central', _central["default"]);
app.use('/usuarios', _usuarios["default"]);
app.use('/central_usuarios', _central_usuarios["default"]);
app.get('/download', function (req, res) {
  res.sendFile('public/WS_Central_Jimmy.zip', {
    root: __dirname
  }); //console.log(res);
});
server.listen(3001, () => {
  console.log(`Server running in http://localhost:`)
})
var _default = app;
exports["default"] = _default;