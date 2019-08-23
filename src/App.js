import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home.js";
import Spring from "./components/Spring.js";
import JS from "./components/JS.js";
import Header from "./components/Header.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Menu">
          <Header />
        </div>
        <div style={{ margin: '80px' }}>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/spring" render={() => <Spring />} />
          <Route exact path="/javascript" render={() => <JS />} />
          <Route path="*" render={() => (<Redirect to="/" />)} />
        </div>
      </Router>
    )
  };
}

export default App;
