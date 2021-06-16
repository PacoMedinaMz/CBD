var express = require("express");
var router = express.Router();
var initConnection = require("../MySQLHandler");

//BD de Windows
let conn = undefined;
//BD rélica de Windows
let conn2 = undefined;

//Función que se ejecutará al cargar el archivo.
function init() {
  //Primero creamos las conexiones las bases de datos.
  //BD de Windows
  conn = initConnection("windows");
  //BD réplica de Windows
  conn2 = initConnection("rwindows");
}
init();

router.get("/", (req, res) => {
  res.status(500).json({ mensaje: "Hola soy windows." });
});

module.exports = router;
