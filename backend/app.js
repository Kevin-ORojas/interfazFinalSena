const express = require("express");

app.use(express.json());
app.use(morgan("dev"));
// Pueto escucha y reciber informacion de solicitud

app.set("port", process.env.PORT || 8080);
