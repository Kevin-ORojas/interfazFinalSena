import { useState } from "react";
import Home from "./components/Home";
import { Sidebar } from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import GetEmpleados from "./components/getEmpleados";
import { AgregaEmpleado } from "./components/AgregaEmpleado";
import { SearchEmpleados } from "./components/SearchEmpleados";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar isLoading={false} />

        <Routes>
          {/* Aquí se añadirán las rutas para cada componente */}
          <Route path="/" element={<Home />} />
          <Route path="getEmpleados" element={<GetEmpleados />} />
          <Route path="AgregaEmpleado" element={<AgregaEmpleado />} />
          <Route path="SearchEmpleados" element={<SearchEmpleados />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
