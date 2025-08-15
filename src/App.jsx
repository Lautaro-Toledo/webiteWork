import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './page/Home'
import OpenLabs from './components/Outreach/sections/openLabs/OpenLabs'
import Grasp from './components/Outreach/sections/grasp/grasp'
import Tell from './components/Outreach/sections/tell/Tell'
import { useScrollToTop } from './components/useScrollToTop'

function App() {
  // Scroll to top on route change
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/open-labs" element={<OpenLabs />} />
      <Route path="/grasp" element={<Grasp />} />
      <Route path="/tell" element={<Tell />} />
    </Routes>
  )
}

export default App
