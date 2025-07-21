import React, { useState, useRef, useEffect } from 'react'

export const Nav = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(window.location.hash || '#home')
  const dropdownRef = useRef(null)
  const hoverTimeout = useRef(null)

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

  // Actualiza el link activo al cambiar el hash
  useEffect(() => {
    const onHashChange = () => setActive(window.location.hash || '#home')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Funciones para hover
  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current)
    setOpen(true)
  }
  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setOpen(false), 120)
  }

  // Helper para clases activas
  const linkClass = (hash) => `text-white font-semibold hover:text-gray-300 transition-colors px-1 ${active === hash ? 'border-b-2 border-white' : ''}`

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 flex items-center justify-between px-8 py-5 z-50">
      <div className="flex items-center">
        <a href="#home" className="text-2xl text-white font-bold hover:text-gray-300 transition-colors">Valentina Dimitrova, Ph.D.</a>
      </div>
      <div className="flex gap-8">
        <a href="#home" className={linkClass('#home')}>PHILOSOPHY</a>
        <div
          className="relative"
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`text-white font-semibold hover:text-gray-300 transition-colors focus:outline-none px-1 ${['#openlabs','#grasp','#tell'].includes(active) ? 'border-b-2 border-white' : ''}`}
            onClick={() => setOpen((prev) => !prev)}
            type="button"
          >
            OUTREACH
          </button>
          {open && (
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 flex flex-col">
              <a href="#openlabs" className="px-4 py-2 text-black hover:bg-gray-100" onClick={() => { setOpen(false); setActive('#openlabs') }}>OPEN LABS AT PENN</a>
              <a href="#grasp" className="px-4 py-2 text-black hover:bg-gray-100" onClick={() => { setOpen(false); setActive('#grasp') }}>G.R.A.S.P.</a>
              <a href="#tell" className="px-4 py-2 text-black hover:bg-gray-100" onClick={() => { setOpen(false); setActive('#tell') }}>T.E.L.L.</a>
            </div>
          )}
        </div>
        <a href="#proyectos" className={linkClass('#proyectos')}>TESTIMONIALS</a>
        <a href="#contacto" className={linkClass('#contacto')}>RESOURCES</a>
        <a href="#contacto" className={linkClass('#contacto')}>CONTACT ME</a>
      </div>
    </nav>
  )
}