import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Profile from "./Profile";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>welcome to app</h1>
      <div>
        <Link to="/about">go to about</Link>
        <br />
        <Link to="/contact">go to contact</Link>
        <br />
        <Link to="/">home</Link>
        <br />
        <Link to="/profile/A">profile A</Link>
        <br />
        <Link to="/profile/B">profile B</Link>
      </div>

      <div>
        <Switch>
          <Route path="/about" render={() => <About />} />
          <Route path="/contact" render={() => <Contact />} />
          <Route
            path="/profile/:id"
            render={routerProps => <Profile {...routerProps} />}
          />
          <Route path="/" component={() => <p>hello, we're home</p>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
