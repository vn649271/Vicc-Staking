import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StakingPage from "./pages/StakingPage";

const App = () => {
  return (
    <>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/stake" exact>
        <StakingPage />
      </Route>
    </Switch>
  </>
  );
};

export default App;
