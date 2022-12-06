import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Business from './pages/Business'
import Home from './pages/Home'
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/business' element={<Business />} />
    </Routes>

    </>
    
  )
}

export default App