import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './page/Home'
import { Testimonials } from './page/Testimonials'

function App() {

  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/testimonials" element={<Testimonials />} />
  </Routes>
  )
}

export default App
