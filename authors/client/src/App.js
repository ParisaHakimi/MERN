import {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import EditAuthor from "./components/EditAuthor";
import HomePage from "./components/HomePage";
import NewAuthor from "./components/NewAuthor";

function App() {
  const [authorName, setAuthorName] = useState("");
  const [errors, setErrors] = useState({})

  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="text-center mt-3">Favorite authors</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-author" element={<NewAuthor authorName={authorName} setAuthorName={setAuthorName} errors={errors} setErrors={setErrors}/>} />
          <Route path="/edit-author/:id" element={<EditAuthor authorName={authorName} setAuthorName={setAuthorName} errors={errors} setErrors={setErrors}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
