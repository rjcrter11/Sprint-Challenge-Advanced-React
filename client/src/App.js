import React from "react";
import Players from "./components/Players";
import { useDarkMode } from "./hooks/useDarkMode";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div data-testid="main-container" className="App">
      <nav data-testid="navbar">
        <h1>Women's World Cup</h1>
        <button data-testid="toggle-btn" onClick={toggleMode}>
          Dark Mode
        </button>
      </nav>

      <Players />
    </div>
  );
}

export default App;
