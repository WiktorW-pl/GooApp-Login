import './LoginPanel.css';
import Card from '../UI/Card'
import Inputs from './Inputs.js'
import logo from '../../img/main-logo.png'


const LoginPanel = () => {
  return (
    <div className="login-panel">

    <img src={logo} alt="GooApp logo" className="logo"></img>
      
    <Card>
        <Inputs></Inputs>
    </Card>

    </div>
  );
}

export default LoginPanel;
