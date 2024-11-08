/**

* Vamos a crear rutas del servidor

* creamos un módulo por eso utilizamos express

* vamos a utilizar como nuestra rest api para

* enviar y recibir datos en formato json

*/

const express = require("express");

const router = express.Router();

// Importamos el modelo

router.get("/", (req, res) => {
  res.json({
    status: "API REST funcionando",
  });
});

module.exports = router;
