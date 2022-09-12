// import React, { useState } from 'react'
import './LoginPanel.css';
import Card from '../UI/Card'
import Inputs from './Inputs.js'
import logo from '../../img/main-logo.png'


const LoginPanel = (props) => {

  const loginUser = (data) =>{

    props.isValid(data)
    
  }
    
  return (
    <div className="login-panel">

    <img src={logo} alt="GooApp logo" className="logo"></img>
      
    <Card>
        <Inputs login={loginUser}></Inputs>
    </Card>

    </div>
  );
}

export default LoginPanel;
