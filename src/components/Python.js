import React, { Component } from 'react';

class Python extends Component {
    render() {
        return (
            <div style={{ maxWidth: "100%" }}>
                <div style={{ maxWidth: "800px", width: "100%", marginLeft: "auto", marginRight: "auto", overFlowWrap: "break-word" }}>
                    <h1> Python Flask project </h1>
                    <p>
                        Description: An app for managing orders sent to a restaurant. A restaurant manager can see orders, add items to the restaurant's menu, delete items from the menu and edit items in the menu.
                        A customer can send orders and receive receipts.
                    </p>
                    <p>
                        Technologies: Python, flask, flask-sqlalchemy, wtforms, postgresql
                    </p>
                    <p style={{ overflowWrap: "break-word" }}>
                        Customer view: <a href="https://roni-tietokantasovellus.herokuapp.com/"> https://roni-tietokantasovellus.herokuapp.com/</a> <br/>
                        Manager view: <a href="https://roni-tietokantasovellus.herokuapp.com/login"> https://roni-tietokantasovellus.herokuapp.com/login</a> <br/>
                        Test user: <br/>
                        User: Admin <br/>
                        Password: Password <br/>
                    </p>
                    <p style={{ overflowWrap: "break-word" }}>
                        Source: <a href="https://github.com/RoniNiklas/tietokantasovellus/">https://github.com/RoniNiklas/tietokantasovellus</a>
                    </p>
                </div>
            </div>
        );
    }
};

export default Python