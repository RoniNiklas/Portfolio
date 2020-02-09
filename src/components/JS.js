import React, { Component } from 'react';

class JS extends Component {
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <div style={{ maxWidth: "800px", width: "100%", marginLeft: "auto", marginRight: "auto", overFlowWrap: "break-word" }}>
          <h1> Javascript / MERN-stack - project </h1>
          <p>
            Description: A very much work-in-progress app for chatting via browser. Uses socket.io for realtime message transfer, and mongodb for saving conversations. UI is currently quite ugly.
          </p>
          <p>
            Technologies: React, Node, Express, Mongoose, React-router-dom, React-bootstrap and Socket.io.
          </p>
          <p style={{ overflowWrap: "break-word" }}>
            Available: <a href="https://roninchatapp.herokuapp.com/"> https://roninchatapp.herokuapp.com/</a>
          </p>
          <p style={{ overflowWrap: "break-word" }}>
            Source for the app: <a href="https://github.com/RoniNiklas/roninchatapp/"> https://github.com/RoniNiklas/roninchatapp</a>
          </p>
        </div>
      </div>
    );
  }
};

export default JS;