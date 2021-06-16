const express = require("express");
const cors = require("cors");

var windowsRouters = require("./windows/index");
var linuxRouters = require("./linux/index");

const app = express().use(cors()); //crea al servidor
const port = process.env.PORT || 3003;

app.get("/", (req, res) => {
  res.status(500).json({ mensaje: "Si sirve :)" });
});

app.use("/windows", windowsRouters);
app.use("/linux", linuxRouters);

app.listen(port, () => {
  console.log(`Este Servidor en Ejecucion en http://localhost:${port}`);
});
