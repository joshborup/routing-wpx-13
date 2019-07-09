import React, { Component } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Route, Switch } from "react-router-dom";
import StudentPage from "./components/StudentPage";
import Header from "./components/Header";
import Profile from "./components/Profile";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: "Well Hello There!"
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          {/* home route */}
          <Route exact path="/" component={Home} />

          {/* student profile route */}
          <Route path="/student_page/:id" component={Profile} />

          {/* main student page */}
          <Route path="/student_page" component={StudentPage} />

          {/* contact route */}
          <Route path="/contact" component={Contact} />

          {/* catch all for any route we havent set up */}
          <Route
            path="*"
            render={() => {
              return (
                <div>
                  <span>Catch All</span>
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
