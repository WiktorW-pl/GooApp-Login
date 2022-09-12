import React, { useState } from 'react'
import './Inputs.css';
import Button from '../UI/Button.js'


const Inputs = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailHandler = (e) =>{
    setEmail(e.target.value)
    // if(!email.includes('@')) return;
  }

  const passwordHandler = (e) =>{
    setPassword(e.target.value)
    // if(password.length > 5) console.log(password);
  }

  const loginHandler = (e) =>{
    e.preventDefault()
    const data = {
        email: email,
        password: password
    }

    props.login(data);

  }

  return (
    <>

        <form onSubmit={loginHandler}>

          <label htmlFor="email">Email</label>
          <input id="email" onChange={emailHandler} type="text"/>

          <label htmlFor="password" className="label-password">Password</label>
          <input id="password"  onChange={passwordHandler} type="password"/>

          <Button type="submit">Log in</Button>

        </form>
        
    </>
  );
}

export default Inputs;
