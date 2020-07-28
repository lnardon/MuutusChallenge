import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Comic from "./pages/Comic";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/comic/:id" component={Comic} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
