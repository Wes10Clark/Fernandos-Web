import { Routes, Route } from "react-router-dom";
import "./App.css";
import Heading from "./components/Heading";
import Madison from "./pages/Madison";
import Pearl from "./pages/Pearl";
import Reservoir from "./pages/Reservoir";

function App() {
  return (
    <div>
      <Heading />
      <Routes>
        <Route path="/" element={<Madison />} />
        <Route path="/Pearl" element={<Pearl />} />
        <Route path="/Reservoir" element={<Reservoir />} />
      </Routes>
    </div>
  );
}

export default App;
