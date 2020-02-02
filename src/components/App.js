import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CompaniesPage from "./companies/CompaniesPage";
import ClientsPage from "./clients/ClientsPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/companies" component={CompaniesPage} />
        <Route exact path="/clients" component={ClientsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
