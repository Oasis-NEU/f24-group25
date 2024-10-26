import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashboardGrid from './dashboard/dashboard-grid.jsx'
import Navbar from './navbar/navbar.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
      The freshman is not doing any work here!

      <DashboardGrid ids="blank" /> 
    </div>
  )

}


export default App
