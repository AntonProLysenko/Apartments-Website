import { Link } from "react-router-dom"
import * as userService from '../utilities/users-service'

export default function NavBar ({ name, setUser }) {
  console.log(name)
  function handleLogout () {
    // Delegate to the users-service
    userService.logOut()
    setUser(null)
  }

  return (
    name?
    <>
      <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      <p>Welcome, {name}</p>
      &nbsp;&nbsp;<Link to="" onClick={handleLogout}>Log Out</Link>
    </nav>
    </>
  
    :
    <>
      <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
       <p>Welcome!</p>
      </nav>
    </>

  )
}