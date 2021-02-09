import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import MainScreen from "./Components/MainScreen";

const GoogleMapsAPI = lazy(() => import("./Components/GoogleMapsAPI"));
const GoogleMapReact = lazy(() => import("./Components/GoogleMapReactScreen"));

function App() {
  return (
    <div className="App">
      <header></header>
      <section className="myApp">
        <Router>
          <div className="nav">
            <NavLink exact to="/" activeClassName="selected">
              Home
            </NavLink>
            <NavLink exact to="/gmapsapi" activeClassName="selected">
              Google Maps API
            </NavLink>
            <NavLink exact to="/gmapreact" activeClassName="selected">
              Google Map React Component
            </NavLink>
          </div>
          <Suspense fallback={<div>Loading ...</div>}>
            <Switch>
              <Route path="/gmapsapi">
                <GoogleMapsAPI />
              </Route>
              <Route path="/gmapreact">
                <GoogleMapReact />
              </Route>
              <Route path="/">
                <MainScreen />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </section>
      <footer>
        <p>Page by Roger Briggen</p>
      </footer>
    </div>
  );
}

export default App;
