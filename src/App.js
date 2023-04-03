import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route,} from 'react-router-dom'

import { getUser } from './utilities/users-service';
import * as listingsAPI from "./utilities/listings-api";

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'
import AvailabilitiesPage from './pages/AvailabilitiesPage'
import ListingShowPage from './pages/ListingShowPage';

import AuthPage from './pages/admin/AuthPage';
import AdminHome from './pages/admin/AdminHome';
import NewListingPage from './pages/admin/NewListingPage';
import ListingDetailsPage from './pages/admin/ListingDetailsPage';
import EditListingpage from './pages/admin/EditListingpage';

import NavBar from './components/NavBar';
import ErrorPage from "./pages/ErrorPage";


function App() {

  const [user, setUser] = useState(getUser())//we need this state to be sure wether user is logged in

   const [listings, setListings] = useState();
   async function getListing() {
     const listings = await listingsAPI.getAll();
     setListings(listings);
   }
   useEffect(() => {
     getListing();
   }, []);
  // const [listings, setListings] = useState([]);//getting all listings from db

  // async function getListings() {
  //   const listings = await listingsAPI.getAll();
  //   setListings(listings);
  // }

  // useEffect(()=>{
  //   getListings()
  // },[setListings])
  // // console.log(listings)

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar name={user.name} setUser={setUser} />

          <Routes>
            <Route path="/" element={<HomePage listings={listings} />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/available/" element={<AvailabilitiesPage listings={listings} />} />
            <Route path="/available/:id" element={<ListingShowPage />} />

            {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
            <Route path="/principal" element={<AdminHome />} />
            <Route path="/principal/new" element={<NewListingPage />} />
            <Route path="/principal/:id" element={<ListingDetailsPage />} />
            <Route path="/principal/:id/edit" element={<EditListingpage />} />
             <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
      ) : (
        <>
          <NavBar />

          <Routes>
            <Route path="/principal" element={<AuthPage setUser={setUser} />} />

            <Route path="/" element={<HomePage listings={listings} />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/available/" element={<AvailabilitiesPage listings={listings} />} />
            <Route path="/available/:id" element={<ListingShowPage />} />
             <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </main>
  );
}

export default App;
