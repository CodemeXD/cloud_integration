import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <div className='Navbar-nav'>

<nav className='nav'>
        <ul className='list'>
          <li>
            <Link style={{marginRight: '200px'}} to="/">Home</Link>
          </li>
          <li>
            <Link style={{marginRight: '200px'}} to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link style={{marginRight: '200px'}} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
}

export default Head;
