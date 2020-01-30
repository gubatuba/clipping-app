import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
