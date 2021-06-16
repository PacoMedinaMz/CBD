const express = require("express"); //importar express
const mysql = require("mysql");
const cors = require("cors");

const connection = mysql.createConnection({
  host: "192.168.1.78",
  user: "paco",
  password: "Mysql2021+",
  database: "replicalnx",
});

connection.connect();

const app = express().use(cors()); //crea al servidor
const port = process.env.PORT || 3003;

app.get("/", (req, res) => {
  res.status(500).json({ mensaje: "Si sirve :)" });
});

app.listen(port, () => {
  console.log(`Este Servidor en Ejecucion en http://localhost:${port}`);
});
