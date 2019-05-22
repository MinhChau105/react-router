import React, { Component } from 'react';
import './../css/App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Menu from './menu'
// import Chitiet from './chitiet'
// import Tintuc from './tintuc'
import Dieuhuong from './dieuhuong';
function App() {
  return (
    <Router>
    <div>
      <Menu/>
      {/* <Chitiet/> */}
      {/* <Tintuc/> */}
      <Dieuhuong/>
      </div>
    </Router>
  );
}

export default App;
