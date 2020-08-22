import React, { Component } from 'react';

class JS extends Component {
  render() {
    return (
      <>
        <div style={{ maxWidth: "100%" }}>
          <div style={{ maxWidth: "800px", width: "100%", marginLeft: "auto", marginRight: "auto", overFlowWrap: "break-word" }}>
            <h1> ChatApp - project </h1>
            <p>
              Description: A very much work-in-progress app for video-conferencing. It allows video conferencing for multiple participants, but the code is a bit sketchy and it only functions like 2/3rds of the time. It is currently more reliable on Firefox than other browsers. It allows for reliable real-time chatting in the conference rooms however.
          </p>
            <p>
              Technologies: React, Node, Express, Mongoose, React-router-dom, React-bootstrap, MediaDevices API, WebRTC, and Socket.io.
          </p>
            <p style={{ overflowWrap: "break-word" }}>
              Available: <a href="https://roninchatapp.herokuapp.com/"> https://roninchatapp.herokuapp.com/</a>
            </p>
            <p style={{ overflowWrap: "break-word" }}>
              Source for the app: <a href="https://github.com/RoniNiklas/roninchatapp/"> https://github.com/RoniNiklas/roninchatapp</a>
            </p>
          </div>
        </div>
        <div style={{ maxWidth: "100%" }}>
          <div style={{ maxWidth: "800px", width: "100%", marginLeft: "auto", marginRight: "auto", overFlowWrap: "break-word" }}>
            <h1> A collection of smaller JS projects </h1>
            <p>
              Description: A collection of smaller React projects. Includes:
              <p>
                - Application App for Wolt - A restaurant lister and list sorter done as a part of the application process for Wolt's summer internship.
              </p>
              <p>
                - Application App for Eficode -  A public transport route finding app that shows you between one and three ways of getting to the Eficode offices in Helsinki. Done as a part of the application process for Eficode's summer internship.
             </p>
              <p>
                - Fitness App - A compilation of helpful tools to help you in physical training. Currently includes a timer and a weight calculator. **WIP**
              </p>
              <p>
                - Dyslexia App - An app that is basically a reader, where you can alter the text's font, spacing, colors etc. Also uses the Web Speech API and the Speech Synthesis API to enable speech-to-text and text-to-speech to make text-handling easier.
              </p>
            </p>
            <p>
              Technologies: React, Node, Express, Web Speech API, and Speech Synthesis API.
            </p>
            <p style={{ overflowWrap: "break-word" }}>
              Available: <a href="https://roninreactprojs.herokuapp.com/"> https://roninreactprojs.herokuapp.com/</a>
            </p>
            <p style={{ overflowWrap: "break-word" }}>
              Source for the app: <a href="https://github.com/RoniNiklas/randomreactprojs"> https://github.com/RoniNiklas/randomreactprojs</a>
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default JS;