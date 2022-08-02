import React from 'react';
import './navbar.css';
import instagram from '../../images/instagram.png';
import Modal from '../../modal/Modal';
import SignUp from '../../utils/SignUp';
import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

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
        <button onClick={openModal} className='nav-buttons-signup'>
          Sign Up
        </button>
      </div>
      <div>
        <Modal isOpen={isOpen}>
          <SignUp />
        </Modal>
      </div>
    </div>
  );
}

export default NavBar;
