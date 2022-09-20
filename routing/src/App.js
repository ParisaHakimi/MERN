import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ParamsComponent from "./components/ParamsComponent";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:word/:color/:bgColor" element={<ParamsComponent />} />
          <Route path="/:word" element={<ParamsComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
