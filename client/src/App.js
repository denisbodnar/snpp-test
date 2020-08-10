import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Products from "./Products";
import ProductPage from "./ProductPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/:id" children={<ProductPage />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
