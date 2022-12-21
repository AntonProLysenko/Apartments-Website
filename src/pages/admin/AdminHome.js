import {Link} from "react-router-dom"
export default function AdminHome() {
  return (
    <div>
      AdminHome
      <div>
       <h1>ListingsPage</h1> 
        <Link to = "/principal/new"><button>Create new</button></Link> 
    </div>
      </div>
  )
}
