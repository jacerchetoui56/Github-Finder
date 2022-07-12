import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`body w-[100%] h-screen ${darkMode ? "bg-primary-200" : ""} p-6`} >
      <div className={`mx-auto max-w-screen md:max-w-lg ${darkMode ? "dark" : ""}`}>
        <Header handleDarkMode={() => setDarkMode(!darkMode)} dark={darkMode} />
        <Main />
      </div>
    </div>
  );
}

export default App;
