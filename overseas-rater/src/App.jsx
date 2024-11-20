import { useState } from "react";
import "./App.css";
import DashboardGrid from "./dashboard/dashboard-grid.jsx";
import Navbar from "./navbar/navbar.jsx";
import Program from "./programInfo/Program.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import Hero from "./Hero.jsx";

function App() {
  //console.log(searchTerm)
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <Navbar setSearchTerm={setSearchTerm}/>
      <Hero />
      <DashboardGrid searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
