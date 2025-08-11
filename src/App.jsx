import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './page/Home'
import OpenLabs from './components/Outreach/sections/openLabs/OpenLabs'
import Grasp from './components/Outreach/sections/grasp/grasp'
import Tell from './components/Outreach/sections/tell/tell'
import { useScrollPosition } from './utils/useScrollPosition'

function App() {
  // Use the scroll position hook to maintain scroll position across reloads
  useScrollPosition();

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
