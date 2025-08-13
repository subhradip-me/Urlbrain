import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Dashboard from './pages/Dashboard.jsx' 
import Authontication from './pages/Authontication.jsx'



export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Authontication />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </div>
  )
}
