import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <div className='Navbar-nav'>

<nav className='nav'>
            <h1>LOGO</h1>
        <ul className='list'>
          {/* <li>
            <Link style={{marginRight: '200px'}} to="/">Home</Link>
          </li>
          <li>
            <Link style={{marginRight: '200px'}} to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link style={{marginRight: '200px'}} to="/contact">Contact</Link>
          </li> */}
            <div className='home'>
            <li>Home</li>
            </div>

            <div className='about'>
            <li>About</li>
            </div>

              <div className='contact'>
              <li>Contact</li>
              </div>
              

        </ul>
      </nav>
      <input className='input' type='text' placeholder='Search Products'/>
      <button>Search</button>
      
    </div>
  );
}

export default Head;
