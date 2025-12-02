import { createContext, use, useContext, useState } from "react";

const ThemeContext = createContext(); //Create the context

export const useTheme = () => useContext(ThemeContext); // create wraapper to use context theme


// Theme provider to provide theme and other var to children components
export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}