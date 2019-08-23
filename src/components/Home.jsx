import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div style={{ maxWidth: "800px", width:"100%", marginLeft:"auto", marginRight:"auto"}}>
        <h1>Ronin portfolio</h1>
        <p>
          Tältä sivulta löydät relevanteilla teknologioilla tehtyjä harjoitus- /kurssiprojekteja.
        </p>
        <p>
          Teknologiat:
        </p>
        <ul>

          <li>
            <Link to="/spring">Spring Framework - projektin kuvaus</Link>
          </li>
          <li>
            <Link to="/javascript">Javascript / MERN-stack - projektin kuvaus</Link>
          </li>
        </ul>

        <p>
          Huomaa molemmissa tapauksissa, että heroku nukuttaa sinne uploadattuja appeja, mikä johtaa niiden käynnistymisen hitauteen ja satunnaisesti jopa kaatumiseen ensimmäisellä yrittämällä. Herättyään apit toimivat normaalisti.
        </p>
        <p>
          Tämän sivun source: INSER GITHUB LINK
        </p>
      </div>
    );
  }
};

export default Home;