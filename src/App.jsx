import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SearchFestivals from "../src/components/SearchFestivals/SearchFestivals";
import Home from "./components/Home/Home";


function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={SearchFestivals} />
        <Route path="/myFestivals" exact component={<></>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
