import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import "./modules/assets/css/material-dashboard-react.css?v=1.8.0";
import Admin from "./modules/layouts/Admin.js";
//Create a Main Component
class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/admin" component={Admin} />
            <Redirect from="/dashboard" to="/admin/dashboard" />
            <Route render={() => <h3>Page not Found</h3>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default Main;
