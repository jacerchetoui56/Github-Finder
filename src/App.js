import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) && true);
  console.log();

  const toggleDarkmode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  }
  return (
    <div className={`body w-[100%] h-screen ${darkMode ? "bg-primary-200" : ""} p-6`} >
      <div className={`mx-auto max-w-screen md:max-w-lg ${darkMode ? "dark" : ""}`}>
        <Header handleDarkMode={toggleDarkmode} dark={darkMode} />
        <Main />
      </div>
    </div>
  );
}

export default App;
