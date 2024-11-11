const express = require("express");

const morgan = require("morgan");

const cors = require("cors");

const app = express(); // app tendra ahora todo el funcionamiento de servidor

const mongoose = require("./db");

/**se crea una REST API, es la manera de decirle al servidor que reciba y envie datos */

// configuraciones

app.set("port", process.env.PORT || 8080);

app.use(morgan("dev"));

app.use(express.json()); // permite recibir y parsear datos en formato JSON

app.use(cors({ origin: "http://localhost:5173" })); // metodo para comuncar con el cliente.

// rutas

app.use("/api/empleados", require("./routes/empleado.route"));

// arrancar el servidor

app.listen(app.get("port"), () => {
  console.log(`Server en puerto ${app.get("port")}`);
});
