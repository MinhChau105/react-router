import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div>
        <div>
  <header className="masthead text-center text-white">
    <div className="masthead-content">
      <div className="container">
        {/* <h1 className="masthead-heading mb-0">Chi Tiet</h1> */}
      </div>
    </div>
  </header>
  
    <div className="links">
    <a href="/Tintuc">Tin Tuc</a>
    <a href="/Chitiet">Chi Tiet</a>


  
    <ul>
      <li>
        <Link to="/Chitiet">Home</Link>
      </li>
      <li>
        <Link to="/Tintuc">About</Link>
      </li>
    </ul>
 
    
    
  </div>
  
</div>

      </div>
    );
  }
}

export default Menu;
