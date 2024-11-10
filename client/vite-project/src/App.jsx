import { useState } from "react";
import Home from "./components/home/Home";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <Sidebar isLoading={false} />
        <Home />
      </div>
    </>
  );
}

export default App;
