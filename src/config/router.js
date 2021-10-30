import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "../container/About";
import Contact from "../container/Contact";
import Error from "../container/Error";
import Home from "../container/Home";
import Profile from "../container/Profile";
import Services from "../container/Services";

export default function AppMaster() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/services" component={Services}/>
          <Route path="/profile/:id" component={Profile}/>
          <Route path="*" component={Error}/>
          </Switch>
    </Router>
  );
}