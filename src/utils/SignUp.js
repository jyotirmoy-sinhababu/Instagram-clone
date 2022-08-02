import React from 'react';
import instagram from '../images/instagram.png';
import './signup.css';
function SignUp() {
  const handleChange = () => {};

  return (
    <div className='form-container'>
      <div className='form-header'>
        <center>
          <img
            className='form-header-img'
            src={instagram}
            alt='instagram-logo'
          />
        </center>
        <p className='form-heading'>
          Sign up to see photos and videos from your friends.
        </p>
      </div>
      <form
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   if (Object.keys(data).length == 4) {
        //     saveData();
        //     navigate('/login');
        //   }
        // }}
        className='reg-form'
      >
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder='Enter your name'
          type='text'
          name='name'
          className='reg-frm-inp'
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder='Enter your email'
          type='email'
          name='email'
          className='reg-frm-inp'
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder='Enter your phone number'
          type='tel'
          name='phone_number'
          className='reg-frm-inp'
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder='Enter password'
          type='password'
          name='password'
          className='reg-frm-inp'
        />
        {/* <NavLink to='/login' className='navigate-btn' type='button'>
          Login
        </NavLink>
        <button type='submit' className='btn'>
          Sign up
        </button> */}
      </form>
    </div>
  );
}

export default SignUp;
