import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Techmaxx</h1>
         
        {/* <Optin /> */}
        {/* <Preloader /> */}

          <div class="box">
              <div class="label"> Need tickets for your next event?</div>
              <a href="https://gwdev.getform.com/jjzmj" > Click here to request access to TicketMaxx</a>
          </div>

        {/* <a href="https://gwdev.getform.com/jjzmj" > Request access to Ticketmaxx</a> */}

      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
