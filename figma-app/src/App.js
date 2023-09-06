import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from "./pages/Admin";
import AdminDash from './pages/AdminDash';
import Adminpanel from './pages/Adminpanel';
import AdminUi from './pages/AdminUi';
import Dashboard from './pages/Dashboard';
import Dashboardui from './pages/Dashboardui';
import Foodadmin from './pages/FoodAdmin';
import FoodDelivery from './pages/FoodDelivery';
import Freebie from './pages/Freebie';
import FreeDesign from './pages/FreeDesign';
import Freetemplate from './Freetemplate';
import UiandUxDesign from './pages/UiandUxDesign';
import Home from "./pages/Home"; 

function App() {
  return (

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Admin" element={<Admin />} />
    <Route path="/AdminDash" element={<AdminDash />} />
    <Route path="/Adminpanel" element={<Adminpanel />} />
    <Route path="/AdminUi" element={<AdminUi />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/Dashboardui" element={<Dashboardui />} />
    <Route path="/FoodAdmin" element={<Foodadmin />} />
    <Route path="/FoodDelivery" element={<FoodDelivery />} />
    <Route path="/Freebie" element={<Freebie />} />
    <Route path="/FreeDesign" element={<FreeDesign />} />
    <Route path="/Freetemplate" element={<Freetemplate />} />
    <Route path="/UiandUxDesign" element={<UiandUxDesign />} />

    
  </Routes>
</BrowserRouter>


  );
}

export default App;
