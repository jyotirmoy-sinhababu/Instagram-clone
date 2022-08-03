import React from 'react';

function logIn() {
  const handleChange = () => {};

  return (
    <div className='login-container'>
      <form
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   verifyData();
        //   navigate('/user');
        // }}
        className='login-form'
      >
        <input
          onChange={(e) => {
            loginInput(e);
          }}
          placeholder='Enter your email'
          type='email'
          name='email'
          className='login-formInp'
        />
        <input
          onChange={(e) => {
            loginInput(e);
          }}
          placeholder='Enter password'
          type='password'
          name='password'
          className='login-formInp'
        />
        <NavLink to='/reg' className='navigate-btn'>
          sign up
        </NavLink>
        <button type='submit' className='btn'>
          Login
        </button>
      </form>
    </div>
  );
}

export default logIn;
