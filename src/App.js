import './App.css';
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

import { getUser } from './utilities/users-service';


import HomePage from './pages/HomePage';
import AvailabilitiesPage from './pages/AvailabilitiesPage'
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'

import AuthPage from './pages/admin/AuthPage';
import AdminHome from './pages/admin/AdminHome';
import NewListingPage from './pages/admin/NewListingPage'



import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(getUser())//we need this state to be sure wether user is logged in
  const navigate = useNavigate();


  return (
    <main className="App">

      {
        user ? 
        <>
          <NavBar name={user.name} setUser={setUser} />

          <Routes>
            <Route path ="/" element = {<HomePage/>} />
            <Route path="/available" element={<AvailabilitiesPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />

            {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
            <Route path ="/principal" element = {<AdminHome/>} />
            <Route path ="/principal/new" element = {<NewListingPage navigate = {navigate}/>} />

          </Routes>
        </>
        : 
        <>
          <NavBar/>

          <Routes>
            <Route path ="/principal" element = {<AuthPage setUser={setUser}/> } />
           
            <Route path ="/" element = {<HomePage/>} />
            <Route path="/available" element={<AvailabilitiesPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </>
   
      }
    </main>
  );
}

export default App;
