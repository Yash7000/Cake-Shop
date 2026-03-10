import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import PageTransition from './components/PageTransition.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Landing from './pages/Landing.jsx'
import Menu from './pages/Menu.jsx'
import About from './pages/About.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { useSmoothScroll } from './hooks/useSmoothScroll.js'

function AppInner() {
  useSmoothScroll()
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </PageTransition>
      <Footer />
    </>
  )
}

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <ThemeProvider>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Router>
          <AppInner />
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
