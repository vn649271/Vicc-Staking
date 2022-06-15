import React from "react";
import { Switch, Route } from "react-router-dom";
import StakingPage from "./pages/StakingPage";
import LandingPage from "./pages/landingpage/LandingPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/staking" exact>
          <StakingPage />
        </Route>
        <Route path="/token_contract" exact>
          <a href="https://testnet.bscscan.com/token/0x2b3d6dfd444695e9aa37c0e4e8fc47f26c9cc594" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
