import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}

      <Router>
        <Header />
        <Switch>
          <Route path="/chat"></Route>
          <Route path="/">
            {/* tinder cards*/}
            <TinderCards></TinderCards>
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
