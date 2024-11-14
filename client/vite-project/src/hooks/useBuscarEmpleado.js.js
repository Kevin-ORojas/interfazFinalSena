import React, { useEffect, useState } from "react";

export const useBuscarEmpleados = (criterio) => {
  const [empleados, setEmpleados] = useState([]); // estado para empleados obtenidos
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null); // estado par amanejar errores

  useEffect(() => {
    const obtenerEmpleados = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/empleados");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setEmpleados(data);
      } catch (error) {
        console.error("error al obtener los empleados", error);
      }
    };

    obtenerEmpleados();
  }, []);
  return {
    empleados,
    cargando,
  };
};
