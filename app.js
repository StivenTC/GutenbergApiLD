var express = require("express");
var server = express();

var routes = require("./routes/routes.js")(server);

config = require('./config');

server.listen(config.server.port, config.server.ip, function () {
  console.log('Servidor corriendo en ' + config.server.ip + ':' + config.server.port);
});
