import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header */}

        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />

            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            {/* tinder cards*/}
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>

        {/*Buttons below tinder */}

        {/* chat screens */}
        {/* individual chat screen*/}
      </Router>
    </div>
  );
}

export default App;
