import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route,} from 'react-router-dom'
import axios from "axios";

import { getUser } from './utilities/users-service';
import * as listingsAPI from "./utilities/listings-api";
// import{ sendRequest} from ""
// import sendRequest from './utilities/send-request';

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
  
  const [currentIp, setIP] = useState(null);
  const [currentCity, setCity] = useState(undefined);
  const [listings, setListings] = useState();
  const [newvisitor, setVisitor] = useState(false)
  const [firstload, setFirstLoad] = useState(false)
  const [statistic, setStatistic] = useState(null)

  function getStatisticCreteria() {
    const today = new Date();
    const month = today.getMonth() + 1;    
    const year = today.getFullYear();
    const date = today.getDate();

    // const ip = await getIpAddress()

      return {
        month: month,
        day: date,
        year: year,
        ip: ""

    }
  }


  const getIpAddress = async () => {

    console.log("Getting IP");
    
    const res = await axios.get("https://api.ipify.org/?format=json");
    // const res = await sendRequest("https://api.ipify.org/?format=json", "GET")
    // console.log(res.data.ip, "IPPPPPP");
    // return res.data.ip

    console.log(res.data, "GOT IP");
    
    setIP(res.data.ip)
    return(res.data.ip)
  };



  async function getListing() {
    const listings = await listingsAPI.getAll();
    setListings(listings);
  }
  async function getAnalysisData(){
    let ip = await getIpAddress()
    await getIpCity(ip) 
  }


  async function getVisitors(){
    const statistics = await getStats();
    setStatistic(statistics[0].visitors);  
    return statistics[0].visitors
  }

  const getIpCity = async(ipAddress)=>{
    console.log("Started getting city");

    console.log(ipAddress);
    
    if (ipAddress){
      console.log("Getting City by this IP", ipAddress);
      try {
        const res = await axios.get(`http://ipwho.is/${ipAddress}`)
        setCity(res.data.city)
        console.log("Got City", res.data.city);
        return res.data.city
      } catch (error) {
        console.log("Unable to get city");
        setCity("hidden")
        console.log(currentCity,"current City state");
        return "hidden"  
      }
    }else{
      console.log("Unable to get city");
      setCity("hidden")
      console.log(currentCity,"current City state");
      return "hidden"
    }


    
    

  }




  async function addVisitors(visitorData){
    const allVisitors = await getVisitors()

    // const visitorCity = await getIpCity(visitorData[1].ip)
    visitorData[1].ip = currentIp
    visitorData[1].city = currentCity

    console.log(visitorData, "ClientData");
    
    let visitedBefore = JSON.stringify(allVisitors).includes(JSON.stringify(visitorData))
    
    console.log("Visited Before", visitedBefore);
    
    if (!visitedBefore && visitorData[1].ip && visitorData[1].city){
      await addStat(visitorData)
      setFirstLoad(true)
    }
  }



  useEffect(() => {
    setVisitor(true)
    getListing();
    getVisitors()
    getAnalysisData()
  }, []);

  useEffect(()=>{    
    if ((newvisitor && !user && !firstload)){addVisitors([1, getStatisticCreteria()])}
  },[newvisitor, currentIp, currentCity])
  

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
