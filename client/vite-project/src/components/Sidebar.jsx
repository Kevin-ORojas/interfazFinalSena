import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      <aside
        className={`w-64 h-screen bg-gray-800 text-white p-5 flex flex-col justify-between ${
          isOpen ? "block" : "hidden"
        } md:block  `}
      >
        {/* Contenedor superior (logo, botón de cierre, navegación) */}
        <div>
          <div className="flex justify-around items-center ">
            <div className="border w-10 h-10 rounded-full"></div>
            <button className="md:hidden" onClick={toggleClose}>
              <CloseIcon className="text-3xl " />
            </button>
          </div>
          <div className="flex flex-col gap-5 py-8 h-auto">
            <div className="border border-b-indigo-500"></div>
            <Link
              className="hover:bg-indigo-400 hover:bg-left hover:translate-x-2 transition-transform duration-500 ease-in-out rounded-md p-2"
              to={"../Home"}
            >
              Inicio
            </Link>

            <Link
              className="hover:bg-indigo-400 hover:bg-left hover:translate-x-2 transition-transform duration-500 ease-in-out rounded-md p-2"
              to={"../getEmpleados"}
            >
              Lista empleados
            </Link>

            <Link
              className="hover:bg-indigo-400 hover:bg-left hover:translate-x-2 transition-transform duration-500 ease-in-out rounded-md p-2"
              to={"../AgregaEmpleado"}
            >
              Agregar empleado
            </Link>

            <Link
              className=" hover:bg-indigo-400 hover:bg-left hover:translate-x-2 transition-transform duration-500 ease-in-out rounded-md p-2"
              to={"../SearchEmpleados"}
            >
              Buscar Empleado
            </Link>
          </div>
        </div>

        {/* Contenedor de Redes Sociales al final */}
        <div className="absolute bottom-0 flex flex-col items-center py-4">
          <h2 className="text-center text-2xl mb-3">Redes sociales</h2>
          <div className="flex justify-center gap-5">
            <a href="#" className="text-white hover:text-indigo-400">
              <img
                src="https://img.icons8.com/color/48/000000/facebook-f.png"
                alt="facebook"
              />
            </a>
            <a href="#" className="text-white hover:text-indigo-400">
              <img
                src="https://img.icons8.com/color/48/000000/instagram-new.png"
                alt="instagram"
              />
            </a>
            <a href="#" className="text-white hover:text-indigo-400">
              <img
                src="https://img.icons8.com/color/48/000000/twitter.png"
                alt="twitter"
              />
            </a>
          </div>
        </div>
      </aside>

      {/* Contenido */}

      <div
        className={`${
          isOpen ? "hidden transition duration-700" : "block "
        } transition-all ease-in-out delay-150 bg-blue-500 `}
      >
        {/* Botón de menú solo en pantallas pequeñas */}
        <button className="md:hidden text-white p-2" onClick={toggleSidebar}>
          <span className="text-3xl text-black">&#9776;</span>
        </button>
      </div>
    </div>
  );
};
