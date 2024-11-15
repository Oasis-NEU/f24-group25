import { useState } from 'react'
import './App.css'
import DashboardGrid from './dashboard/dashboard-grid.jsx'
import Navbar from './navbar/navbar.jsx'
import Program from './programInfo/programInfo.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="h-72"/>
      <DashboardGrid ids="blank" /> 
      <Program/>
    </div>
  )

}


export default App
