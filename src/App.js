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
import SignUpForm from './components/admin/SignUpForm';
import AdminHome from './pages/admin/AdminHome';
import NewListingPage from './pages/admin/NewListingPage';
import ListingDetailsPage from './pages/admin/ListingDetailsPage';
import EditListingpage from './pages/admin/EditListingpage';

import NavBar from './components/NavBar';
import ErrorPage from './pages/ErrorPage'


import { addStat, getStats } from "./utilities/listings-service";

function App() {

  const [user, setUser] = useState(getUser())//we need this state to be sure wether user is logged in

  const [listings, setListings] = useState();
  const [newvisitor, setVisitor] = useState(false)
  const [statistic, setStatistic] = useState(null)

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;

    console.log(month);
    
    const year = today.getFullYear();
    const date = today.getDate();

    return {
      month: month,
      day: date,
      year: year
    };
  }



  async function getListing() {
    const listings = await listingsAPI.getAll();
    setListings(listings);
  }

  async function addVisitors(visitorData){
    addStat(visitorData)
  }

  async function getVisitors(){
    const statistics = await getStats();
    setStatistic(statistics[0].visitors);    
  }


  useEffect(() => {
    setVisitor(true)
    getListing();
    getVisitors()
  }, []);

  useEffect(()=>{
    if ((newvisitor && !user)){addVisitors([1, getDate()])}
    // addVisitors([1, getDate()])
  },[newvisitor])
  

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
      {/* {!visitor && createVisitors([1, getDate()])} */}
      {user ? (
        <>
          <NavBar name={user.name} setUser={setUser} />

          <Routes>
            <Route path="/" element={<HomePage listings={listings} />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route
              path="/available/"
              element={<AvailabilitiesPage listings={listings} />}
            />
            <Route path="/available/:id" element={<ListingShowPage />} />

            {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
            <Route path="/irunthis" element={<AdminHome visitors={statistic} listings={listings}  />} />
            <Route path="/irunthis/new" element={<NewListingPage />} />
            <Route path="/irunthis/:id" element={<ListingDetailsPage />} />
            <Route path="/irunthis/:id/edit" element={<EditListingpage />} />

            <Route path="/imneworforgotmypassword" element={<AdminHome />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
      ) : (
        <>
          <NavBar />  

          <Routes>
            <Route path="/irunthis" element={<AuthPage setUser={setUser} />} />
            <Route path="/imneworforgotmypassword" element={<SignUpForm setUser={setUser} />} />

            <Route path="/" element={<HomePage listings={listings} />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route
              path="/available/"
              element={<AvailabilitiesPage listings={listings} />}
            />
            <Route path="/available/:id" element={<ListingShowPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </main>
  );
}

export default App;
