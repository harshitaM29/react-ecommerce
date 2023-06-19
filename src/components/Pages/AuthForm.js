import { useState, useRef, useContext, Fragment } from 'react';
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';
import classes from './AuthForm.module.css';
import { Card, Container,Form,Nav, Navbar, Row, Col } from "react-bootstrap";
import { NavLink }  from 'react-router-dom';
import Footer from '../Layout/Footer';
const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate =  useNavigate()

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    

  
  };
  const loginHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const signUpData = {
      email:enteredEmail,
      password:enteredPassword,
      returnSecureToken: true
    }
    setIsLoading(true);
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6MT_tbfGikKtW8VXzNYWGBHUVzV8f8z4', {
      method: 'POST',
        body:JSON.stringify(signUpData),
        headers: {
          'Content-Type' : 'application/json'
        }

    }).then(res => {
      setIsLoading(false)
        if(res.ok) {
          res.json().then(data => {
            authCtx.onLogin(data)
            navigate('/store', {replace: true})
          });
        } else {
          res.json().then(data => {
            alert(data.error.message)
            })
        }
    })
  }

  // const signUpHandler = (e) => {

  //   e.preventDefault();
  //   const enteredEmail = emailInputRef.current.value;
  //   const enteredPassword = passwordInputRef.current.value;
  //   const signUpData = {
  //     email:enteredEmail,
  //     password:enteredPassword,
  //     returnSecureToken: true
  //   }
  //   setIsLoading(true);
  //   if(isLogin) {
  //     fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6MT_tbfGikKtW8VXzNYWGBHUVzV8f8z4', {
  //       method: 'POST',
  //       body:JSON.stringify(signUpData),
  //       headers: {
  //         'Content-Type' : 'application/json'
  //       }

  //     }).then(res => {
  //       setIsLoading(false)
  //       if(res.ok) {
  //         res.json().then(data => {
  //           authCtx.onLogin(data)
  //           history.replace('/')
  //         });
  //       } else {
  //         res.json().then(data => {
  //           alert(data.error.message)
  //           })
  //       }
  //     })

  //   }else{
      
  //     fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6MT_tbfGikKtW8VXzNYWGBHUVzV8f8z4', {
  //       method:'POST',
  //       body:JSON.stringify(signUpData),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }).then(res => {
  //       setIsLoading(false);
  //       if(res.ok) {

  //       } else{
  //         res.json().then(data => {
  //         alert(data.error.message)
  //         })
  //       }
  //     })
  //   }
  
  // }
  return (
    <Fragment>
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passwordInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
         {isLoading &&  <p>Sending Request...</p> }
         {!isLoading && <button>Login</button>  }
          {/* <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button> */}
        </div>
      </form>
    </section>
    
    </Fragment>
  );
};

export default AuthForm;
