import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <nav>
      <h1>My Navbar</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contect</Link>
      </ul>
    </nav>
  )
}

export default Navbar;
