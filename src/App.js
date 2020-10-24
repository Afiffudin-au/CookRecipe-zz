import React from 'react';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ReceipeDetail from './component/ReceipeDetail/ReceipeDetail';
function App() {
  return (
    <Router> 
      <div className="App">
        <Switch>
          <Route path="/detail">
            <ReceipeDetail/>
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
