import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Register.scss';

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    createUser(email, password, name)
      .then(result => {
        navigate('/');
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        navigate('/');
      })
      .catch(error => console.log(error))
  }

  return (
    <form onSubmit={handleSubmit} className='register'>
      <h1 className='register__title'>Register now!</h1>
      <input
        className='register__input'
        type='email'
        name='email'
        placeholder='Email'
        required
      />
      <input
        className='register__input'
        type='password'
        name='password'
        placeholder='Password'
        required
      />
      <button className='register__btn'>Register</button>
      <button className='register__btn' onClick={handleGoogleSignIn}>
        Register with Google
      </button>
    </form>
  )
};

export default Register;