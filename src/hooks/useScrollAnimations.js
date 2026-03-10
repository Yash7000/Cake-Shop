import { useEffect, useRef } from 'react'

export function useScrollAnimations() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    // Use requestAnimationFrame to batch DOM reads/writes — prevents layout thrash
    let rafId = null
    let pendingEntries = []

    const processEntries = () => {
      rafId = null
      pendingEntries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target
        const delay = Number(el.dataset.delay || 0)

        setTimeout(() => {
          el.classList.add('anim-done')
          if (el.dataset.counter !== undefined) {
            animateCounter(el)
          }
        }, delay)

        observer.unobserve(el)
      })
      pendingEntries = []
    }

    const observer = new IntersectionObserver(
      (entries) => {
        pendingEntries.push(...entries)
        if (!rafId) {
          rafId = requestAnimationFrame(processEntries)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe after a tick so DOM is ready
    requestAnimationFrame(() => {
      document.querySelectorAll('[data-anim]').forEach(el => {
        observer.observe(el)
      })
    })

    return () => {
      observer.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
      initialized.current = false
    }
  }, [])
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.counter)
  const suffix = el.dataset.suffix || ''
  const duration = 2000
  const startTime = performance.now()

  // Ease out expo
  const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1)
    const eased = easeOutExpo(progress)
    const value = target * eased
    el.textContent = (Number.isInteger(target) ? Math.round(value) : value.toFixed(1)) + suffix
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}
