import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import About from './Pages/About' // Make sure this file exists
import Login from './Components/Login'
import Signup from './Components/Signup'
import DonorHome from './Pages/DonorHome'

function App() {
  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/donor" element={<DonorHome />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
