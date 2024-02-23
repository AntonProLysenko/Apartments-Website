import { useState } from 'react';
// import styles from './AuthPage.module.css';
import LoginForm from '../../components/admin/LoginForm';
import SignUpForm from '../../components/admin/SignUpForm';
// import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {

  // const [showLogin, setShowLogin] = useState(true);

  return (
    <div className='auth-page'>
    {/* <div>
    <h3 className='title' onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 'Don`t have an account? Sign Up' : 'Log In'}</h3>
    </div> */}
    
      {/* {showLogin ?  */}
      <LoginForm setUser={setUser} /> 
      {/*  : <SignUpForm setUser={setUser} />} */}
    </div>
  );
}