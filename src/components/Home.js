import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div style={{ maxWidth: "800px", width: "100%", marginLeft: "auto", marginRight: "auto" }}>
        <h1>Roni's portfolio</h1>
        <p>
          On this page, you'll find links to relevant projects.
        </p>
        <p>
          Projects:
        </p>
        <ul>
          <li>
            <Link to="/spring">Spring Framework</Link>
          </li>
          <li>
            <Link to="/javascript">Javascript / MERN Stack</Link>
          </li>
          <li>
            <Link to="/python">Python Flask</Link>
          </li>
        </ul>

        <p>
          Note that Heroku puts apps to sleep, which might make them slow to load on first attempt.
        </p>
        <p>
          Source to this page: <a href="https://github.com/RoniNiklas/Portfolio"> https://github.com/RoniNiklas/Portfolio </a>
          <br/>
          Note that this page uses React components instead of functions, whereas other React projects will use functions.
        </p>
      </div>
    );
  }
};

export default Home;
