import React, { Component } from 'react'
import SpringImg from "../data/SpringImg.js"

class Spring extends Component {
  render() {
    const image = SpringImg.image
    return (
      <div style={{ maxWidth: "100%" }}>
        <div style={{ maxWidth: "800px", width: "100%", marginLeft: "auto", marginRight: "auto", overFlowWrap: "break-word" }}>
          <h1> Spring framework - project </h1>
          <p>
            Description: A social media app, where you can create an account. A user can post messages on their wall and their friends' walls. A user can also upload images, delete images, comment and like images, set up images as profile pics. Users can also like and comment on other peoples's messages. Users can also send and accept/reject friend requests.
          </p>
          <p>
            Technologies: Spring framework including Spring security, Thymeleaf, Postgresql, HTML5, CSS.
          </p>
          <p style={{ overflowWrap: "break-word" }}>
            Available: <a href="https://roninface.herokuapp.com/login"> https://roninface.herokuapp.com/login</a>
          </p>
          <p>
            Test user: <br/>
            User: make <br/>
            Password: salasana <br/>
          </p>
          <p style={{ overflowWrap: "break-word" }}>
            Source: <a href="https://github.com/RoniNiklas/roninface"> https://github.com/RoniNiklas/roninface</a>
          </p>
        </div>
        <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
          <img src={image} alt="Tässä kuva projektista" style={{ maxWidth: "800px", width: "100%", maxHeight: '350px' }} />
        </div>
      </div>
    );
  }
};

export default Spring;