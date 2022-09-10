import './Inputs.css';
import Button from '../UI/Button.js'


const Inputs = () => {
  return (
    <div className="inputs-container">

        <form>

          <label htmlFor="email">Email</label>
          <input id="email" type="text"/>

          <label htmlFor="password" className="label-password">Password</label>
          <input id="password" type="password"/>

          <Button type="submit">Log in</Button>

        </form>
        
    </div>
  );
}

export default Inputs;
