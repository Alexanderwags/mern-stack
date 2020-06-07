import React from "react";
import { Route, Switch, BrowserRouter as Routerr } from "react-router-dom";
import Home from "pages/Home";
import Header from "componets/Header";

function Router() {
  return (
    <>
      <Header />
      <Routerr>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Routerr>
    </>
  );
}

export default Router;
