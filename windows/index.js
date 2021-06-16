const express = require("express");
const router = express.Router();
const { initConnection, exect, isDatabasesOnline } = require("../MySQLHandler");

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
  if (!query) {
    res
      .status(500)
      .json({
        error:
          "Sintaxis incorrecta, no se encuentra el campo 'query' en tu JSON.",
      });
    return;
  }

  //Si las bases de datos están en linea...
  isDatabasesOnline(conn, conn2)
    .then(() => {
      conn.query(query, function (err, rows) {
        if (err) {
          res.status(500).json({
            mensaje:
              "Error al ejecutar en la base de datos " + conn.config.user,
            error: err,
          });
        } else {
          conn2.query(query, function (err2, rows2) {
            if (err2) {
              res.status(500).json({
                mensaje:
                  "Error al ejecutar en la base de datos " + conn2.config.user,
                error: err2,
              });
            } else {
              res.status(200).json({ mensaje: "ok", bd1: rows, bd2: rows2 });
            }
          });
        }
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

router.put("/", (req, res) => {
  let query = req.body.query;
  if (!query) {
    res
      .status(500)
      .json({
        error:
          "Sintaxis incorrecta, no se encuentra el campo 'query' en tu JSON.",
      });
    return;
  }

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
