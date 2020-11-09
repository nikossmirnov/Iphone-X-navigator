import React from "react";
import "./StartPage.css";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const StartPage = (props) => {
  //destructuring props
  const { handleClick, className } = props;
  return (
    <IconContext.Provider value={{ color: "#9F9FA0" }}>
      <div className='page-wrapper' className={className}>
        <div className='page-content'>
          <FaBars onClick={handleClick} />
          <div className='page-text'>START</div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default StartPage;
