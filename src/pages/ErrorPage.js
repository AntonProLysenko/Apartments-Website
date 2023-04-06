import React from 'react'

import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className='error'>
    <h1>Oops!</h1>
    <h2>We lost this page.</h2>
    <h4>Try our <Link to="/">homepage</Link> or <Link to ="/contact">contac us</Link> insted</h4>
    </div>
  )
}
