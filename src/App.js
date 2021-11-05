import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./views/Home.jsx";
import { Wishlist } from "./views/Wishlist";
import Bookcard from "./components/Bookcard.jsx";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Wishlist" component={Wishlist} />
            <Route exact path="/Bookcard" component={Bookcard} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
