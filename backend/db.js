const mongoose = require("mongoose");

const URI = "mongodb://localhost/empleados";

mongoose
  .connect(URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
