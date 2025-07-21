import React, { useState, useRef, useEffect } from 'react'

export const Nav = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(window.location.hash || window.location.pathname || '#home')
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const hoverTimeout = useRef(null)

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cierra el menú si se hace click fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  // Actualiza el link activo al cambiar el hash o pathname
  useEffect(() => {
    const onChange = () => setActive(window.location.hash || window.location.pathname || '#home')
    window.addEventListener('hashchange', onChange)
    window.addEventListener('popstate', onChange)
    return () => {
      window.removeEventListener('hashchange', onChange)
      window.removeEventListener('popstate', onChange)
    }
  }, [])

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current)
    setOpen(true)
  }
  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setOpen(false), 120)
  }

  // Helper para barra animada
  const isActive = (hashOrPath) => {
    if (hashOrPath === '/testimonials') return window.location.pathname === '/testimonials'
    if (hashOrPath.startsWith('#')) return active === hashOrPath
    return window.location.pathname + window.location.hash === hashOrPath
  }

  const linkClass = (hashOrPath) =>
    `text-white font-semibold hover:text-gray-300 transition-colors px-1 relative after:content-[''] after:block after:h-0.5 after:rounded after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:right-0 after:bottom-0 after:scale-x-0 ${
      isActive(hashOrPath) ? 'after:scale-x-100 after:h-0.5' : ''
    }`

  return (
    <nav
      className={`fixed w-full transition-all duration-500 z-50
        ${scrolled ? 'top-0 bg-gray-900/90 backdrop-blur-sm py-4' : 'top-1/3 bg-transparent'}
      `}
    >
      <div className={`flex px-8 ${scrolled ? 'flex-row justify-between items-center' : 'flex-col items-start gap-3'} transition-all duration-300`}>
        <a href="#home" className={` text-white font-bold hover:text-gray-300 transition-colors ${scrolled ? 'text-2xl' : 'text-5xl'}`}>
          Valentina Dimitrova, Ph.D.
        </a>

        <div className={`flex ${scrolled ? 'flex-row gap-6' : 'flex-col items-start gap-2 text-2xl'}`}>
          <a href="/#philosophy" className={linkClass('#philosophy')}>PHILOSOPHY</a>
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`text-white font-semibold hover:text-gray-300 transition-colors focus:outline-none px-1 relative after:content-[''] after:block after:h-0.5 after:rounded after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:right-0 after:bottom-0 after:scale-x-0 ${
                ['#openlabs','#grasp','#tell'].some(isActive) ? 'after:scale-x-100 after:h-0.5' : ''
              }`}
              onClick={() => setOpen((prev) => !prev)}
              type="button"
            >
              OUTREACH
            </button>
            {open && (
              <div className={`absolute mt-2  bg-white rounded-md shadow-lg py-2 z-50 flex flex-col ${scrolled ? 'left-0 w-56' : 'left-36 top-0 w-64'}`}>
                <a href="#openlabs" className="px-4 py-2 text-black hover:bg-gray-100" onClick={() => { setOpen(false); setActive('#openlabs') }}>OPEN LABS AT PENN</a>
                <a href="#grasp" className="px-4 py-2 text-black hover:bg-gray-100" onClick={() => { setOpen(false); setActive('#grasp') }}>G.R.A.S.P.</a>
                <a href="#tell" className="px-4 py-2 text-black hover:bg-gray-100" onClick={() => { setOpen(false); setActive('#tell') }}>T.E.L.L.</a>
              </div>
            )}
          </div>
          <a href="/testimonials" className={linkClass('/testimonials')}>TESTIMONIALS</a>
          <a href="/#resources" className={linkClass('#resources')}>RESOURCES</a>
          <a href="#contact" className={linkClass('#contact')}>CONTACT ME</a>
        </div>
      </div>
    </nav>
  )
}
