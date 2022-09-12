import React, { useState, useEffect } from 'react'
import './App.css';
import LoginPanel from './components/Login-panel/LoginPanel'
import WelcomePage from './components/Welcome-page/WelcomePage.js'

const App = () => {
  const [isValid, setIsValid] = useState(Boolean)

  useEffect(()=>{
    const storedUserLoginData = localStorage.getItem('isLoggedIn');

    if(storedUserLoginData === '1'){
      setIsValid(true);
    }

  }, []);

  const valid = (data) =>{
    if(data){
      if(data.email === 'admin' && data.password === 'admin'){
        console.log(data)
        localStorage.setItem('isLoggedIn', '1');
        setIsValid(true);
    }else setIsValid(false)
    } 
  }

  return (
    <div className="App">
      {!isValid && <LoginPanel isValid={valid}></LoginPanel>}
      {isValid && <WelcomePage isValid={valid}></WelcomePage>}
    </div>
  );
}

export default App;
