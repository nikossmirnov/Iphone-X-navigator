import "./App.css";
import { useState } from "react";
import StartPage from "./StartPage";

const App = () => {
  //setting up the state and handling clicks
  const [visible, setVisible] = useState(true);
  const handleClick = () => setVisible(!visible);
  // interactive css classes
  const activeClassName = "page-wrapper-active";
  const className = "page-wrapper";
  return (
    /* toggling between navbar and the page */
    <div className='App'>
      {visible ? (
        <StartPage className={className} handleClick={handleClick} />
      ) : (
        <StartPage className={activeClassName} handleClick={handleClick} />
      )}
      <div className='nav-container'>
        <div className='nav-header'>Viktor</div>
        <ul className='nav-list'>
          <li onClick={handleClick}>Start</li>
          <li>Your Cart</li>
          <li>Favourites</li>
          <li>Your Orders</li>
          <hr className='hr-line' />
          <li>Sign Out</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
