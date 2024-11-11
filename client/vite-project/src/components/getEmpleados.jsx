// GetEmpleados.jsx
import React from "react";
import { useFetch } from "../hooks/useFetch";

const GetEmpleados = () => {
  const { data, isLoading, hasError, error } = useFetch(
    "http://localhost:8080/api/empleados"
  );

  if (isLoading) return <p>Cargando empleados...</p>;
  if (hasError) return <p>Error: {error.message}</p>;

  return (
    <div className="">
      <h2 className="mt-4 text-center mb-4">Lista de Empleados</h2>
      <div className="px-4">
        {isLoading && <li>Loading...</li>}
        {data &&
          data.map(
            ({ nombre, id, apellido, puesto, departamento, salario }) => (
              <div key={id}>
                <table>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>puesto</th>
                      <th>departamento</th>
                      <th>salario</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{nombre}</td>
                      <td>{apellido}</td>
                      <td>{puesto}</td>
                      <td>{departamento}</td>
                      <td>{salario}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default GetEmpleados;
