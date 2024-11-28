import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" sm:flex sm:flex-col md:grid md:grid-cols-2  items-center w-full">
      <div className="text-center">
        <h1>Bienvenid al sistema de gestion de empleados</h1>
      </div>
      <div className="text-center">
        <button className="border border-indigo-400 px-10 py-4">
          <Link to="./login">Ingresa</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
