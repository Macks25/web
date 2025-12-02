import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx';

function ThemeComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`theme-component ${theme}`}>
      <p className={`theme-text ${theme}`}>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ThemeComponent