import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Pages
import MainPage from "./pages";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import DashboardPage from "./pages/dashboard";
import NotFoundPage from "./pages/404";
import ProgressMapPage from "./pages/progressMap";
import StateOverviewPage from "./pages/stateOverview";
import HikingHistoryPage from "./pages/hikingHistory";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/signIn" component={SignInPage} />
          <Route exact path="/signUp" component={SignUpPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/progress-map" component={ProgressMapPage} />
          <Route exact path="/state-overview" component={StateOverviewPage} />
          <Route exact path="/hiking-history" component={HikingHistoryPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
