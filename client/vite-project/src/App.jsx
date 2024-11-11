import { useState } from "react";
import Home from "./components/Home";
import { Sidebar } from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import GetEmpleados from "./components/getEmpleados";
import { AgregaEmpleado } from "./components/AgregaEmpleado";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar isLoading={false} />

        <Routes>
          {/* Aquí se añadirán las rutas para cada componente */}
          <Route path="home" element={<Home />} />
          <Route path="getEmpleados" element={<GetEmpleados />} />
          <Route path="AgregaEmpleado" element={<AgregaEmpleado />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
