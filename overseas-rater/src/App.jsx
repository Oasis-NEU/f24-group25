import { useState } from 'react'
import './App.css'
import DashboardGrid from './dashboard/dashboard-grid.jsx'
import Navbar from './navbar/navbar.jsx'
import Program from './programInfo/Program.jsx'
import LandingPage from './LandingPage/LandingPage.jsx'
import Hero from './Hero.jsx'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <DashboardGrid  /> 
    </div>
  )

}


export default App
