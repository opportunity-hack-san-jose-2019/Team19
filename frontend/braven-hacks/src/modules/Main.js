import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import SignIn from "SignIn";
import SignUp from "./SignUp";
import jwt_decode from "jwt-decode";

//Create a Main Component
class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/sigin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route render={() => <h3>Page not Found</h3>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default Main;
