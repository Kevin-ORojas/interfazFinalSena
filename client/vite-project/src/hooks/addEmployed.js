import React from "react";
import { useState } from "react";
import { alert } from "../alerts/alert";

export const addEmployed = () => {
  const { showAlert } = alert();

  //estado que almacena la lista de empleados
  const [empleados, setEmpleados] = useState([]);

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    puesto: "",
    departamento: "",
    salario: 0,
  });

  // función para agregar un nuevo empleado a la lista
  const agregarEmpleado = () => {
    const nuevoEmpleado = {
      ...formData,
    };

    setEmpleados([...empleados, nuevoEmpleado]);

    // Limpia los campos del formulario
    setFormData({
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      puesto: "",
      departamento: "",
      salario: 0,
    });
  };

  //desestructuramos formData para acceder a cada campo individualmente
  const { nombre, apellido, telefono, email, puesto, departamento, salario } =
    formData;

  // manejo del input para los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  //manejo del envio del formulatio

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/empleados", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("empleado agg", data);

        showAlert();
        // limpiar el formulario
        setFormData({
          nombre: "",
          apellido: "",
          telefono: "",
          email: "",
          puesto: "",
          departamento: "",
          salario: 0,
        });
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return {
    agregarEmpleado,
    handleInputChange,
    handleSubmit,
    empleados,
    nombre,
    apellido,
    telefono,
    email,
    puesto,
    departamento,
    salario,
  };
};
