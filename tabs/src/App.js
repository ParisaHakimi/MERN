import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Header from "./components/Header";

function App() {
  const tabArray = [
    { label: "Tab 1", content: "tab 1 content" },
    { label: "Tab 2", content: "tab 2 content" },
    { label: "Tab 3", content: "tab 3 content" },
  ];
  const [tabs, setTabs] = useState(tabArray);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="App">
      <Header
        tabs={tabs}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <Display tabs={tabs} currentIndex={currentIndex} />
    </div>
  );
}

export default App;
