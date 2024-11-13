import React from "react";
import { useFetch } from "../hooks/useFetch";

const GetEmpleados = () => {
  const { data, isLoading, hasError, error } = useFetch(
    "http://localhost:8080/api/empleados"
  );

  if (isLoading) return <p>Cargando empleados...</p>;
  if (hasError) return <p>Error: {error.message}</p>;

  return (
    <div className="px-4 w-full">
      <h2 className="mt-4 text-center mb-4">Lista de Empleados</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md flex-wrap">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-xs md:text-sm leading-normal">
              <th className="py-2 px-4 md:py-3 md:px-6 text-left border border-slate-600">
                Nombre
              </th>
              <th className="py-2 px-4 md:py-3 md:px-6 text-left border border-slate-600">
                Apellido
              </th>
              <th className="py-2 px-4 md:py-3 md:px-6 text-left border border-slate-600">
                email
              </th>
              <th className="py-2 px-4 md:py-3 md:px-6 text-left border border-slate-600">
                Puesto
              </th>
              <th className="py-2 px-4 md:py-3 md:px-6 text-left border border-slate-600">
                Departamento
              </th>
              <th className="py-2 px-4 md:py-3 md:px-6 text-left border border-slate-600">
                Salario
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-xs md:text-sm font-light">
            {data &&
              data.map(
                ({
                  nombre,
                  id,
                  apellido,
                  puesto,
                  email,
                  departamento,
                  salario,
                }) => (
                  <tr
                    key={id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-2 px-4 md:py-3 md:px-6 text-left border border-slate-600">
                      {nombre}
                    </td>
                    <td className="py-2 px-4 md:py-3 md:px-6 text-left border border-slate-600">
                      {apellido}
                    </td>
                    <td className="py-2 px-4 md:py-3 md:px-6 text-left border border-slate-600">
                      {email}
                    </td>
                    <td className="py-2 px-4 md:py-3 md:px-6 text-left border border-slate-600">
                      {puesto}
                    </td>
                    <td className="py-2 px-4 md:py-3 md:px-6 text-left border border-slate-600">
                      {departamento}
                    </td>
                    <td className="py-2 px-4 md:py-3 md:px-6 text-left border border-slate-600">
                      {salario}
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetEmpleados;
