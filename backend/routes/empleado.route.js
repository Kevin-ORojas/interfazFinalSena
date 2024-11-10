/**

* Vamos a crear rutas del servidor

* creamos un módulo por eso utilizamos express

* vamos a utilizar como nuestra rest api para

* enviar y recibir datos en formato json

*/

const express = require("express");

const router = express.Router();

const empleadoCtrl = require("../controllers/empleado.controller");

// Importamos el modelo

/* generamos un ejemplo cuando le soliciten
algo al servidor por el método GET **/

router.get("/", empleadoCtrl.getEmpleados); // ruta mas limpia (obtener los empleados)
router.post("/", empleadoCtrl.createEmpleados); // guardar empleados
router.get("/:id", empleadoCtrl.getUnicoEmpleado); // obtiene un unico empleado
router.put("/:id", empleadoCtrl.editarEmpleado); // actualizar datos (uno a la vez)
router.delete("/:id", empleadoCtrl.eliminarEmpleado); // eliminar el empleado

module.exports = router;
