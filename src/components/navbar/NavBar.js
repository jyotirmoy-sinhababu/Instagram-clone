import React from 'react';
import './navbar.css';
import instagram from '../../images/instagram.png';

function NavBar() {
  return (
    <div className='nav-container'>
      <div className='nav-header'>
        <img className='nav-header-img' src={instagram} alt='instagram-logo' />
      </div>
      <div className='nav-header-search'>
        <input
          type='search'
          className='nav-header-search-input'
          placeholder='search'
        />
      </div>
      <div className='nav-buttons'>
        <button className='nav-buttons-login'>Log In</button>
        <button className='nav-buttons-signup'>Sign Up </button>
      </div>
    </div>
  );
}

export default NavBar;
