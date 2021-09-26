import React, { lazy, Suspense } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Home from "../views/home";

const Routes = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>......</div>}>
        <Redirect to="/" />
        <Route path="/" exact component={Home}></Route>
        <Route path="/page1" component={lazy(() => import("../views/page1"))}></Route>
        <Route path="/page2" component={lazy(() => import("../views/page2"))}></Route>
      </Suspense>
    </HashRouter>
  );
};

export default Routes;
