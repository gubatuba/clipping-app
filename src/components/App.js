import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CompaniesPage from "./companies/CompaniesPage";
import ClientsPage from "./clients/ClientsPage";
import ManageCompanyPage from "./companies/ManageCompanyPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/companies" component={CompaniesPage} />
        <Route exact path="/clients" component={ClientsPage} />
        <Route exact path="/company/:slug" component={ManageCompanyPage} />
        <Route exact path="/company" component={ManageCompanyPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
