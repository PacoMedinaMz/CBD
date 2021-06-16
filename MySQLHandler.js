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

module.exports = initConnection;
