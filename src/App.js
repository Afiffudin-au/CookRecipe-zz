import React from 'react';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ReceipeDetail from './component/ReceipeDetail/ReceipeDetail';
import ResultSearch from './component/ResultSearch/ResultSearch';
import Navbar from './component/Navbar/Navbar';
function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/detail">
            <ReceipeDetail/>
          </Route>
          <Route path="/resultRecipe">
            <ResultSearch/>
          </Route>
          <Route path="/">
            <Home/> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
