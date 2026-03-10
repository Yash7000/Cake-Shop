import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import './PageTransition.css'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [phase, setPhase] = useState('idle') // idle | out | in
  const prevPath = useRef(location.pathname)

  useEffect(() => {
    if (location.pathname === prevPath.current) return
    prevPath.current = location.pathname

    setPhase('out')
    const t1 = setTimeout(() => {
      setDisplayLocation(location)
      setPhase('in')
      window.scrollTo(0, 0)
    }, 380)
    const t2 = setTimeout(() => setPhase('idle'), 900)
    return () => [t1, t2].forEach(clearTimeout)
  }, [location])

  return (
    <>
      <div className={`page-curtain ${phase === 'out' ? 'curtain-in' : ''} ${phase === 'in' ? 'curtain-out' : ''}`}>
        <div className="curtain-emblem">✦</div>
      </div>
      <div className={`page-content ${phase === 'in' ? 'content-reveal' : ''}`}>
        {React.cloneElement(children, { key: displayLocation.pathname })}
      </div>
    </>
  )
}
