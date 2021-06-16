var express = require("express");
var router = express.Router();
var initConnection = require("../MySQLHandler");

//BD de Linux
let conn = undefined;
//BD rélica de Linux
let conn2 = undefined;

//Función que se ejecutará al cargar el archivo.
function init() {
  //Primero creamos las conexiones las bases de datos.
  //BD de Linux
  conn = initConnection("linux");
  //BD réplica de Linux
  conn2 = initConnection("rlinux");
}
init();

router.get("/", (req, res) => {
  res.status(500).json({ mensaje: "Hola soy Linux." });
});

module.exports = router;
