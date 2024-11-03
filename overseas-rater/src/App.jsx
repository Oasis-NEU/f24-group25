import { useState } from 'react'
import './App.css'
import DashboardGrid from './dashboard/dashboard-grid.jsx'
import Navbar from './navbar/navbar.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="h-72"/>
      <DashboardGrid ids="blank" /> 
    </div>
  )

}


export default App
