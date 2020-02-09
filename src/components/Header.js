import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar style={{marginLeft:"auto", marginRight:"auto"}}>
          <Link to="/" style={{ color: 'white', padding: '10px' }}>Home</Link>
          <Link to="/spring" style={{ color: 'white', padding: '10px' }}>Spring Framework</Link>
          <Link to="/javascript" style={{ color: 'white', padding: '10px' }}>MERN-stack</Link>
          <Link to="/python" style={{ color: 'white', padding: '10px' }}>Python</Link>
        </Toolbar>
      </AppBar>
    )
  }
};

export default Header;