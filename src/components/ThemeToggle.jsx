import React from 'react'
import { useTheme } from '../context/ThemeContext'
import SunIcon from '../icons/SunIcon'
import MoonIcon from '../icons/MoonIcon'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { theme, toggleTheme, isLight } = useTheme()

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      {isLight ? <MoonIcon size={20} /> : <SunIcon size={20} />}
    </button>
  )
}

export default ThemeToggle