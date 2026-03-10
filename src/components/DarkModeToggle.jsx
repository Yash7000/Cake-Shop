import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'
import './DarkModeToggle.css'

export default function DarkModeToggle() {
  const { dark, setDark } = useTheme()

  return (
    <button
      className={`dark-toggle ${dark ? 'dark' : ''}`}
      onClick={() => setDark(d => !d)}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      <div className="toggle-track">
        <span className="toggle-sun">☀️</span>
        <span className="toggle-moon">🌙</span>
        <div className="toggle-thumb" />
      </div>
    </button>
  )
}
