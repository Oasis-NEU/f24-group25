import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './dashboard/dashboard.jsx'
import Navbar from './navbar/navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      The freshman is not doing any work here!

    </div>
  )
  
}


export default App
