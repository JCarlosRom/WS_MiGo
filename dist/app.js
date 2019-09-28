"use strict";

var http = require('http'); //HACE REFERENCIA A UN PAQUETE QUE INCLUYE NODEjs


var url = require('url');

var hostname = '187.214.123.33'; //DIRECCION DEL SERVIDOR

var port = '80'; //PUERTO
//CALLBACK

var server = http.createServer(function (req, res) {
  var myURL = url.parse(req.url);

  if (req.method == "GET") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(myURL.pathname);
  } else {
    res.statusCode = 400;
  }
});
server.listen(port, hostname, function () {
  console.log("Servidor ejecutandose en http://".concat(hostname, ":").concat(port));
});