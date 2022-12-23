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
      <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/available">Available</Link>
      &nbsp; | &nbsp;
      <Link to="/about">About Us</Link>
      &nbsp; | &nbsp;
      <Link to="/contact">Contact Us</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="" onClick={handleLogout}>Log Out</Link>
      <p>Welcome, {name}</p>
     
    </nav>
    </>
  
    :
    <>
      <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/available">Available</Link>
      &nbsp; | &nbsp;
      <Link to="/about">About Us</Link>
      &nbsp; | &nbsp;
      <Link to="/contact">Contact Us</Link>
       <p>Welcome!</p>
      </nav>
    </>

  )
}