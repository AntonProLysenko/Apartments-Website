import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


import { getUser } from './utilities/users-service';
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/admin/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import AdminHome from './pages/admin/AdminHome';
import HomePage from './pages/user/HomePage';


import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(getUser())//we need this state to be sure wether user is logged in


  return (
    <main className="App">

      {
        user ? 
        <>
          <NavBar name={user.name} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path ="/principal" element = {<AdminHome/>} />
            <Route path ="/" element = {<HomePage/>} />
          </Routes>
        </>
        : 
        <>
          <NavBar/>
          <Routes>
            <Route path ="/principal" element = {<AuthPage setUser={setUser}/> } />
            <Route path ="/" element = {<HomePage/>} />
          </Routes>
        </>
   
      }
    </main>
  );
}

export default App;
