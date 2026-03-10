import React, { useEffect, useState } from 'react'
import './LoadingScreen.css'

export default function LoadingScreen({ onDone }) {
  const [phase, setPhase] = useState(0)
  // phase 0 = logo appears, 1 = text reveals, 2 = progress fills, 3 = exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400)
    const t2 = setTimeout(() => setPhase(2), 900)
    const t3 = setTimeout(() => setPhase(3), 2200)
    const t4 = setTimeout(() => onDone(), 2900)
    return () => [t1, t2, t3, t4].forEach(clearTimeout)
  }, [onDone])

  return (
    <div className={`loader ${phase >= 3 ? 'exit' : ''}`}>
      <div className="loader-bg" />

      <div className="loader-content">
        <div className={`loader-emblem ${phase >= 0 ? 'show' : ''}`}>
          <div className="emblem-ring">
            <svg viewBox="0 0 120 120" className="ring-svg">
              <circle cx="60" cy="60" r="54" fill="none" stroke="var(--gold)" strokeWidth="0.8" strokeDasharray="4 6" className="ring-dashes" />
              <circle cx="60" cy="60" r="44" fill="none" stroke="var(--gold)" strokeWidth="0.4" opacity="0.4" />
            </svg>
          </div>
          <div className="emblem-icon">✦</div>
        </div>

        <div className={`loader-wordmark ${phase >= 1 ? 'show' : ''}`}>
          <span className="loader-name">La Belle</span>
          <span className="loader-sub">Pâtisserie</span>
        </div>

        <div className={`loader-tagline ${phase >= 1 ? 'show' : ''}`}>
          Est. 2008 · Paris Quarter, New York
        </div>

        <div className={`loader-bar-wrap ${phase >= 2 ? 'show' : ''}`}>
          <div className="loader-bar">
            <div className="loader-bar-fill" />
          </div>
          <span className="loader-bar-label">Crafting your experience…</span>
        </div>
      </div>
    </div>
  )
}
