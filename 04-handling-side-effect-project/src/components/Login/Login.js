import React, { useContext, useEffect, useReducer, useState, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-content';
import Input from '../Input/Input';

const emailReducer = (state,action) =>{
  if(action.type ==='USER_INPUT'){
    return {value: action.val,isValid:action.val.includes('@')};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value: state.value,isValid:state.value.includes('@')};
  }
  return {value: '',isValid:false};
}
const passwordReducer = (state,action) =>{
  if(action.type ==='USER_INPUT'){
    return {value: action.val,isValid:action.val.trim().length >6};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value: state.value,isValid:state.value.trim().length >6};
  }
  return {value: '',isValid:false};
}
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid:false});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer,{value: '', isValid:false});
  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;
  useEffect(() =>{
    console.log('EFFECT RUNNING');
    return () =>{
      console.log('EFFECT CLEANUP');
    }
  },[passwordIsValid]);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  useEffect(()=>{
    setTimeout(() =>{
      console.log("Checking form validity!")
      setFormIsValid(
      // emailState.isValid && enteredPassword.trim().length > 6
      // emailState.isValid && passwordState.isValid
      emailIsValid, passwordIsValid
    );
    },500)
    
    return () =>{
      console.log("CLEAN UP");
      //clearTimeout(identifier);
    };
  },[emailIsValid ,passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: 'USER_INPUT', val:event.target.value});
    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
    
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type :'USER_INPUT',val:event.target.value});

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.isValid
      // && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    // setEmailIsValid(emailState.value.includes('@'));
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    // setPasswordIsValid(passwordState.isValid);
    dispatchPassword({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    // athCtx.onLogin(emailState.value, passwordState.value);
    if(formIsValid){
      athCtx.onLogin(emailState.value, passwordState.value);
    }else if (!emailIsValid){
      emailInputRef.current.focus();
    }else{
      passwordInputRef.current.focus();
    }
  };
  const athCtx = useContext(AuthContext);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
        ref={emailInputRef} 
        id="email" 
        label="E-Mail" 
        type="email" 
        isValid={emailIsValid} 
        value={emailState.value} 
        onChange ={emailChangeHandler} 
        onBlur={validateEmailHandler}/>
        <Input 
        ref= {passwordInputRef}
        id="password" 
        label="Password" 
        type="password" 
        isValid={passwordIsValid} 
        value={passwordState.value} 
        onChange ={passwordChangeHandler} 
        onBlur={validatePasswordHandler}/>
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
