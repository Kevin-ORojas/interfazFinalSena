import React from "react";
import Swal from "sweetalert2";

export const alert = () => {
  const showAlert = () => {
    Swal.fire({
      title: "��Felicidades!",
      text: "Empleado agregado correctamente!",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  const errorAlert = () => {
    Swal.fire({
      title: "Error!",
      text: "No se pudo agregar el empleado, verifica los datos.",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  };
  return {
    showAlert,
  };
};
