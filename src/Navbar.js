import React from 'react';
import "./Navbar.css";
function Navbar(){
    return(<>
     <div className="nav">
      <div className="Logo">
        <div className="Logo_image">
          {/* <img src={mainlogo} /> */}
        </div>
        <span className="Logo_text">NewsMonkey</span>
      </div>
      <ul>
        <li className="item">
          <a href="/">Category</a>
        </li>
        <li className="item">
          <a href="/">Category</a>{" "}
        </li>
        <li className="item">
          <a href="/"> Category</a>
        </li>
        <li className="item">
          <a href="/">Category</a>{" "}
        </li>
        <li className="item">
          <a href="/">Category</a>{" "}
        </li>
        <li className="item">
          <a href="/">Category</a>{" "}
        </li>
      </ul>
    </div>
    </>);
}
export default Navbar;