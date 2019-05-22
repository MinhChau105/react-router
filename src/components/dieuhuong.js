import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Tintuc from './tintuc';
import Chitiet from './chitiet';



class Dieuhuong extends Component {
    render() {
        return (
        <Router>
            <Route path="/tintuc"  component={Tintuc} />
            <Route path="/chitiet" component={Chitiet} />
           
        </Router>
        
        );
    }
}

export default Dieuhuong;
