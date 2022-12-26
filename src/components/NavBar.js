import { Link } from "react-router-dom"
import * as userService from '../utilities/users-service'

export default function NavBar ({ name, setUser }) {
  function handleLogout () {
    // Delegate to the users-service
    userService.logOut()
    setUser(null)
  }

  return (
    name?
    <>
    <nav className = "navBar navbar fixed-top ">
        <div>
          <Link to="/" className = "d-inline-block align-text-top">
          <img src ="https://i.imgur.com/3WSXIEd.png" height = "30px" className = "brand-img"></img> 
          <span className="navbar-brand">Salem Crown Apartments</span> 
          </Link>
        </div>
        

        <ul className="nav-links"> 
          <li>
            <Link to="/available"> <span className="navbar-text">Available</span> </Link>
          </li>
          <li>
            <Link to="/about"> <span className="navbar-text">About Us</span> </Link>
          </li>
          <li>
            <Link to="/contact"> <span className="navbar-text">Contact Us</span> </Link>
          </li>
          <li>
            <Link to="" onClick={handleLogout}> <span className="navbar-text"> Log Out</span> </Link>
          </li>
        </ul>
    </nav>
    <p>Welcome, {name}</p>
    </>
  
    :
    <>
      <nav className = "navBar navbar fixed-top ">
        <div>
          <Link to="/" className = "d-inline-block align-text-top">
          <img src ="https://i.imgur.com/3WSXIEd.png" height = "30px" className = "brand-img"></img> 
          <span class="navbar-brand">Salem Crown Apartments</span> 
          </Link>

        </div>
    

        <ul className="nav-links"> 
    
          <li>
            <Link to="/available"> <span class="navbar-text">Available</span> </Link>
          </li>
          <li>
            <Link to="/about"> <span class="navbar-text">About Us</span> </Link>
          </li>
          <li>
            <Link to="/contact"> <span class="navbar-text">Contact Us</span> </Link>
          </li>
  
        </ul>
      </nav>
      
    </>

  )
}