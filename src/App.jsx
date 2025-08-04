import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import About from './Pages/About' // Make sure this file exists

function App() {
  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
