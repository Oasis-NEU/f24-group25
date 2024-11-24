import { useState } from "react";
import "./App.css";
import DashboardGrid from "./dashboard/dashboard-grid.jsx";
import Navbar from "./navbar/navbar.jsx";
import Program from "./programInfo/Program.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import Hero from "./Hero.jsx";
import ReviewForm from "./reviewForm/ReviewForm.jsx";
import UserPage from "./userPage/UserPage.jsx";
import { AuthProvider } from './contexts/AuthContext.jsx'


function App() {
  
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <AuthProvider>
      <Navbar setSearchTerm={setSearchTerm}/>
      <Hero />
      <DashboardGrid searchTerm={searchTerm}/>
      </AuthProvider>
    </div>
  );
}

export default App;
