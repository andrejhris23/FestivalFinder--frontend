import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SearchFestivals from "../src/components/SearchFestivals/SearchFestivals";
import Home from "./components/Home/Home";
import { UserContext } from './contexts/UserContext';
import MyFestivals from '../src/components/MyFestivals/MyFestivals';


function App() {

  const [user, setUser] = useState({});
  
  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={{user, setUser}}>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={SearchFestivals} />
          <Route path="/myFestivals" exact component={MyFestivals} />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
