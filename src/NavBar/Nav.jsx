import React from 'react';
import {  Link } from "react-router-dom";
import "./Nav.css"
import { useNavigate } from 'react-router-dom';


const Nav = () => {
  return (
    <body>
    <div className='nav'>
    <ul>
    <li>
      <img src="https://cdn.mos.cms.futurecdn.net/3RVVWCYKbHbX9tSButv8tQ-650-80.jpg"/>
    </li>
    <li>
      <Link to="/" className='a'>Home</Link>
    </li>
    <li>
      <Link to="/transactions" className='a'>Transactions</Link>
    </li>
    <li>
      <Link to="/config" className='a'>Configuration and Settings</Link>
    </li>
    <li>
      <Link to="/contact" className='a'>Contact</Link>
    </li>
    </ul>
    </div>
    </body>
  )
}

export default Nav
