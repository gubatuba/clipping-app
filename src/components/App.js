import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import EmpresasPage from "./empresas/EmpresasPage";
import ClientesPage from "./clientes/ClientesPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/empresas" component={EmpresasPage} />
        <Route exact path="/clientes" component={ClientesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
