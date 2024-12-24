import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
const ContextExample1 = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return ( 
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", height: "100vh" }}>
        <h1>{`Current theme is ${theme}`}</h1>
        <ThemeToggleButton />
      </div>
    </ThemeContext.Provider>
  );
};

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>{`Switch to ${theme === "light" ? "dark" : "light"} mode`}</button>;
};

export default ContextExample1;
