import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StakingPage from "./pages/StakingPage";
import RoadmapPage from "./pages/RoadmapPage";
import TokenomicsPage from "./pages/TokenomicsPage";
import LandingPage from "./pages/landingpage/LandingPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/stake" exact>
          <StakingPage />
        </Route>
        <Route path="/roadmap" exact>
          <RoadmapPage />
        </Route>
        <Route path="/tokenomics" exact>
          <TokenomicsPage />
        </Route>
        <Route path="/token_contract" exact>
          <a href="https://testnet.bscscan.com/token/0x2b3d6dfd444695e9aa37c0e4e8fc47f26c9cc594" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
