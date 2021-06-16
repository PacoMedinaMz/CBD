const mysql = require("mysql");
var credenciales = require("./mysql.json");

function initConnection(credencial) {
  //Creamos la conexión inicial
  const conn = mysql.createConnection({
    host: credenciales[credencial].host,
    user: credenciales[credencial].user,
    password: credenciales[credencial].password,
    database: credenciales[credencial].database,
  });

  //Intentaremos conectarnos a las bases de datos
  try {
    conn.connect();
    console.log(
      "Base de datos de <" + credencial + "> conectada correctamente."
    );
  } catch (e) {
    console.error(
      "Error al conectar a la base de datos " + credencial + ":",
      e
    );
  }

  return conn;
}

function exect(query, conn) {
  return new Promise((resolve, reject) => {
    conn.query(query, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

//Función que verifica si la base de datos está online
function isOnline(conn) {
  return new Promise((resolve, reject) => {
    conn.ping((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function isDatabasesOnline(conn, conn2) {
  return new Promise((resolve, reject) => {
    isOnline(conn) //Verificamos la primera base de datos
      .then(() => {
        isOnline(conn2) //Verificamos la segunda base de datos
          .then(() => {
            resolve();
          })
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
}

module.exports = {
  initConnection: initConnection,
  exect: exect,
  isDatabasesOnline: isDatabasesOnline,
};
