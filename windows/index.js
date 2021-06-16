const express = require("express");
const router = express.Router();
const { initConnection, exect } = require("../MySQLHandler");

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

router.post("/", (req, res) => {
  let query = req.body.query;

  //Si las bases de datos están en linea...
  isDatabasesOnline(conn, conn2)
    .then(() => {
      //Ejecutamos en la primera base de datos
      exect(query, conn)
        .then(() => {
          //Si todo está correcto, también la ejecutamos en la segunda
          exect(query, conn2)
            .then(() => {
              res.status(200).json({ mensaje: "ok" });
            })
            .catch((err) => {
              res.status(500).json({ error: err });
            });
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({
        mensaje:
          "No se puede ejecutar la consulta porque una base de datos no responde.",
        error: err,
      });
    });
});

module.exports = router;
