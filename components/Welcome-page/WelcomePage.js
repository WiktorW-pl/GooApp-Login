import './WelcomePage.css';
import Card from '../UI/Card'
// import Button from '../UI/Button'

const WelcomePage = (props) => {

  const logoutHandler = (data) =>{
    localStorage.removeItem('isLoggedIn');
    props.isValid(data);
  }


  return (
      <Card>
        <div className='welcome-page-container'>
          <h1>Hello!</h1>
          <p>This is just a demo, for learning purpose :)</p>
          <button onClick={logoutHandler}>Log out</button>
        </div>
      </Card>
  );
}

export default WelcomePage;
